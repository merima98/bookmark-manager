"use client";

import { Input } from "./ui/input";
import AddBookmarkForm from "./add-bookmark-form";
import BookmarkFolderForm from "./bookmark-folder-form";

export default function LoggedInUser() {
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
        <div className="flex flex-col gap-16 ">Bookmark folders</div>
        <div>
          TO DO: Add selected folder and preview. Display filtered bookmarks.
        </div>
      </div>
    </div>
  );
}
