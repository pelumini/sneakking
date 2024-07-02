import { CategoriesSelection } from "@/app/(storefront)/_components/CategorySelection";
import { FeaturedProducts } from "@/app/(storefront)/_components/FeaturedProducts";
import { Hero } from "@/app/(storefront)/_components/Hero";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <CategoriesSelection />
      <FeaturedProducts />
    </div>
  );
};

export default IndexPage;
