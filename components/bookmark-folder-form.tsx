import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PlusSquare } from "lucide-react";
import { Dialog, Portal } from "@chakra-ui/react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";

type BookmarkFolderFormInputs = {
  name: string;
};

export default function BookmarkFolderForm() {
  const supabase = createClient();
  const [userId, setUserId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUserId(data.user?.id || null);
    };

    getUser();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookmarkFolderFormInputs>();

  const onSubmit: SubmitHandler<BookmarkFolderFormInputs> = async (data) => {
    if (!userId) return;

    const payload = {
      bookmark_name: data.name,
      user_id: userId,
    };

    const { data: newBookmarkFolder, error } = await supabase
      .from("BookmarkFolder")
      .insert(payload)
      .select();

    if (error) {
      console.error("Error inserting folder:", error.message);
      alert("Failed to create folder: " + error.message);
      return;
    }

    if (newBookmarkFolder) {
      reset();
      setOpen(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button variant="ghost" onClick={() => setOpen(true)}>
          <PlusSquare />
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Add new folder</Dialog.Title>
            </Dialog.Header>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Dialog.Body>
                <Label className="flex mb-2">Name</Label>
                <Input {...register("name")} placeholder="Name" />
              </Dialog.Body>
              <Dialog.Footer className="flex gap-2">
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
}
