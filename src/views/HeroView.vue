<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav-bar />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <header-title :text="`Everything You Love About Coffee`" />
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <a
              @click.prevent="smoothScroll"
              href="./coffeepage.html"
              class="preview__btn"
              >More</a
            >
          </div>
        </div>
      </div>
    </div>
    <section class="about" id="about" ref="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best" ref="ourBest">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <best-item
                v-for="item in cards.bestsellers"
                :key="item.id"
                :name="item.name"
                :price="item.price"
                :image="item.image"
                classItem="best__item"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
    
<script>
import NavBar from "@/components/NavBar.vue";
import BestItem from "@/components/BestItem.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import { scrollIntoView } from "seamless-scroll-polyfill";

export default {
  components: { NavBar, BestItem, HeaderTitle },
  computed: {
    cards() {
      return this.$store.getters["getBestsellers"];
    },
  },
  methods: {
    smoothScroll() {
      scrollIntoView(this.$refs.ourBest, {
        behavior: "smooth",
        block: "start",
      });
    },
  },
};
</script>