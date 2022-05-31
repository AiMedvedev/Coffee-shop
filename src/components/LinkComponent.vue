<template>
    <li :class="linkClass">
        <router-link :to="link">{{ text }}</router-link>
    </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    linkClass: {
      type: String,
      required: false
    }
  }
};
</script>