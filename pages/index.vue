<template>
  <section id="home-page" class="app-card home-page">
    <div class="home-page__wrap">
      <h2 class="app-title">ABOUT ME</h2>

      <p class="home-page__description">
        Hello there! I'm thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>

      <section class="what-i-do">
        <h2 class="app-subtitle">What I do!</h2>
        <div class="what-i-do__list">
          <section
            v-for="item in items"
            :key="item.title"
            class="what-i-do__list--item"
          >
            <h3 class="item-title">
              <SvgSprite
                :icon="item.icon"
                width="24"
                height="24"
                class="item-icon"
              />
              <span>{{ item.title }}</span>
            </h3>
            <p class="item-description">
              {{ item.description }}
            </p>
          </section>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import SvgSprite from "~/components/ui/SvgSprite.vue";
useHead({
  title: "About Me | Vasyl Kremenok",
  meta: [{ name: "description", content: "Front-End Developer" }],
});
const items = [
  {
    icon: "code",
    title: "Web Development",
    description: `As a developer, I find myself most
    captivated by the power and flexibility of
    NEXT.js. I'm always eager to dive into new
    projects that leverage NEXT.js and
    discover innovative ways to create fast,
    scalable, and user-friendly applications.`,
  },
  {
    icon: "instagram",
    title: "App Development",
    description: `With a focus on user-centric design and
      cutting-edge technologies, I thrive on 
      building intuitive and efficient apps 
      that make a positive impact on people's 
      lives. Let's turn ideas into reality and 
      shape the future together.`,
  },
  {
    icon: "ux",
    title: "UI/UX Designing",
    description: `Crafting visually appealing and intuitive user
      interfaces that offer a delightful user 
      experience is something I'm truly fanatic 
      about.`,
  },
  {
    icon: "mentor",
    title: "Mentorship",
    description: `I have also found great joy in sharing my 
      knowledge with others. Being a technical 
      mentor allows me to give back to the 
      community that has supported me 
      throughout my career. `,
  },
];
</script>

<style>
.home-page {
  width: 100%;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 25px;
  }

  .home-page__wrap {
    max-width: 700px;
    margin: 0 auto;
  }

  .home-page__description {
    font-size: 16px;
    line-height: 1.75;
    color: var(--color-dark);
    margin-top: 20px;
    padding: 0 10px;

    [data-theme="dark"] & {
      color: var(--color-white);
    }
  }

  .what-i-do {
    margin-top: 30px;

    .app-subtitle {
      margin-bottom: 30px;

      [data-theme="dark"] & {
        color: var(--color-white);
      }
    }

    .what-i-do__list {
      --_max-item-width: 333px;

      display: grid;
      grid-template-columns: repeat(2, minmax(100px, var(--_max-item-width)));
      justify-content: space-between;
      gap: 24px;

      @media (max-width: 576px) {
        grid-template-columns: repeat(1, minmax(100px, var(--_max-item-width)));
        justify-content: center;
      }

      .what-i-do__list--item {
        max-width: var(--_max-item-width);
        display: flex;
        flex-direction: column;
        color: var(--color-dark);
        border-radius: 20px;
        background: var(--bg-gray);
        padding: 10px 25px 15px;

        [data-theme="dark"] & {
          background: var(--color-surface-mixed-a30);
          color: var(--color-white);
        }

        .item-icon {
          min-width: 24px;
          color: var(--color-warning);
        }

        &:nth-child(3n + 1) {
          background: var(--color-warning-light);

          [data-theme="dark"] & {
            background: var(--color-primary-a50);
            color: var(--color-light);
          }

          .item-icon {
            color: var(--color-dark-red);
          }
        }

        .item-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 24px;
          font-weight: 600;

          @media (max-width: 768px) {
            line-height: 1;
            margin: 6px 0;
          }
        }
        .item-description {
          font-size: 14px;
          font-weight: normal;
          letter-spacing: 0.35px;
        }
      }
    }
  }
}
</style>
