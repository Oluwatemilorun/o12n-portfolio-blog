import type { DefaultTheme } from "vitepress";
import fg from "fast-glob";

/**
 * Dynamically loads the categories from the /categories directory.
 * Any child directory in /categories becomes a category
 */
const getCategories = (): DefaultTheme.NavItemWithLink[] => {
  return fg.sync("docs/categories/*", {
    onlyDirectories: true,
    objectMode: true,
  }).map(({ name }) => {
    return {
      link: `/categories/${name}`,
      activeMatch: `/categories/${name}`,
      text: name.replace(/\-/g, " "),
    };
  });
};

export const nav: DefaultTheme.Config["nav"] = [
  {
    text: "Works",
    link: "#works",
  },
  {
    text: "Knowledge Base",
    items: [
      { text: "Posts", link: "/posts", activeMatch: "/posts/" },
      { text: "Tags & Labels", link: "/tags-and-labels", activeMatch: "/tags-and-labels/" },
      { text: "Archive", link: "/archive", activeMatch: "/archive/" },
    ],
    activeMatch: '/posts/'
  },
  {
    text: "About",
    items: [
      { text: "Me", link: "/about/me" },
      { text: "Contact", link: "/about/contact" },
    ],
    activeMatch: "/about/",
  },
];

