import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Info from "@/components/Info";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/Container";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);

  // console.log(product.category.id);
  //recommended products
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  // console.log(suggestedProducts);

  return (
    <div className="bg-white">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* gallery */}

          <Gallery images={product.images} />

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            {/* info */}
 <Info data={product} />
          </div>
        </div>

        <hr className="my-10" />
        <ProductList title="Related Items" items={suggestedProducts} />
      </Container>
    </div>
  );
};

export default ProductPage;
