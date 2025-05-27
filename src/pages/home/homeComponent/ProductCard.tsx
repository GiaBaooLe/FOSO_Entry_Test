import { Image } from "antd";
import React from "react";
import type {  ProductCardProps } from "../../../types/type";




const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
     
    >
      <div className="w-full h-[200px] flex items-center justify-center bg-white overflow-hidden rounded">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="object-contain max-h-full"
        />
      </div>

      <div className="flex flex-col flex-grow justify-between pt-4">
        <div>
          <div className="w-fit bg-gradient-to-r from-[#FFD666] to-[#FFAB00] rounded-full px-3 py-1 text-xs text-[#B71D18] font-bold flex items-center space-x-1 mb-2">
            <img
              src="/images/icon/Like.png"
              alt="like"
              className="w-4 h-4"
            />
            <span className="text-[#7A0916]">Giá cực sốc</span>
          </div>

          <h2 className="text-md font-bold  h-[48px] line-clamp-2">
            {product.name}
          </h2>
        </div>

        <div className="pt-4">
          <div className="text-lg text-[#B71D18] font-bold">
           {new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(Number(product.price))}
          </div>
          <div className="space-x-2 text-sm flex">
            <div className="text-[#919EAB] line-through">
        {new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(Number(product.price))}
      </div>
            <div className="text-[#B71D18]">-10%</div>
          </div>
          <button className="w-full mt-4 h-10 hover:bg-[#025FCA] hover:text-[#E6F1FF] bg-[#E6F1FF] border-none rounded-md text-[#025FCA] font-bold">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
