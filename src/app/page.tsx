import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import CompanyOverview from "@/components/CompanyOverview";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />
      
      {/* Product Categories */}
      <ProductCategories />
      
      {/* Company Overview */}
      <CompanyOverview />
    </div>
  );
}
