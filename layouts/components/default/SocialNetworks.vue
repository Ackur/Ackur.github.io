<template>
  <div class="social-networks">
    <AppButton
      v-for="item in items"
      :key="item.title"
      tag="a"
      :href="item.href"
      target="_blank"
      :aria-label="`${item.title} social network link`"
      class="social-networks__item"
    >
      <SvgSprite
        :icon="item.icon"
        :color="item.color"
        :width="item.width"
        :height="item.height"
      />
    </AppButton>
  </div>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";
import SvgSprite from "~/components/ui/SvgSprite.vue";

const items = [
  {
    title: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/kremenokvv",
    color: "#1877F2",
    height: "23",
  },
  {
    title: "Linkedin",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/vasyl-kremenok-944032b3/",
    color: "#0077B5",
    width: "26",
    height: "26",
  },
  {
    title: "Github",
    icon: "github",
    href: "https://github.com/Ackur",
    color: "#0B0909",
    width: "26",
    height: "26",
  },
];
</script>

<style>
.social-networks {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0 25px;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }

  .social-networks__item {
    width: 70px;
    height: 60px;
    border-radius: 9px;
    box-shadow: 0 0 0 0 transparent;

    [data-theme="dark"] & {
      background: var(--color-surface-mixed-a30);
    }

    &:hover {
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
