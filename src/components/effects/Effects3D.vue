<template>
  <div class="container">
    <h2>3D Effects</h2>

    <div class="filter">
      <label>
        <input type="radio" value="" v-model="selectedType" />
        All
      </label>
      <label v-for="type in types" :key="type">
        <input type="radio" :value="type" v-model="selectedType" />
        {{ type }}
      </label>
    </div>

    <div v-for="effect in all3dEffects" :key="effect.id" :ref="setEffectRef(effect)" style="margin-bottom: 60px;">
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
    all3dEffects() {
      const group = effectsData.find((g) => g.category === '3d');
      return group ? group.effects : [];
    },
    types() {
      const typesSet = new Set(this.all3dEffects.map((e) => e.type));
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
.filter label {
  font-weight: 600;
  cursor: pointer;
}
.filter input[type='radio'] {
  margin-right: 5px;
}
</style>
