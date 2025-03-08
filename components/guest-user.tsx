import Link from "next/link";
import NextImage from "next/image";

import { Button } from "./ui/button";

import bookmarkImage from "../public/assets/bookmark-image.png";

export default function GuestUser() {
  return (
    <div className="flex p-4 gap-6">
      <div className="flex flex-col gap-16 ">
        <span className="text-lg font-semibold">Bookmark Manager</span>

        <h1 className="text-3xl">No worries about messy bookmarks</h1>
        <h3 className="text-lx">Start using Bookmark Manager Now!</h3>

        <Button asChild size="sm" variant={"default"}>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
      <NextImage
        alt="Bookmark image"
        src={bookmarkImage}
        className="w-1/2 rounded-3xl"
      />
    </div>
  );
}
