import type { WordPressPage } from "./fetchPages.types";

export const fetchPage = async (id: number): Promise<WordPressPage> => {
    const res = await fetch(`${import.meta.env.VITE_WP_API}/wp-json/wp/v2/pages/${id}`);
    const page = await res.json();
    return page
}