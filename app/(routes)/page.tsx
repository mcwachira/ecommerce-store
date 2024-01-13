import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import BillBoard from "@/components/BillBoard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

import React from "react";

export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboard("7457729d-ada7-4d73-b3ca-11295b5c880c");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillBoard data={billboard} />
      </div>

      <div className="flex flex-col gap-y-8 px-4 sm:px-4 lg:px-8">
        <ProductList title="FeaturedProduct" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
