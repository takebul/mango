"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal, TextField, Label, Input } from "@heroui/react";
import { useState } from "react";
import { FiEdit2, FiUser, FiImage, FiCheck } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";

const EditProfile = ({ currentName = "", currentImage = "" }) => {
  const router = useRouter();
  const [name, setName] = useState(currentName);
  const [image, setImage] = useState(currentImage);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    try {
      setIsUpdating(true);
      await authClient.updateUser({
        name: name.trim(),
        image: image.trim() || undefined,
      });

      toast.success("Profile updated successfully!");
      setIsOpen(false);
      router.refresh();
    } catch {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        size="md"
        onPress={() => {
          setName(currentName);
          setImage(currentImage);
          setIsOpen(true);
        }}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-amber-500 hover:text-white transition border border-slate-200/80 shadow-xs"
      >
        <FiEdit2 className="size-4" />
        <span>Edit Profile Details</span>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
            <Modal.CloseTrigger />
            <Modal.Header className="pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
                <FiUser className="size-5" />
              </div>
              <Modal.Heading className="text-xl font-bold text-slate-900">
                Update Your Profile
              </Modal.Heading>
              <p className="text-xs text-slate-500 mt-1">
                Customize your public reader name and avatar photo
              </p>
            </Modal.Header>

            <Modal.Body className="py-6">
              <form onSubmit={handleEdit} id="edit-profile-form" className="space-y-4">
                {/* Live Avatar Preview */}
                <div className="flex items-center gap-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-amber-500 text-white flex items-center justify-center text-xl font-bold ring-2 ring-amber-400 shrink-0 relative">
                    {image ? (
                      <Image
                        unoptimized
                        src={image}
                        alt="Avatar preview"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      name?.[0]?.toUpperCase() || "U"
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-700">Avatar Preview</p>
                    <p className="text-[11px] text-slate-500">Live preview of your profile picture</p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                      <FiUser className="size-4" />
                    </div>
                    <input
                      required
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Avatar Image URL
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                      <FiImage className="size-4" />
                    </div>
                    <input
                      name="image"
                      type="url"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="https://example.com/avatar.jpg"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition"
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
              <Button
                variant="outline"
                onPress={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 border-slate-200 hover:bg-slate-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                form="edit-profile-form"
                disabled={isUpdating}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white mango-btn-gradient shadow-md shadow-amber-500/20"
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditProfile;

