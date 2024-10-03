import type { WordPressPage } from "./fetchPages.types";

export const fetchPages = async (): Promise<WordPressPage[]> => {
    const res = await fetch(`${import.meta.env.VITE_WP_API}/wp-json/wp/v2/pages?order=asc`);
    const pages = await res.json();
    return pages
}