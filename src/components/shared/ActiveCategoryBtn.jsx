"use client";
import { Button } from "@heroui/react";
import { useState } from "react";

const ActiveCategoryBtn = ({ category }) => {
  const [isActive, setIsActive] = useState(true);
  const handleCategoryBtn = () => {
    if (isActive) {
      setIsActive(false);
    }
  };
  return (
    <div>
      <Button
        onClick={handleCategoryBtn}
        variant="outline"
        className={`w-full rounded-lg ${isActive ? "text-black" : "bg-green-500 text-white"}`}
      >
        {category.name}
      </Button>
    </div>
  );
};

export default ActiveCategoryBtn;
