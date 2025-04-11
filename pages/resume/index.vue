<template>
  <section id="resume-page" class="app-card resume-page">
    <div class="resume-page__top">
      <h2 class="app-title">Resume</h2>
      <EducationExperience />
    </div>

    <div class="resume-page__bottom">
      <div class="resume-page__bottom--wrap">
        <TagList
          title="Work Skills"
          :tags="skills.work"
          class="resume-page__bottom--item"
        />

        <TagList
          title="Soft Skills"
          :tags="skills.soft"
          class="resume-page__bottom--item"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import EducationExperience from "./components/EducationExperience.vue";
import TagList from "./components/TagList.vue";

useHead({
  title: "Education & Experience | Vasyl Kremenok",
  meta: [{ name: "description", content: "Front-End Developer" }],
});

const skills = {
  work: [
    "Vue.js",
    "HTML 5",
    "Git",
    "CSS 3",
    "Angular",
    "Figma",
    "Nuxt.js",
    "NEXT.js",
    "React.js",
    "Docker",
    "Node.js",
    "Tailwind CSS",
    "JavaScript",
  ],
  soft: [
    "Time Management",
    "Mentorship",
    "Flexibility",
    "Impeccable Communication",
    "Writing",
    "Research",
  ],
};
</script>

<style>
.resume-page {
  --_spacing: 30px;
  @media (max-width: 768px) {
    --_spacing: 25px;
  }

  width: 100%;
  height: fit-content;
  padding: var(--_spacing) 0 0;
  overflow: hidden;

  .resume-page__top {
    max-width: 760px;
    margin: 0 auto var(--_spacing);
    padding: 0 var(--_spacing);
  }

  .resume-page__bottom {
    background: var(--bg-gray-light);

    [data-theme="dark"] & {
      background: var(--color-surface-mixed-a20);
    }

    .resume-page__bottom--wrap {
      max-width: 740px;
      display: flex;
      justify-content: space-between;
      gap: var(--_spacing);
      margin: 0 auto;
      padding: 20px var(--_spacing) var(--_spacing);

      @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
      }
    }

    .resume-page__bottom--item {
      max-width: 280px;
      @media (max-width: 576px) {
        max-width: unset;
      }
    }
  }
}
</style>
