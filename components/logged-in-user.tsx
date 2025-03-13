"use client";
import { Dialog, Portal } from "@chakra-ui/react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function LoggedInUser() {
  return (
    <div>
      <div className="grid p-4 gap-6 grid-cols-[1fr_2fr_0.5fr]">
        <span className="font-semibold">Bookmarks</span>
        <Input placeholder="Search bookmarks" />
        <Dialog.Root>
          <Dialog.Trigger>New bookmark</Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Add bookamrk</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline">Close</Button>
                  </Dialog.ActionTrigger>
                  <Button>Save</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
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
