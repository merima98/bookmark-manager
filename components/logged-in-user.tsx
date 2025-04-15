"use client";

import { useEffect } from "react";
import { Folder } from "lucide-react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

import { Input } from "./ui/input";
import AddBookmarkForm from "./add-bookmark-form";
import BookmarkFolderForm from "./bookmark-folder-form";
import { useBookmarkFolders } from "@/app/http/bookmarks";
import { Bookmark } from "@/app/http/bookmarks/types";

export const useBookmarkStore = create(
  devtools(
    immer<{
      bookmark: Bookmark | null;
      setBookmark: (value: Bookmark) => void;
    }>((set) => ({
      bookmark: null,
      setBookmark: (value: Bookmark | null) => {
        return set((state) => {
          state.bookmark = value;
        });
      },
    }))
  )
);

export default function LoggedInUser() {
  const { bookmarks } = useBookmarkFolders();

  const { setBookmark, bookmark } = useBookmarkStore();

  useEffect(() => {
    if (bookmarks && !bookmark) {
      setBookmark(bookmarks[0]);
    }
  }, [bookmarks]);
  return (
    <div>
      <div className="grid p-4 gap-6 grid-cols-[1fr_2fr_0.5fr]">
        <div className="flex gap-4 cursor-pointer items-center">
          <span className="font-semibold">Bookmarks</span>
          <BookmarkFolderForm />
        </div>
        <Input placeholder="Search bookmarks" />
        <AddBookmarkForm />
      </div>
      <div className="grid p-4 gap-6 grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-4">
          {bookmarks?.map((bookmark) => (
            <div
              key={bookmark.id}
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => setBookmark(bookmark)}
            >
              <Folder height={16} width={16} />
              <div>{bookmark.bookmark_name}</div>
            </div>
          ))}
        </div>
        <div>
          TO DO: Add selected folder and preview. Display filtered bookmarks.
        </div>
      </div>
    </div>
  );
}
