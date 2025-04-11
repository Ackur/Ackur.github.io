<template>
  <section id="work-page" class="app-card work-page">
    <div class="work-page__wrap">
      <h2 class="app-title work-page--title">Portfolio</h2>

      <div class="work-page__list--wrap">
        <div
          v-for="(items, idx) in workLists"
          :key="idx"
          class="work-page__list"
        >
          <section
            v-for="item in items"
            :key="item.title"
            class="work-page__list--item"
          >
            <div class="item-image__wrap">
              <NuxtImg
                v-bind="item.image"
                format="webp"
                width="334"
                densities="x1 x2"
                draggable="false"
                fit="cover"
                alt="work image"
                preload
                class="item-image"
              />
            </div>
            <h3 class="item-title">{{ item.title }}</h3>
            <p class="item-description">{{ item.description }}</p>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "My works | Vasyl Kremenok",
  meta: [{ name: "description", content: "Front-End Developer" }],
});

const workLists = computed(() => {
  const data = [
    {
      image: { src: "/images/portfolio/image02.png", height: "150" },
      title: "Blog",
      description: "NEXT.js",
    },
    {
      image: { src: "/images/portfolio/image04.png", height: "150" },

      title: "Mentorship",
      description: "Tech Mentor",
    },
    {
      image: { src: "/images/portfolio/image01.png", height: "100" },
      title: "App Development",
      description: "Smart Bank App",
    },
    {
      image: { src: "/images/portfolio/image03.png", height: "100" },
      title: "UI/UX",
      description: "Rental",
    },
    {
      image: { src: "/images/portfolio/image05.png", height: "100" },
      title: "Web Development",
      description: "IdeaFlow",
    },
  ];
  // Math.ceil Math.floor()
  // Number.isInteger(data.length / 2)
  return [data.slice(data.length / 2), data.slice(0, data.length / 2)];
});
</script>

<style>
.work-page {
  width: 100%;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 25px;
  }

  .work-page--title {
    padding-left: 13px;
  }

  .work-page__wrap {
    max-width: 726px;
    margin: 0 auto;
  }

  .work-page__list--wrap {
    --_gap: 24px;
    @media (max-width: 768px) {
      --_gap: 16px;
    }
    @media (max-width: 576px) {
      --_gap: 24px;
    }

    display: flex;
    justify-content: space-between;
    gap: var(--_gap);
    margin-top: 40px;

    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .work-page__list {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: var(--_gap);

    .work-page__list--item {
      width: fit-content;
      height: fit-content;
      font-family: var(--font-poppins);
      border-radius: 8px;
      background: var(--color-warning-light);
      padding: 8px;

      [data-theme="dark"] & {
        background: var(--bg-gray);
      }

      &:nth-child(odd) {
        background: #ffe3bf;

        [data-theme="dark"] & {
          background: var(--color-primary-a50);
        }
      }

      .item-image__wrap {
        border-radius: 6px;
        overflow: hidden;

        .item-image {
          transition: 0.5s ease-in-out;
          @media (max-width: 768px) {
            object-fit: cover;
          }

          &:hover {
            scale: 1.2;
          }
        }
      }

      .item-title {
        color: var(--color-light);
        font-size: 12px;
        font-weight: 400;
        line-height: 1;
        margin: 8px 0 2px;
      }

      .item-description {
        color: var(--color-dark);
        font-size: 16px;
      }
    }
  }
}
</style>
