"use client";

import { useRouter } from "next/navigation";

import Button from "../Button";
import { useIsUserAuthenticated } from "@/app/util/utils";

const Header = () => {
  const router = useRouter();
  const { isAuthenticated } = useIsUserAuthenticated();

  return (
    <div className="flex p-4 justify-between border-b-2 border-neutral-200 items-center">
      <h1 className="font-medium">Bookmarks manager</h1>
      {!isAuthenticated && (
        <div className="flex gap-2">
          <Button
            className="h-9"
            onClick={() => {
              router.push("/login");
            }}
          >
            Sign In
          </Button>
          <Button
            className="h-9"
            onClick={() => {
              router.push("/register");
            }}
          >
            Sign Up
          </Button>
        </div>
      )}
    </div>
  );
};
export default Header;
