import { ref } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
  const population = ref([
    {
      type: "beggar",
      place: "west",
      count: 0,
      intake: [
        {
          type: "fish",
          rate: 0.007,
        },
        {
          type: "cider",
          rate: 0.003,
        },
      ],
    },
    {
      type: "peasant",
      place: "west",
      count: 0,
      intake: [
        {
          type: "fish",
          rate: 0.01,
        },
        {
          type: "cider",
          rate: 0.0044,
        },
      ],
    },
    {
      type: "сitizen",
      place: "west",
      count: 0,
      intake: [
        {
          type: "fish",
          rate: 0.004,
        },
        {
          type: "cider",
          rate: 0.0044,
        },
        {
          type: "spices",
          rate: 0.004,
        },
        {
          type: "linen_garments",
          rate: 0.0042,
        },
      ],
    },
    {
      type: "patrician",
      place: "west",
      count: 0,
      intake: [
        {
          type: "fish",
          rate: 0.0022,
        },
        {
          type: "cider",
          rate: 0.0023,
        },
        {
          type: "spices",
          rate: 0.0022,
        },
        {
          type: "linen_garments",
          rate: 0.0019,
        },
        {
          type: "bread",
          rate: 0.0055,
        },
        {
          type: "beer",
          rate: 0.0024,
        },
        {
          type: "leather_jerkins",
          rate: 0.0028,
        },
        {
          type: "books",
          rate: 0.0016,
        },
        {
          type: "candlesticks",
          rate: 0.0008,
        },
      ],
    },
    {
      type: "noblemen",
      place: "west",
      count: 0,
      intake: [
        {
          type: "fish",
          rate: 0.0016,
        },
        {
          type: "cider",
          rate: 0.0013,
        },
        {
          type: "spices",
          rate: 0.0016,
        },
        {
          type: "linen_garments",
          rate: 0.0008,
        },
        {
          type: "bread",
          rate: 0.0039,
        },
        {
          type: "beer",
          rate: 0.0014,
        },
        {
          type: "leather_jerkins",
          rate: 0.0016,
        },
        {
          type: "books",
          rate: 0.0009,
        },
        {
          type: "candlesticks",
          rate: 0.0006,
        },
        {
          type: "meat",
          rate: 0.0022,
        },
        {
          type: "wine",
          rate: 0.002,
        },
        {
          type: "fur_coats",
          rate: 0.0016,
        },
        {
          type: "glasses",
          rate: 0.00117,
        },
        {
          type: "brocade_robes",
          rate: 0.00142,
        },
      ],
    },
    {
      type: "nomads",
      place: "east",
      count: 0,
      intake: [
        {
          type: "dates",
          rate: 0.00666,
        },
        {
          type: "milk",
          rate: 0.00344,
        },
        {
          type: "carpets",
          rate: 0.00165,
        },
      ],
    },
    {
      type: "envoys",
      place: "east",
      count: 0,
      intake: [
        {
          type: "dates",
          rate: 0.005,
        },
        {
          type: "milk",
          rate: 0.00225,
        },
        {
          type: "carpets",
          rate: 0.001,
        },
        {
          type: "pearls",
          rate: 0.00133,
        },
        {
          type: "coffee",
          rate: 0.001,
        },
        {
          type: "toilet_water",
          rate: 0.0008,
        },
        {
          type: "marzipan",
          rate: 0.00163,
        },
      ],
    },
  ]);

  const products = ref([
    {
      type: "fish",
      rate: 2,
      chain: [
        { type: "fish", count: "", efficacy: 1 },
        { type: "fish", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "cider",
      rate: 1.5,
      chain: [
        { type: "cider", count: "", efficacy: 1 },
        { type: "cider", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "spices",
      rate: 2,
      chain: [
        { type: "spices", count: "", efficacy: 1 },
        { type: "spices", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "linen_garments",
      rate: 2,
      chain: [
        { type: "linen_garments", count: "", efficacy: 1 },
        { type: "linen_garments", count: 1, efficacy: 1 },
        { type: "hemp", count: 2, efficacy: 1 },
      ],
    },
    {
      type: "bread",
      rate: 4,
      chain: [
        { type: "bread", count: "", efficacy: 1 },
        { type: "bread", count: 1, efficacy: 1 },
        { type: "flour", count: 1, efficacy: 1 },
        { type: "wheat", count: 2, efficacy: 1 },
      ],
    },
    {
      type: "beer",
      rate: 1.5,
      chain: [
        { type: "beer", count: "", efficacy: 1 },
        { type: "beer", count: 1, efficacy: 1 },
        { type: "wheat", count: 1, efficacy: 1 },
        { type: "hops", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "leather_jerkins",
      rate: 4,
      chain: [
        { type: "leather_jerkins", count: "", efficacy: 1 },
        { type: "leather_jerkins", count: 2, efficacy: 1 },
        { type: "hides", count: 4, efficacy: 1 },
        { type: "salt", count: 1, efficacy: 1 },
        { type: "salt_mine", count: 1, efficacy: 1 },
        { type: "coal", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "books",
      rate: 3,
      chain: [
        { type: "books", count: "", efficacy: 1 },
        { type: "books", count: 2, efficacy: 1 },
        { type: "indigo", count: 4, efficacy: 1 },
        { type: "paper", count: 1, efficacy: 1 },
        { type: "wood", count: 2, efficacy: 1 },
      ],
    },
    {
      type: "candlesticks",
      rate: 2,
      chain: [
        { type: "candlesticks", count: "", efficacy: 1 },
        { type: "candlesticks", count: 4, efficacy: 1 },
        { type: "candles", count: 6, efficacy: 1 },
        { type: "honey", count: 12, efficacy: 1 },
        { type: "hemp", count: 6, efficacy: 1 },
        { type: "brass", count: 3, efficacy: 1 },
        { type: "copper_ore", count: 3, efficacy: 1 },
        { type: "coal", count: 2, efficacy: 1 },
      ],
    },
    {
      type: "meat",
      rate: 2.5,
      chain: [
        { type: "meat", count: "", efficacy: 1 },
        { type: "meat", count: 2, efficacy: 1 },
        { type: "cows", count: 4, efficacy: 1 },
        { type: "salt", count: 1, efficacy: 1 },
        { type: "salt_mine", count: 1, efficacy: 1 },
        { type: "coal", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "wine",
      rate: 2,
      chain: [
        { type: "wine", count: "", efficacy: 1 },
        { type: "wine", count: 2, efficacy: 1 },
        { type: "grapes", count: 6, efficacy: 1 },
        { type: "kegs", count: 2, efficacy: 1 },
        { type: "wood", count: 2, efficacy: 0.67 },
        { type: "iron", count: 1, efficacy: 1 },
        { type: "iron_smelter", count: 1, efficacy: 1 },
        { type: "coal", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "fur_coats",
      rate: 2.5,
      chain: [
        { type: "fur_coats", count: "", efficacy: 1 },
        { type: "fur_coats", count: 3, efficacy: 1 },
        { type: "bearskins", count: 3, efficacy: 1 },
        { type: "salt", count: 1, efficacy: 1 },
        { type: "salt_mine", count: 1, efficacy: 1 },
        { type: "coal", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "glasses",
      rate: 2,
      chain: [
        { type: "glasses", count: "", efficacy: 1 },
        { type: "glasses", count: 4, efficacy: 1 },
        { type: "quarz", count: 3, efficacy: 1 },
        { type: "brass", count: 3, efficacy: 1 },
        { type: "copper_ore", count: 3, efficacy: 1 },
        { type: "coal", count: 2, efficacy: 1 },
      ],
    },
    {
      type: "brocade_robes",
      rate: 3,
      chain: [
        { type: "brocade_robes", count: "", efficacy: 1 },
        { type: "brocade_robes", count: 1, efficacy: 1 },
        { type: "silk", count: 2, efficacy: 1 },
        { type: "gold", count: 1, efficacy: 1 },
        { type: "gold_ore", count: 1, efficacy: 1 },
        { type: "coal", count: 1, efficacy: 0.75 },
      ],
    },
    {
      type: "dates",
      rate: 3,
      chain: [
        { type: "dates", count: "", efficacy: 1 },
        { type: "dates", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "milk",
      rate: 1.5,
      chain: [
        { type: "milk", count: "", efficacy: 1 },
        { type: "milk", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "carpets",
      rate: 1.5,
      chain: [
        { type: "carpets", count: "", efficacy: 1 },
        { type: "carpets", count: 1, efficacy: 1 },
        { type: "silk", count: 1, efficacy: 1 },
        { type: "indigo", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "pearls",
      rate: 1,
      chain: [
        { type: "pearls", count: "", efficacy: 1 },
        { type: "pearls", count: 1, efficacy: 1 },
        { type: "pearl_farm", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "coffee",
      rate: 1,
      chain: [
        { type: "coffee", count: "", efficacy: 1 },
        { type: "coffee", count: 1, efficacy: 1 },
        { type: "coffee_beans", count: 2, efficacy: 1 },
      ],
    },
    {
      type: "toilet_water",
      rate: 1,
      chain: [
        { type: "toilet_water", count: "", efficacy: 1 },
        { type: "toilet_water", count: 1, efficacy: 1 },
        { type: "roses", count: 3, efficacy: 1 },
      ],
    },
    {
      type: "marzipan",
      rate: 4,
      chain: [
        { type: "marzipan", count: "", efficacy: 1 },
        { type: "marzipan", count: 1, efficacy: 1 },
        { type: "almond", count: 2, efficacy: 1 },
        { type: "sugar_mill", count: 1, efficacy: 1 },
        { type: "sugar_trace", count: 2, efficacy: 1 },
      ],
    },
    {
      type: "wood",
      rate: 1,
      chain: [
        { type: "wood", count: "", efficacy: 1 },
        { type: "wood", count: 1, efficacy: 1 },
      ],
      // chain: [{}],
    },
    {
      // Инструменты
      type: "instruments",
      rate: 1,
      chain: [
        { type: "instruments", count: "", efficacy: 1 },
        { type: "instruments", count: 2, efficacy: 1 },
        { type: "iron_smelter", count: 1, efficacy: 1 },
        { type: "iron", count: 1, efficacy: 1 },
        { type: "coal", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "stone",
      rate: 1,
      chain: [
        { type: "stone", count: "", efficacy: 1 },
        { type: "stone", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "glass",
      rate: 1,
      chain: [
        { type: "glass", count: "", efficacy: 1 },
        { type: "glass", count: 2, efficacy: 1 },
        { type: "quarz", count: 1, efficacy: 0.75 },
        { type: "potash", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "ropes",
      rate: 1,
      chain: [
        { type: "ropes", count: "", efficacy: 1 },
        { type: "ropes", count: 1, efficacy: 1 },
        { type: "hemp", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "mosaic",
      rate: 1,
      chain: [
        { type: "mosaic", count: "", efficacy: 1 },
        { type: "mosaic", count: 1, efficacy: 1 },
        { type: "quarz", count: 1, efficacy: 1 },
        { type: "clay", count: 2, efficacy: 1 },
      ],
    },
    {
      type: "weapons",
      rate: 1,
      chain: [
        { type: "weapons", count: "", efficacy: 1 },
        { type: "weapons", count: 1, efficacy: 1 },
        { type: "iron_smelter", count: 1, efficacy: 1 },
        { type: "iron", count: 1, efficacy: 1 },
        { type: "coal", count: 1, efficacy: 1 },
      ],
    },
    {
      type: "military_vehicles",
      rate: 1,
      chain: [
        { type: "military_vehicles", count: "", efficacy: 1 },
        { type: "military_vehicles", count: 1, efficacy: 1 },
        { type: "ropes", count: 2, efficacy: 0.75 },
        { type: "wood", count: 2, efficacy: 1 },
        { type: "hemp", count: 2, efficacy: 0.75 },
      ],
    },
    {
      type: "cannons",
      rate: 1,
      chain: [
        { type: "cannons", count: "", efficacy: 1 },
        { type: "cannons", count: 1, efficacy: 1 },
        { type: "wood", count: 2, efficacy: 1 },
        { type: "iron_smelter", count: 1, efficacy: 0.75 },
        { type: "iron", count: 1, efficacy: 0.75 },
        { type: "coal", count: 1, efficacy: 0.75 },
      ],
    },
  ]);

  function getChain(product) {
    return products.value.find((el) => el.type == product).chain;
  }

  function totalProductIntake(product) {
    let totatalIntake = 0; // Общее суммарное потребление this.product

    // Находим скорость производства нужного нам продукта
    let productRate = products.value.find((el) => el.type == product).rate;

    // Ищем продукт у жителей
    population.value.forEach((resident) => {
      let necessaryProduct = resident.intake.find((element) => element.type == product);
      let necessaryProductRate = 0;

      // Есть ли такой продукт в потреблении, то считаем суммарное потребление (от кол-во жителей)
      if (necessaryProduct) {
        necessaryProductRate = necessaryProduct.rate * resident.count;
        totatalIntake += +necessaryProductRate;
      }
    });
    totatalIntake = +totatalIntake.toFixed(4);
    return { totatalIntake, productRate };
  }
  function getPopulation(place) {
    return population.value.filter((resident) => resident.place == place);
  }

  function getPopulationFromLS() {
    let populationFromLS = localStorage.getItem("population");
    if (populationFromLS) {
      setPopulation(JSON.parse(populationFromLS));
    }
  }

  // В store
  function setPopulation(population_) {
    population_.forEach((element) => {
      population.value.find((el) => el.type == element.type).count = element.count;
    });
  }

  function savePopulation(population) {
    setPopulation(population);
    localStorage.setItem("population", JSON.stringify(population));
  }

  return {
    population,
    products,
    getChain,
    totalProductIntake,
    getPopulation,
    setPopulation,
    savePopulation,
    getPopulationFromLS,
  };
});

// export default createStore({
//   getters: {},
//   mutations: {},
//   actions: {},
// });
