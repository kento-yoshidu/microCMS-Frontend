// lib/api.ts
export async function fetchArticles() {
  const url = process.env.ALL_ARTICLES;

  if (!url) {
    throw new Error('ALL_ARTICLES environment variable is not defined');
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }

  const articles = await response.json();

  console.log("articles = ", articles)

  return articles;
}
