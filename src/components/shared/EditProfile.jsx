"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const EditProfile = () => {
  const handleEdit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    console.log({ name, image });

    await authClient.updateUser({
      name,
      image,
    });
    window.location.reload();
  };
  return (
    <div>
      <Modal>
        <Button
          size="lg"
          variant="outline"
          className={"rounded-sm w-full text-white bg-slate-700 p-2 text-lg"}
        >
          <FaEdit />
          Edit Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto" scroll="outside">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaUser className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Edit Profile Form</Modal.Heading>
                <p className="mt-0.5 text-sm text-muted">
                  Fill out the form below and edit to your profile.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={handleEdit} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Your Name" />
                    </TextField>
                    <TextField className="w-full" name="image" type="text">
                      <Label>Image URL</Label>
                      <Input placeholder="Image URL" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot={"close"}>
                        <FaEdit /> Edit
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditProfile;
