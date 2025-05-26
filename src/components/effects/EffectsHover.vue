<template>
  <div class="container">
    <h2>Hover Effects</h2>
    <div class="sidebar">
      <ul>
        <li><a @click.prevent="setSelectedType('')">Đầu Trang</a></li>
        <li v-for="type in types" :key="type">
          <a @click.prevent="setSelectedType(type)" :class="{ active: selectedType === type }">
            {{ type }}
          </a>
        </li>
      </ul>
    </div>

    <div v-for="effect in allHoverEffects" :key="effect.id" :ref="setEffectRef(effect)" style="margin-bottom: 60px;">
      <EffectTabs :effect="effect" />
    </div>
  </div>
</template>

<script>
import EffectTabs from './EffectTabs.vue';
import effectsData from '../data/effect.json';

export default {
  components: { EffectTabs },
  data() {
    return {
      selectedType: '',
      effectRefs: {}
    };
  },
  computed: {
    allHoverEffects() {
      const group = effectsData.find((g) => g.category === 'hover');
      return group ? group.effects : [];
    },
    types() {
      const typesSet = new Set(this.allHoverEffects.map((e) => e.type));
      return Array.from(typesSet);
    }
  },
  watch: {
    selectedType(newType) {
      if (!newType) return;

      this.$nextTick(() => {
        const ref = this.effectRefs[newType];
        if (ref && ref[0]) {
          ref[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  },
  methods: {
    setEffectRef(effect) {
      return (el) => {
        if (!el) return;
        if (!this.effectRefs[effect.type]) {
          this.effectRefs[effect.type] = [];
        }
        this.effectRefs[effect.type].push(el);
      };
    },
    setSelectedType(type) {
      this.selectedType = type;
      if (type === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

h2 {
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin-bottom: 30px;
}

.filter {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 40px;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #2c3e50;
  color: white;
  padding-top: 40px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.sidebar:hover {
  width: 300px;
}

.sidebar ul {
  margin-top: 50px;
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  padding: 15px;
  text-align: center;
  transition: all 0.3s ease;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: block;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.sidebar ul li a:hover {
  background-color: #16a085;
  color: #ecf0f1;
}

.sidebar ul li a.active {
  background-color: #34495e;
  color: #ecf0f1;
}

.sidebar ul li:hover {
  background-color: #34495e;
  transform: scale(1.1);
}
</style>
