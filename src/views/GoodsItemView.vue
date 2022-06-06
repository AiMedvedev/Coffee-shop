<template>
  <main>
    <div class="banner" :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar />
          </div>
        </div>
        <h1 class="title-big">{{ card.name }}</h1>
      </div>
    </div>

    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-0 offset-lg-1">
            <img
              :src="require(`@/assets/img/${card.image}`)"
              alt="coffee item"
              class="shop__girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
              class="beanslogo"
            />
            <div class="shop__point">
              <span>Country:</span>
              Brasil
            </div>
            <div class="shop__point">
              <span>Description</span>
              Lorem ipsum dolor sit amet, oidhfosdiihjf osfioer whfnfjwoi jij w
              rwdwd wedjwdowijdw. Rsdqwd rrorotp xca nndjowknf.
            </div>
            <div class="shop__point">
              <span>Price:</span>
              <span class="shop__point-price"> {{ card.price | addCurrency }}</span>
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
  computed: {
    pageName() {
      return this.$route.name;
    },
    card() {
        const pageGetter = this.pageName === 'coffee' ? 'getCoffeeById' : 'getGoodsById'    
        return this.$store.getters[pageGetter](this.$route.params.id);
    },
  },
};
</script>