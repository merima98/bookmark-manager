import Link from "next/link";
import NextImage from "next/image";

import { Button } from "./ui/button";

import bookmarkImage from "../public/assets/bookmark-image.png";
import { Input } from "./ui/input";

export default function LoggedInUser() {
  return (
    <div>
      <div className="grid p-4 gap-6 grid-cols-[1fr_2fr]">
        <span className="font-semibold">Bookmarks</span>
        <Input placeholder="Search bookmarks" />
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
