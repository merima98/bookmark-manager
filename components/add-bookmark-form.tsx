import { Dialog, Portal } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { useBookmarkStore } from "./logged-in-user";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

type AddBookmarkFormInputs = {
  url: string;
  name: string;
};

const AddBookmarkForm = () => {
  const [open, setOpen] = useState(false);
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<AddBookmarkFormInputs>();

  const { bookmark } = useBookmarkStore();

  const onSubmit: SubmitHandler<AddBookmarkFormInputs> = async (data) => {
    const payload = {
      bookmark_name: data.name,
      bookmark_url: data.url,
      bookmark_folder_id: bookmark?.id,
    };

    const { data: newBookmark, error } = await supabase
      .from("Bookmark")
      .insert(payload)
      .select();

    if (error) {
      console.error("Error inserting folder:", error.message);
      //Remove alert, add error message below inputs.
      alert("Failed to create folder: " + error.message);
      return;
    }

    if (newBookmark) {
      reset();
      setOpen(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>New bookmark</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Add bookamrk</Dialog.Title>
            </Dialog.Header>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Dialog.Body>
                <Label className="flex mb-2">Name</Label>
                <Input
                  {...register("name")}
                  placeholder="Name"
                  className="mb-8"
                />
                <Label className="flex mb-2">URL</Label>
                <Input {...register("url")} placeholder="URL" />
              </Dialog.Body>
              <Dialog.Footer>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
                <Button type="submit">Save</Button>
              </Dialog.Footer>
            </form>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddBookmarkForm;
