<template>
  <main>
    <div
      class="banner"
      :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar />
          </div>
        </div>
        <h1 class="title-big" v-if="product">{{ product.name }}</h1>
      </div>
    </div>

    <section class="shop" v-if="product">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img alt="coffee__item" :src="product.image" />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
              class="beanslogo"
            />
            <div class="shop__point" v-if="product.country">
              <span>Country:</span>
              {{ product.country }}
            </div>
            <div class="shop__point" v-if="product.description">
              <span>Description</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price:</span>
              <span class="shop__point-price"> {{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch(`https://coffeeshop-3e64c-default-rtdb.firebaseio.com/${this.pageName}/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => (this.product = data));
  },
  destroyed() {
    this.product = null;
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
    card() {
      const pageGetter =
        this.pageName === "coffee" ? "getCoffeeById" : "getGoodsById";
      return this.$store.getters[pageGetter](this.$route.params.id);
    },
  },
};
</script>