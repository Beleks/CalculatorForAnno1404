<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import PopupChain from "../components/PopupChain.vue";

import { useMainStore } from "../store/index.js";

const version = __APP_VERSION__

const router = useRouter();
const route = useRoute();
const mainStore = useMainStore();

const tabs = ref([
  {
    tab: "west",
    title: "Запад",
  },
  {
    tab: "east",
    title: "Восток",
  },
  {
    tab: "resources",
    title: "Стр. ресурсы",
  },
  // {
  //   tab: "menu",
  //   title: "Меню",
  // },
]);

const currentTab = ref("west");
const popupOpen = ref(false);
const popupProduct = ref("");
const products = ref({
  west: [
    "fish",
    "cider",
    "spices",
    "linen_garments",
    "bread",
    "beer",
    "leather_jerkins",
    "books",
    "candlesticks",
    "meat",
    "wine",
    "fur_coats",
    "glasses",
    "brocade_robes",
  ],
  east: ["dates", "milk", "carpets", "pearls", "coffee", "toilet_water", "marzipan"],
  resources: ["wood", "instruments", "stone", "glass", "ropes", "mosaic", "weapons", "military_vehicles", "cannons"],
});

const buildings = computed(() => {
  let buildings = [];

  if (!products.value[currentTab.value]) {
    return;
  }

  products.value[currentTab.value].forEach((product) => {
    let imgPath = new URL(`../assets/images/${product}.png`, import.meta.url).href;
    let industrialBuildings = mainStore.totalProductIntake(product);
    let productUsageRate =
      (industrialBuildings.totatalIntake * 100) /
      Math.ceil(industrialBuildings.totatalIntake / industrialBuildings.productRate) /
      industrialBuildings.productRate;
    productUsageRate = Math.floor(productUsageRate);
    let color;
    if (productUsageRate >= 90) {
      color = "critic";
    } else if (productUsageRate >= 60) {
      color = "warning";
    } else if (productUsageRate < 60) {
      color = "good";
    } else {
      color = "";
    }
    buildings.push({
      type: product,
      imgPath,
      ...industrialBuildings,
      style: {
        width: `${productUsageRate}%`,
      },
      class: color,
    });
  });
  return buildings;
});

const residents = computed(() => {
  if (currentTab.value === "east" || currentTab.value === "west") {
    let residents = mainStore.getPopulation(currentTab.value);

    residents.forEach((element) => {
      element.imgPath = new URL(`../assets/images/${element.type}.png`, import.meta.url).href;
    });
    return residents;
  }
});

function switchTab(tab) {
  popupOpen.value = false;
  currentTab.value = tab;
}

function changePopulation() {
  router.push({
    name: "Population",
  });
}

function showChain(type) {
  popupProduct.value = type;
  popupOpen.value = true;
}
</script>

<template>
  <div>
    <div class="tabs">
      <div
        class="tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active_tab: currentTab == tab.tab }"
        @click="switchTab(tab.tab)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div v-if="currentTab == 'east' || currentTab == 'west'">
      <div class="population" @click="changePopulation()">
        <div class="residents">
          <div class="resident" v-for="(resident, index) in residents" :key="index">
            <div class="resident_img">
              <img :src="resident.imgPath" :alt="resident.type" />
            </div>
            <div class="count_resident">{{ resident.count }}</div>
          </div>
        </div>
      </div>
      <span>Необходимое кол-во зданий:</span>
    </div>
    <div class="products">
      <div class="product" v-for="(build, index) in buildings" :key="index" @click="showChain(build.type)">
        <div>
          <div class="img">
            <img :src="build.imgPath" :alt="build.type" />
          </div>
        </div>
        <div class="count" v-show="currentTab !== 'resources'">
          <div class="utility">
            <div :class="[build.class, 'line']" :style="build.style"></div>
          </div>
          {{ Math.ceil(build.totatalIntake / build.productRate) }}
        </div>
      </div>
    </div>
    <div v-if="popupOpen">
      <PopupChain :product="popupProduct" @closePopup="popupOpen = false" />
    </div>
    <div class="app_version">v {{ version }}</div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
}
.tab {
  flex-grow: 1;
  padding: 0.6rem 0;
}
.active_tab {
  background-color: #ffe4c4;
}
.population {
  margin: 0.5rem;
  padding: 0.3rem;
  background-color: white;
  border-radius: 3px;
  border: 1px solid rgb(200, 200, 200);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: hsla(0, 0%, 50%, 0.1);
  }
}
.residents {
  display: flex;
  justify-content: space-around;
}
.resident {
  display: flex;
  align-items: center;
}
.resident_img {
  margin-right: 2px;
}
.resident_img img {
  width: 20px;
  height: 20px;
}
/* content */
.products {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product {
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
  }
}
.img {
  width: 46px;
  height: 46px;
}
.utility {
  width: 100%;
  border: 1px solid rgb(200, 200, 200);
  overflow: hidden;
  margin-bottom: 5px;
  border-radius: 3px;
  height: 5px;
  .line {
    width: 100%;
    height: 100%;
  }
  .good {
    background-color: #27ae60;
  }
  .warning {
    background-color: #f8ae4f;
  }
  .critic {
    background-color: #f74545;
  }
}
.count {
  margin-top: 2px;
}
</style>
