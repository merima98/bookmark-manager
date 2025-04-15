import { useEffect, useState } from "react";

import { createClient } from "@/utils/supabase/client";
import { Bookmark } from "./types";

export function useBookmarkFolders() {
    const supabase = createClient();
    const [bookmarks, setBookmarks] = useState<Bookmark[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBookmarks = async () => {
            const { data, error } = await supabase.from("BookmarkFolder").select("*");
            if (error) {
                console.error("Error fetching bookmarks:", error.message);
                setError(error.message);
            } else {
                setBookmarks(data || []);
            }
            setIsLoading(false);
        };

        fetchBookmarks();
    }, []);
    return { bookmarks, isLoading, error };
}