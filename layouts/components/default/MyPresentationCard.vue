<template>
  <div class="presentation-card app-card">
    <NuxtImg
      src="/images/profilePhotov4.png"
      width="200"
      height="200"
      densities="x1 x2"
      format="webp"
      placeholder
      draggable="false"
      preload
      alt="profile photo"
      class="presentation-card__image"
    />

    <h1 class="presentation-card__title">Vasyl Kremenok</h1>
    <p class="presentation-card__description">Front-End Developer</p>

    <SocialNetworks />

    <ContactCard class="presentation-card--contacts" />
  </div>
</template>

<script setup>
import ContactCard from "./ContactCard.vue";
import SocialNetworks from "./SocialNetworks.vue";
</script>

<style>
.presentation-card {
  --_image-margin: 100px;

  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  @media (max-width: 1024px) {
    margin-top: var(--_image-margin);
  }

  .presentation-card__image {
    --_image-size: 200px;
    @media (max-width: 1024px) {
      --_image-size: 130px;
    }

    width: var(--_image-size);
    height: var(--_image-size);
    border-radius: 20px;
    /* background: url(<path-to-image>), lightgray 50% / cover no-repeat; */
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    background: var(--bg-accent-gradient);
    margin-top: calc(var(--_image-margin) * -1);
  }

  .presentation-card__title {
    font-size: 28px;
    font-weight: 700;
    color: var(--color-dark);
    margin: 10px 0 10px;

    [data-theme="dark"] & {
      color: var(--color-white);
    }
  }

  .presentation-card__description {
    font-size: 16px;
    font-weight: 500;

    [data-theme="dark"] & {
      color: var(--color-surface-mixed-a50);
    }
  }

  .presentation-card--contacts {
    @media (max-width: 1024px) {
      display: none;
    }
  }
}
</style>
