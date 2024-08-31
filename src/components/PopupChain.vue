<script setup>
import { computed } from "vue";
import { useMainStore } from "../store/index";

const mainStore = useMainStore();

const props = defineProps({
  product: {
    type: String,
    default: "",
  },
});

const chain = computed(() => {
  let chain = mainStore.getChain(props.product);
  chain.forEach((element) => {
    let imgPath = new URL(`../assets/images/${element.type}.png`, import.meta.url).href;
    element.img = imgPath;
  });
  return chain;
});
</script>

<template>
  <div class="popup">
    <div class="header">
      <div class="chain_type">
        <!-- <div class="inactive">Only needed</div> -->
        <div class="active">~100%</div>
      </div>
      <div @click="$emit('closePopup')">
        <span class="material-symbols-outlined"> close </span>
      </div>
    </div>
    <!-- <div>cost</div> -->
    <div class="chain">
      <div class="product" v-for="(product, index) in chain" :key="index">
        <div v-show="index > 1">+</div>
        <div>
          <div>
            <img :src="product.img" alt="" />
          </div>
          <div v-show="index > 0" class="grow_1">{{ product.count }} ({{ product.efficacy * 100 }}%)</div>
        </div>
        <div v-show="index == 0">=</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grow_1 {
  min-width: 80px;
  font-size: 0.75rem;
}
.popup {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 1rem;
  padding-bottom: 2rem;
  background-color: #fff;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.inactive {
  opacity: 0.5;
}
.active {
  background-color: #ffe4c4;
}
.chain {
  display: flex;
  align-items: center;
  overflow-x: auto;
}
.product {
  display: flex;
  align-items: center;
  margin: 0.2rem 0.25rem;
}
.product > div:last-child {
  margin-left: 0.5rem;
}
.chain_type {
  display: flex;
  border: 1px solid #ffe4c4;
}
.chain_type > div {
  padding: 0.2rem 1rem;
}
</style>
