"use client";
import { Product } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler} from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  console.log(data);

  const router = useRouter();

  const previewModal = usePreviewModal()

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  const onPreview:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    previewModal.onOpen(data)
  }

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
         <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      {/* description */}
      <div>
        <div className="font-semibold text-lg">{data.name}</div>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* currency */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
