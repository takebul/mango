import { getBooksCategories } from "@/lib/data";
import ActiveCategoryBtn from "../shared/ActiveCategoryBtn";

const CategorySidebar = async () => {
  const categories = await getBooksCategories();
  return (
    <div className="flex mx-auto items-center md:flex-col flex-wrap w-11/12 gap-4">
      <h2 className="font-bold text-center text-xl md:text-2xl lg:text-3xl">
        Categories
      </h2>
      {categories.map((category) => (
        <div key={category.id}>
          <ActiveCategoryBtn category={category} />
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
