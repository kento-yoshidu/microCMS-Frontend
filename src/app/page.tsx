// app/page.tsx
import { fetchArticles } from '../lib/client';

type Article = {
    id: string;
    title: string;
};

export const metadata = {
    title: 'ブログトップページ',
    description: '最新の記事一覧',
};

export default async function HomePage() {
    const articles: Article[] = await fetchArticles();

    return (
        <main>
            <h1>最新の記事</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <a href={`/articles/${article.id}`}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
