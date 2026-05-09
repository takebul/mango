"use client";
import { Button } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const ActiveCategoryBtn = ({ category }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category");
  const isActive = activeCategory === category.name.toLowerCase();

  const handleNavigation = () => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category.name.toLowerCase());

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Button
      onClick={handleNavigation}
      variant="outline"
      className={` px-10 rounded-lg transition-colors w-25 md:w-34 ${
        isActive ? "bg-green-500 text-white" : "text-black"
      }`}
    >
      {category.name}
    </Button>
  );
};

export default ActiveCategoryBtn;
