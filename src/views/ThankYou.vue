<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col">
            <header>
              <nav-bar />
            </header>
          </div>
        </div>
        <header-title :text="`Thank You`" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="title big__text mt-5">
              <p>Thank you so much</p>
              <p>We contact you as soon as posible</p>
              <img src="@/assets/img/thanks.png" alt="thanks-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  components: { NavBar, HeaderTitle },
};
</script>