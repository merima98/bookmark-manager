import { Dialog, Portal } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type AddBookmarkFormInputs = {
  url: string;
  name: string;
};

const AddBookmarkForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddBookmarkFormInputs>();

  const onSubmit: SubmitHandler<AddBookmarkFormInputs> = (data) => {
    //TO DO: Add on submit
  };

  return (
    <Dialog.Root>
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
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Close</Button>
                </Dialog.ActionTrigger>
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
