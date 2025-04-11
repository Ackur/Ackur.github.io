<template>
  <section id="contact-page" class="app-card contact-page">
    <div class="contact-page__wrap">
      <h2 class="app-title">Contact</h2>

      <div class="contact-page__cards">
        <section class="contact-page__cards--item">
          <NuxtImg
            src="/images/icons/phone-v2-icon.svg"
            width="24"
            height="24"
            alt="phone-icon"
            class="item-icon"
          />
          <div>
            <h3 class="item-title">Phone:</h3>
            <p class="item-description">
              <a href="tel:+254723909353">+254723909353</a>
            </p>
            <p class="item-description">
              <a href="tel:+254738509151">+254738509151</a>
            </p>
          </div>
        </section>
        <section class="contact-page__cards--item">
          <NuxtImg
            src="/images/icons/email-icon.svg"
            width="24"
            height="24"
            alt="phone-icon"
            class="item-icon"
          />
          <div>
            <h3 class="item-title">Email:</h3>
            <p class="item-description">
              <a href="mailto:kremenokvv@gmail.com">kremenokvv@gmail.com</a>
            </p>
          </div>
        </section>
      </div>

      <ContactForm />
    </div>
  </section>
</template>

<script setup>
import ContactForm from "./components/ContactForm.vue";
useHead({
  title: "My contacts | Vasyl Kremenok",
  meta: [{ name: "description", content: "Front-End Developer" }],
});
</script>

<style>
.contact-page {
  width: 100%;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 25px;
  }

  .contact-page__wrap {
    max-width: 700px;
    margin: 0 auto;
  }

  .contact-page__cards {
    display: flex;
    gap: 25px;
    margin-top: 30px;
    margin-bottom: 30px;

    @media screen and (max-width: 650px) {
      flex-direction: column;
      gap: 10px;
      margin: 25px 0;
    }

    .contact-page__cards--item {
      width: 100%;
      display: flex;
      gap: 8px;
      color: var(--color-dark);
      font-family: var(--font-poppins);
      font-weight: 500;
      border-radius: 20px;
      background: var(--bg-gray);
      padding: 30px 25px;

      [data-theme="dark"] & {
        background: var(--bg-gray);
      }

      &:nth-child(odd) {
        background: #ffeed9;

        [data-theme="dark"] & {
          background: var(--color-primary-a50);
        }
      }

      .item-title {
        font-size: 20px;
        letter-spacing: 0.5px;
        line-height: 1.25;
        margin-bottom: 10px;
      }
      .item-description {
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: 0.35px;
      }
    }
  }
}
</style>
