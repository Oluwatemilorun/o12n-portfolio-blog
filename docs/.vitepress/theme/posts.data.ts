import { createContentLoader } from 'vitepress';

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
  tags: string[]
  labels: string[]
}

export default createContentLoader('./posts/**/*.md', {
  excerpt: true,
  transform(data): Post[] {
    return data
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        tags: frontmatter.tags || [],
        labels: frontmatter.labels || [],
        url,
        excerpt,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time)
  },
});

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
