---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Hello There

hero:
  name: Isaac Oluwatemilorun.
  text: Software Engineer
  tagline: This is a personal portfolio showcasing some of the projects I've worked on and a knowledge base containing notes on experimentations, discoveries (both technical and non-technical) and work flows of achieving tasks.

  image:
    src: /img/avatar.png
    alt: Isaac O12n

  actions:
    - theme: brand
      text: Contact Me
      link: /markdown-examples
    - theme: alt
      text: See My Works
      link: "#works"

features:
  - title: VGCPORA <span class="feature-stack">Mobile</span>
    icon:
      src: /img/projects/vgcpora.png
      wrap: true
    details: Mobile App for the residents of Victoria Garden City (VGC) to manage visitor check-ins, enhance security and simplify bills payments.

  - title: EARWAC <span class="feature-stack">Backend, DevOps</span>
    icon:
      src: /img/projects/earwac.svg
      wrap: true
      width: 36px
    details: A GIS web app to show and enhance adaptation and resilience against coastal multi-hazards along the West African coast—Senegal to Cameroon.

  - title: Rates NG <span class="feature-stack">Backend, DevOps</span>
    icon:
      src: /img/projects/rates.png
      wrap: true
      width: 36px
    details: An investment platform that enables users easily compare and invest in a selected fixed income assets at any time.

  - title: All Trained Up <span class="feature-stack">Web, Mobile</span>
    icon:
      src: /img/projects/alltrainedup.png
      wrap: true
      width: 36px
    details: A training management platform that enables employers and employees handle all of their training needs conveniently.
---

<HomeSectionHeader title="Knowledge Base" subtitle="Learn. Document. Share." class="escape-padding" />

<HomeContent />

<style>
.escape-padding {
  margin: 0 -24px;
}
@media (min-width: 640px) {
  .escape-padding {
    margin: 0 -48px;
  }
}
@media (min-width: 960px) {
  .escape-padding {
    padding: 0 -64px;
  }
}
</style>
