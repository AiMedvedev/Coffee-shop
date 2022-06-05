<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            
            <link-component :link="links.footer.link" linkClass="footer__item">
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="links.footer.icon"
              />
            </link-component>
            
            <link-component
              v-for="link in links.other"
              :key="link.id"
              :link="link.link"
              :text="link.text"
              linkClass="footer__item"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import LinkComponent from "@/components/LinkComponent.vue";

export default {
  components: { LinkComponent },
  computed: {
    links() {
      return this.$store.getters["getFooterLinks"];
    },
  },
};
</script>