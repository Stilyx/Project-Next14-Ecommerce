import { BackButton } from "@/components/backButton";
import { SectionCard } from "@/components/sectionCard";
import { ShopCard } from "@/components/shopCard";
import { ProductInfo } from "@/features/productInfo";

export default function Product({ params }: { params: { product: string } }) {
  return (
    <>
      <SectionCard>
        <BackButton />
      </SectionCard>
      <SectionCard>
        <ProductInfo params={params.product} />
      </SectionCard>
      <SectionCard className="mb-[10rem]">
        <ShopCard />
      </SectionCard>
    </>
  );
}
