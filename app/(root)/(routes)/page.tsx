import Categories from "@/components/Categories";
import SearchInput from "@/components/SearchInput";
import prismadb from "@/lib/prismadb";
export default async function RootPage() {
  const categories = await prismadb.category.findMany();
  return (
    <div>
      <div className="f-full p-4 space-y-2">
        <SearchInput />
        <Categories data={categories} />
      </div>
    </div>
  )
}
