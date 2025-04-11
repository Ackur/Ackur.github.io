<template>
  <div class="contact-card">
    <div class="contact-card__wrap">
      <section class="contact-card__item">
        <div class="item-icon__wrap">
          <SvgSprite
            icon="phone"
            width="12"
            height="21"
            class="item-icon"
            style="min-width: 12px"
          />
        </div>
        <div>
          <h2 class="item-title">Phone</h2>
          <a href="tel:+254723909353" class="item-link">+254723909353</a>
        </div>
      </section>

      <section class="contact-card__item">
        <div class="item-icon__wrap">
          <SvgSprite
            icon="letter"
            width="20"
            height="20"
            class="item-icon"
            style="min-width: 20px"
          />
        </div>
        <div>
          <h2 class="item-title">Email</h2>
          <a href="mailto:kremenokvv@gmail.com" class="item-link">
            kremenokvv@gmail.com
          </a>
        </div>
      </section>

      <section class="contact-card__item">
        <div class="item-icon__wrap">
          <SvgSprite
            icon="location"
            width="16"
            height="22"
            class="item-icon"
            style="min-width: 16px"
          />
        </div>
        <div>
          <h2 class="item-title">Location</h2>
          <a
            href="https://maps.app.goo.gl/5trm9BnGXkNGyCk79"
            target="_blank"
            class="item-link"
          >
            Spain, Lleida
          </a>
        </div>
      </section>

      <AppButton color="gradient" class="contact-card__download">
        <SvgSprite icon="download" width="24" height="24" />
        Download Resume
      </AppButton>
    </div>
  </div>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";
import SvgSprite from "~/components/ui/SvgSprite.vue";
</script>

<style>
.contact-card {
  width: 100%;
  border-radius: 20px;
  background: var(--bg-main);
  padding: 15px 30px 30px;

  [data-theme="dark"] & {
    background: var(--color-surface-mixed-a30);
  }

  .contact-card__wrap {
    max-width: 250px;
    margin: 0 auto;
  }

  .contact-card__item {
    height: 80px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid var(--bg-gray-three);

    .item-icon__wrap {
      min-width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      .item-icon {
        color: var(--color-dark-red);

        [data-theme="dark"] & {
          color: var(--color-primary-a30);
        }
      }
    }

    .item-title,
    .item-link {
      font-size: 14px;
      line-height: 1;
    }

    .item-title {
      font-weight: 600;
      color: var(--color-light);

      [data-theme="dark"] & {
        color: var(--color-surface-mixed-a50);
      }
    }
    .item-link {
      font-weight: 600;
      color: var(--color-dark);

      [data-theme="dark"] & {
        color: var(--color-white);
      }
    }
  }

  .contact-card__download {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--bg-gray);
    margin: 20px auto 0;
  }
}
</style>
