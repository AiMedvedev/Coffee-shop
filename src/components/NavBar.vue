<template>
  <header>
    <ul
      class="
        header
        d-flex
        justify-content-center justify-content-md-start
        flex-wrap
      "
    >
      <link-component :link="links.header.link" linkClass="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </link-component>

      <link-component
        v-for="link in links.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
        linkClass="header__item"
      />
    </ul>
  </header>
</template>

<script>
import LinkComponent from "@/components/LinkComponent.vue";

export default {
  components: { LinkComponent },
  data() {
    return {
      links: {
        header: {
          link: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: 0,
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: 1,
            text: "For your pleasure",
            link: "/your-pleasure",
          },
          {
            id: 2,
            text: "Contact us",
            link: "/contact-us",
          },
          {
            id: 3,
            text: "Thank You",
            link: "/thanks",
          },
        ],
      },
    };
  },
};
</script>
