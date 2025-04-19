"use client";

import { useEffect } from "react";
import { Folder } from "lucide-react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

import { Input } from "./ui/input";
import AddBookmarkForm from "./add-bookmark-form";
import BookmarkFolderForm from "./bookmark-folder-form";
import {
  useBookmarkFolders,
  useBookmarksFromSelectedFolder,
} from "@/app/http/bookmarks";
import { BookmarkFolder } from "@/app/http/bookmarks/types";

export const useBookmarkStore = create(
  devtools(
    immer<{
      bookmark: BookmarkFolder | null;
      setBookmark: (value: BookmarkFolder) => void;
    }>((set) => ({
      bookmark: null,
      setBookmark: (value: BookmarkFolder | null) => {
        return set((state) => {
          state.bookmark = value;
        });
      },
    }))
  )
);

export default function LoggedInUser() {
  const { bookmarkFolders } = useBookmarkFolders();

  const { setBookmark, bookmark } = useBookmarkStore();

  const { selectedFolderBookmarks } = useBookmarksFromSelectedFolder(
    bookmark?.id || 0
  );

  useEffect(() => {
    if (bookmarkFolders && !bookmark) {
      setBookmark(bookmarkFolders[0]);
    }
  }, [bookmarkFolders]);

  return (
    <div className="flex">
      <div className="flex px-4 gap-4 flex-col">
        <div className="flex gap-4 cursor-pointer items-center">
          <span className="font-semibold">Bookmarks</span>
          <BookmarkFolderForm />
        </div>
        <div className="flex flex-col gap-4">
          {bookmarkFolders?.map((bookmark) => (
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
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex gap-4">
          <Input placeholder="Search bookmarks" />
          <AddBookmarkForm />
        </div>
        <div className="flex flex-col border border-foreground/10 rounded-md h-fit">
          {selectedFolderBookmarks?.length ? (
            selectedFolderBookmarks?.map((item) => (
              <a
                key={item.id}
                href={item.bookmark_url}
                className="cursor-pointer px-4 py-2"
                target="_blank"
              >
                {item.bookmark_name}
              </a>
            ))
          ) : (
            <span className="px-4 py-2">
              No bookmark folders found. Please create a new one to get started.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
