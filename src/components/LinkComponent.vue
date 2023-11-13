<template>
    <li :class="linkClass">
        <router-link :to="link">{{ text }}
          <slot></slot>
        </router-link>
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
      required: false
    },
    linkClass: {
      type: String,
      required: true
    }
  }
};
</script>