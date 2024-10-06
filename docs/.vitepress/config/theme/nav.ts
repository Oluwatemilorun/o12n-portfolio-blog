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
    text: "Categories",
    items: getCategories(),
    activeMatch: '/categories/'
  },
  {
    text: "About",
    items: [
      { text: "Me", link: "/about/me" },
      { text: "Works", link: "/about/works" },
    ],
    activeMatch: "/about/",
  },
];

