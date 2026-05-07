"use client";

import { Button } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const BorrowBookBtn = () => {
  const [isActive, setIsActive] = useState(true);
  const handleBorrowBtn = () => {
    if (isActive) {
      toast.success("Book Borrow is successful");
      setIsActive(false);
    }
  };
  return (
    <div>
      <Button
        size="md"
        variant="secondary"
        className={`mt-3 w-full rounded-md ${isActive ? "" : "text-red-500"}`}
        onClick={handleBorrowBtn}
      >
        {isActive ? "Borrow This Book" : "Borrowed"}
      </Button>
    </div>
  );
};

export default BorrowBookBtn;
