import { useEffect, useState } from "react";

import { createClient } from "@/utils/supabase/client";
import { Bookmark } from "./types";

export function useBookmarkFolders() {
    const supabase = createClient();
    const [bookmarkFolders, setBookmarkFolder] = useState<Bookmark[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBookmarks = async () => {
            const { data, error } = await supabase.from("BookmarkFolder").select("*");
            if (error) {
                console.error("Error fetching bookmarks:", error.message);
                setError(error.message);
            } else {
                setBookmarkFolder(data || []);
            }
            setIsLoading(false);
        };

        fetchBookmarks();
    }, []);
    return { bookmarkFolders, isLoading, error };
}

export const useBookmarksFromSelectedFolder = (selectedFolderId: number) => {
    const supabase = createClient();
    const [selectedFolderBookmarks, setSelectedFolderBookmarks] = useState<Bookmark[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchBookmarksFromSelectedFolder = async () => {
            const { data, error } = await supabase.from("Bookmark").select("*").eq('bookmark_folder_id', selectedFolderId);
            if (error) {
                console.error("Error fetching bookmarks:", error.message);
                setError(error.message);
            } else {
                setSelectedFolderBookmarks(data || []);
            }
            setIsLoading(false);
        };

        fetchBookmarksFromSelectedFolder();
    }, [selectedFolderId]);

    return { selectedFolderBookmarks, isLoading, error };
}