import Link from "next/link";
import { Button } from "./ui/button";

export default function GuestUser() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <span>Bookmark Manager</span>

      <h1>No worries about messy bookmarks</h1>
      <h3>Start using Bookmark Manager Now!</h3>

      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
