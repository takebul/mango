import { getBooksCategories, getBooks } from "@/lib/data";
import ActiveCategoryBtn from "../shared/ActiveCategoryBtn";
import { FiFilter } from "react-icons/fi";

const CategorySidebar = async () => {
  const [categories, allBooks] = await Promise.all([
    getBooksCategories(),
    getBooks(),
  ]);

  const allCategoryItem = {
    id: "all",
    name: "All Books",
    slug: "",
  };

  return (
    <aside className="w-full bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-slate-900">
        <FiFilter className="size-4 text-amber-500" />
        <h3 className="font-bold text-base">Filter Categories</h3>
      </div>

      <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
        <ActiveCategoryBtn
          key="all"
          category={allCategoryItem}
          count={allBooks.length}
        />
        {categories.map((category) => {
          const categorySlug = (category.slug || category.name).toLowerCase();
          const count = allBooks.filter(
            (b) => b.category?.toLowerCase() === categorySlug,
          ).length;

          return (
            <ActiveCategoryBtn
              key={category.id}
              category={category}
              count={count}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default CategorySidebar;

