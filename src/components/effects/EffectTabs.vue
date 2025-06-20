<template>
  <h1>{{ effect.id }}. {{ effect.title }}. {{ effect.author }}</h1>
  <div>
    <div class="tabs">
      <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="{ active: activeTab === tab }">
        {{ tab.toUpperCase() }}
      </button>
      <button class="copy" @click="copyToClipboard">Copy</button>
    </div>

    <div v-if="activeTab === 'html'" class="tab-content">
      <pre><code class="language-html" v-html="formatHtmlCode(effect.html)"></code></pre>
    </div>
    <div v-else-if="activeTab === 'css'" class="tab-content">
      <pre><code class="language-css" v-html="formatCode(effect.css)"></code></pre>
    </div>
    <div v-else-if="activeTab === 'js'" class="tab-content">
      <pre><code class="language-js" v-html="formatCode(effect.js)"></code></pre>
    </div>
    <div v-else class="tab-content_result">
      <iframe :srcdoc="generatedPreview" />
    </div>
  </div>
  <div v-if="toastMessage" class="toast">{{ toastMessage }}</div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { effect } from 'vue'

export default {
  props: {
    effect: Object,
  },
  data() {
    return {
      tabs: ['html', 'css', 'js', 'result'],
      activeTab: 'result',
      toastMessage: '',
    }
  },
  computed: {
    generatedPreview() {
      return `
        <html>
          <head>${this.effect.link ?? ''}<style>${this.effect.css}</style></head>
          <body>
            ${this.effect.html}
            <script>${this.effect.js}<\/script>
          </body>
        </html>
      `
    },
  },
  mounted() {
    this.highlightCode()
  },
  updated() {
    this.highlightCode()
  },
  watch: {
    activeTab() {
      this.highlightCode()
    },
  },
  methods: {
    highlightCode() {
      this.$nextTick(() => {
        document.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightElement(block)
        })
      })
    },
    formatCode(code) {
      let indentLevel = 0
      const indentSize = 2
      const escaped = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')

      const lines = escaped.match(/[^{};]+[{};]?/g) || []

      return lines
        .map((line) => {
          line = line.trim()
          if (line.endsWith('}')) indentLevel--
          const indentation = ' '.repeat(indentLevel * indentSize)
          const formattedLine = indentation + line
          if (line.endsWith('{')) indentLevel++
          return formattedLine
        })
        .join('\n')
    },
    formatHtmlCode(code) {
      const escaped = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')

      const tokens = escaped.split(/(&lt;[^&]+&gt;)/).filter(token => token.trim() !== '')

      let indentLevel = 0
      const indentSize = 2

      return tokens.map(token => {
        const trimmed = token.trim()
        if (/^&lt;\/[^>]+&gt;$/.test(trimmed)) indentLevel--
        const indentation = ' '.repeat(indentLevel * indentSize)
        const line = indentation + trimmed
        if (
          /^&lt;[^\/!][^&]*[^\/]&gt;$/.test(trimmed) &&
          !/^&lt;(input|img|br|hr|meta|link)[^&]*\/?&gt;$/.test(trimmed)
        ) {
          indentLevel++
        }
        return line
      }).join('\n')
    },
    formatPlainCode(code) {
      if (this.activeTab === 'html') {
        const tokens = code.split(/(<[^>]+>)/).filter(token => token.trim() !== '')
        let indentLevel = 0
        const indentSize = 2
        return tokens.map(token => {
          const trimmed = token.trim()
          if (/^<\/[^>]+>$/.test(trimmed)) indentLevel--
          const indentation = ' '.repeat(indentLevel * indentSize)
          const line = indentation + trimmed
          if (
            /^<[^/!][^>]*>$/.test(trimmed) &&
            !/^<(input|img|br|hr|meta|link)[^>]*\/?>$/.test(trimmed)
          ) {
            indentLevel++
          }
          return line
        }).join('\n')
      } else {
        let indentLevel = 0
        const indentSize = 2
        const lines = code.match(/[^{};]+[{};]?/g) || []
        return lines
          .map((line) => {
            line = line.trim()
            if (line.endsWith('}')) indentLevel--
            const indentation = ' '.repeat(indentLevel * indentSize)
            const formattedLine = indentation + line
            if (line.endsWith('{')) indentLevel++
            return formattedLine
          })
          .join('\n')
      }
    },
    showToast(message) {
      this.toastMessage = message
      setTimeout(() => {
        this.toastMessage = ''
      }, 3000)
    },
    copyToClipboard() {
      let content = ''
      if (this.activeTab === 'html') {
        content = this.formatPlainCode(this.effect.html)
      } else if (this.activeTab === 'css') {
        content = this.formatPlainCode(this.effect.css)
      } else if (this.activeTab === 'js') {
        content = this.formatPlainCode(this.effect.js)
      } else {
        this.showToast('Chỉ có thể copy HTML, CSS hoặc JS')
        return
      }
      navigator.clipboard
        .writeText(content)
        .then(() => {
          this.showToast(`Đã copy ${this.activeTab.toUpperCase()} thành công!`)
        })
        .catch((err) => {
          this.showToast('Lỗi khi copy!')
          console.error(err)
        })
    },
  },
}
</script>

<style scoped>
.tabs {
  position: relative;
  display: flex;
  background: #2c3e50;
  padding: 10px;
}

.tabs button {
  background: transparent;
  color: #ecf0f1;
  border: none;
  padding: 10px 15px;
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.tabs .copy {
  position: absolute;
  right: 0;
}

.tabs button:hover,
.tabs button.active {
  background: #34495e;
  border-radius: 6px;
}

.tab-content,
.tab-content_result {
  background: #0d1117;
  border: 1px solid #ccc;
  border-radius: 0 0 6px 6px;
  height: 300px;
  max-height: 350px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  overflow-y: auto;
  overflow-x: auto;
}

.tab-content_result {
  background: white;
  min-height: 300px;
  max-height: 1000px;
  overflow: visible;
}

iframe {
  width: 100%;
  height: auto;
  border: none;
  min-height: 300px;
  display: block;
}

.toast {
  position: fixed;
  bottom: 0;
  right: 0;
  background: #1112123d;
  color: white;
  padding: 12px 18px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  z-index: 9999;
  animation: fadeInOut 3s ease;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  10% {
    opacity: 1;
    transform: translateY(0);
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
