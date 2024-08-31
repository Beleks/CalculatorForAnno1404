<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import PopupChain from "../components/PopupChain.vue";

import { useMainStore } from "../store/index.js";

const router = useRouter();
const route = useRoute();
const mainStore = useMainStore();

const population = ref([
  {
    type: "beggar",
    count: 0,
  },
  {
    type: "peasant",
    count: 0,
  },
  {
    type: "сitizen",
    count: 0,
  },
  {
    type: "patrician",
    count: 0,
  },
  {
    type: "noblemen",
    count: 0,
  },
  {
    type: "nomads",
    count: 0,
  },
  {
    type: "envoys",
    count: 0,
  },
]);
const rezidents = computed(() => {
  let populationFromState = mainStore.population;
  for (let index = 0; index < populationFromState.length; index++) {
    let imgPath = new URL(`../assets/images/${populationFromState[index].type}.png`, import.meta.url).href;
    population.value[index].imgPath = imgPath;
    population.value[index].count = populationFromState[index].count;
  }
  return population.value;
});
function saveChange() {
  let newPopulation = [];
  population.value.forEach((element) => {
    newPopulation.push({
      type: element.type,
      count: element.count,
    });
  });
  mainStore.savePopulation(newPopulation);
  router.back();
}
</script>

<template>
  <div class="rezidents">
    <div>
      <div class="rezident" v-for="(rezident, index) in rezidents" :key="index">
        <div>
          <img :src="rezident.imgPath" alt="" />
        </div>
        <div>
          <input type="number" min="0" max="100000" v-model="rezident.count" />
        </div>
      </div>
    </div>

    <div class="button" @click="saveChange()">Ок</div>
  </div>
</template>

<style lang="scss" scoped>
.rezidents {
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rezident {
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    background-color: white;
    text-align: left;
    border-radius: 3px;
    padding: 0.4rem 0.5rem;
    border: 1px solid rgb(200, 200, 200);
    &:focus {
      border: 1px solid #ffe4c4;
    }
  }
}

.button {
  font-weight: bold;
  margin-top: 1rem;
  background-color: #ffe4c4;
  border-radius: 5px;
  padding: 0.8rem 2rem;
}
input {
  all: unset;
}
</style>
