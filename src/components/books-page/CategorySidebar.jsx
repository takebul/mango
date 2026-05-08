import { getBooksCategories } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import ActiveCategoryBtn from "../shared/ActiveCategoryBtn";

const CategorySidebar = async () => {
  const categories = await getBooksCategories();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-bold text-center">Categories</h2>
      {categories.map((category) => (
        <div key={category.id}>
          <Link href={`?category=${category.name.toLowerCase()}`}>
            <ActiveCategoryBtn category={category} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
