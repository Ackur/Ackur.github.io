<template>
  <section class="education-experience">
    <h3 class="app-subtitle education-experience__subtitle" draggable="false">
      <NuxtImg
        src="/images/icons/park-outline_degree-hat-icon.svg"
        width="28"
        height="28"
        densities="x1 x2"
        placeholder
        alt="icon"
        class="education-experience__subtitle--icon pre"
      />
      <span>Education & Experience</span>
      <NuxtImg
        src="/images/icons/humble_briefcase-icon.svg"
        width="28"
        height="28"
        densities="x1 x2"
        placeholder
        alt="icon"
        class="education-experience__subtitle--icon post"
      />
    </h3>

    <div class="education-experience__list">
      <section
        v-for="item in items"
        :key="item.title"
        class="education-experience__list--item"
      >
        <time class="item-date">{{ item.dates }}</time>
        <h4 class="item-title">{{ item.title }}</h4>
        <p class="item-descriptions">{{ item.descriptions }}</p>
      </section>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    dates: "2020-2021",
    title: "Software Development",
    descriptions: "Moringa School",
  },
  {
    dates: "2022 - Present",
    title: "Technical Mentor",
    descriptions: "Moringa School",
  },
  {
    dates: "2012-2016",
    title: "Disaster Management",
    descriptions: "Masinde Muliro Universiity",
  },
  {
    dates: "2021-2022",
    title: "Website Development",
    descriptions: "Village 2 Nation",
  },
];
</script>

<style>
.education-experience {
  .education-experience__subtitle {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 30px 0;

    [data-theme="dark"] & {
      color: var(--color-white);
    }

    .education-experience__subtitle--icon {
      min-width: 28px;

      &.post {
        @media (max-width: 576px) {
          display: none;
        }
      }
    }
  }

  .education-experience__list {
    --_max-item-width: 290px;

    display: grid;
    grid-template-columns: repeat(2, minmax(100px, var(--_max-item-width)));
    justify-content: center;
    gap: 24px;

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, minmax(100px, var(--_max-item-width)));
      justify-content: center;
    }

    .education-experience__list--item {
      max-width: var(--_max-item-width);
      width: 100%;
      border-radius: 10px;
      color: var(--color-dark);
      background: var(--bg-gray);
      padding: 15px;

      [data-theme="dark"] & {
        background: var(--color-surface-mixed-a30);
        color: var(--color-white);
      }

      &:nth-child(3n + 1) {
        background: var(--color-warning-light);

        [data-theme="dark"] & {
          background: var(--color-primary-a50);
          color: var(--color-light);
        }

        .item-date {
          [data-theme="dark"] & {
            color: var(--color-light);
          }
        }
      }

      .item-date {
        font-weight: 400;
        color: var(--color-light);

        [data-theme="dark"] & {
          color: var(--color-primary-a40);
        }
      }
      .item-title {
        margin: 10px 0;
      }
    }
  }
}
</style>
