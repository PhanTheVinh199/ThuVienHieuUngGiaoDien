<template>
  <div class="effect-wrapper">
    <h1 class="effect-title">{{ effect.id }}. {{ effect.title }}</h1>
    <div class="effect-container">
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="{ active: activeTab === tab }"
        >
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
        <iframe
          :srcdoc="generatedPreview"
          sandbox="allow-scripts"
          loading="lazy"
          allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
        />
      </div>
    </div>
    <div v-if="toastMessage" class="toast">{{ toastMessage }}</div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export default {
  name: 'EffectViewer',
  props: {
    effect: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tabs: ['html', 'css', 'js', 'result'],
      activeTab: 'result',
      toastMessage: '',
      timestamp: '2025-05-26 07:33:32',
      author: 'VanBao300905'
    }
  },
  computed: {
    generatedPreview() {
      const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: #f5f5f5;
      }

      .effect-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
      }

      ${this.effect.css}
    </style>
  </head>
  <body>
    <div class="effect-wrapper">
      ${this.effect.html}
    </div>
    <script>
      ${this.effect.js}
    <\/script>
  </body>
</html>`.trim()
      return html
    }
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
    }
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
      if (!code) return ''
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
          const indentation = ' '.repeat(Math.max(0, indentLevel * indentSize))
          const formattedLine = indentation + line
          if (line.endsWith('{')) indentLevel++
          return formattedLine
        })
        .join('\n')
    },
    formatHtmlCode(code) {
      if (!code) return ''
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
        const indentation = ' '.repeat(Math.max(0, indentLevel * indentSize))
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
      if (!code) return ''
      if (this.activeTab === 'html') {
        const tokens = code.split(/(<[^>]+>)/).filter(token => token.trim() !== '')
        let indentLevel = 0
        const indentSize = 2
        return tokens.map(token => {
          const trimmed = token.trim()
          if (/^<\/[^>]+>$/.test(trimmed)) indentLevel--
          const indentation = ' '.repeat(Math.max(0, indentLevel * indentSize))
          const line = indentation + trimmed
          if (
            /^<[^/!][^>]*>$/.test(trimmed) &&
            !/^<(input|img|br|hr|meta|link)[^>]*\/??>$/.test(trimmed)
          ) {
            indentLevel++
          }
          return line
        }).join('\n')
      } else {
        return this.formatCode(code)
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
    }
  }
}
</script>

<style scoped>
.effect-wrapper {
  margin: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.effect-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.effect-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

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
  transition: all 0.3s ease;
  border-radius: 6px;
}

.tabs .copy {
  position: absolute;
  right: 10px;
  background: #3498db;
}

.tabs button:hover,
.tabs button.active {
  background: #34495e;
}

.tab-content,
.tab-content_result {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 0 0 8px 8px;
  height: 600px;
  min-height: 500px;
  max-height: 800px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  overflow: auto;
}

.tab-content {
  padding: 15px;
}

.tab-content_result {
  background: white;
  padding: 0;
  position: relative;
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(44, 62, 80, 0.9);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-weight: 500;
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

@media (max-width: 768px) {
  .tab-content,
  .tab-content_result {
    height: 400px;
    min-height: 400px;
  }

  .tabs button {
    padding: 8px 12px;
    font-size: 14px;
  }
}

@media (min-width: 1200px) {
  .tab-content,
  .tab-content_result {
    height: 600px;
    min-height: 600px;
  }
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1b1f23;
}

::-webkit-scrollbar-thumb {
  background: #30363d;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #424a53;
}
</style>
