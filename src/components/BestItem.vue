<template>
  <div class="best__wrapper">
    <div class="best__item">
      <img :src="require(`@/assets/img/${cards[0].icon}`)" alt="coffee" />
      <div class="best__item-title">{{ cards[0].text }}</div>
      <div class="best__item-price">{{ cards[0].price }}</div>
    </div>
    <div class="best__item">
      <img :src="require(`@/assets/img/${cards[1].icon}`)" alt="coffee" />
      <div class="best__item-title">{{ cards[1].text }}</div>
      <div class="best__item-price">{{ cards[1].price }}</div>
    </div>
    <div class="best__item">
      <img :src="require(`@/assets/img/${cards[2].icon}`)" alt="coffee" />
      <div class="best__item-title">{{ cards[2].text }}</div>
      <div class="best__item-price">{{ cards[2].price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 0,
          icon: "coffee-1.jpg",
          text: "Solimo Coffee Beans 2kg",
          price: "10.73$",
        },
        {
          id: 1,
          icon: "coffee-2.jpg",
          text: "Presto Coffee Beans 1kg",
          price: "15.99$",
        },
        {
          id: 2,
          icon: "coffee-3.jpg",
          text: "AROMISTICO Coffee 1kg",
          price: "6.99$",
        },
      ],
    };
  },
};
</script>