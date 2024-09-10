import { CategoryList } from "@/components/categoryList";
import { SectionCard } from "@/components/sectionCard";
import { ShopCard } from "@/components/shopCard";

export default function Category({
  params,
}: {
  params: { navigation: string };
}) {
  return (
    <>
      <div className="w-full bg-secondary-300 py-[6.125rem] text-center text-tertiary-100">
        <h1 className="prose-headline-h2">{params.navigation.toUpperCase()}</h1>
      </div>
      <SectionCard className="my-[10rem] flex flex-col gap-[10rem]">
        <CategoryList navigation={params.navigation} />
      </SectionCard>
      <SectionCard className="py-[10rem]">
        <ShopCard />
      </SectionCard>
    </>
  );
}
