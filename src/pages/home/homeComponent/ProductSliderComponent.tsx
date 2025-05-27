
import { useState } from "react";
import type { Product } from "../../../types/type";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Image } from "antd";

interface Props {
  products: Product[];
}

export const ProductSliderComponent : React.FC<Props> = ({ products }) => {
  const PAGE_SIZE = 5;
  const [startIndex, setStartIndex] = useState(0);
  const maxStartIndex = Math.max(products.length - PAGE_SIZE, 0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  if (!products.length) return <p>Không có sản phẩm để hiển thị.</p>;

  return (
  <div className="w-full h-auto bg-[#025FCA] rounded-b-xl px-2 sm:px-4 md:px-10 py-4 md:py-5 relative">
    {/* Navigation Buttons */}
    <div className="flex justify-between absolute top-1/2 left-2 right-2 sm:left-4 sm:right-4 z-10 -translate-y-1/2">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className={`px-2 py-2 sm:px-3 rounded-full bg-[#CDE4FE] text-[#013065] font-bold ${
          startIndex === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-[#E6F1FF]"
        }`}
      >
        <LeftOutlined />
      </button>

      <button
        onClick={handleNext}
        disabled={startIndex === maxStartIndex}
        className={`px-2 py-2 sm:px-3 rounded-full bg-[#CDE4FE] text-[#013065] font-bold ${
          startIndex === maxStartIndex
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-[#E6F1FF]"
        }`}
      >
        <RightOutlined />
      </button>
    </div>

    {/* Responsive Product Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
      {products.slice(startIndex, startIndex + PAGE_SIZE).map((product) => (
        <div
          key={product.id}
          className="bg-white rounded shadow p-2 sm:p-4 w-full flex flex-col min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]"
        >
          <div className="w-full h-[120px] sm:h-[180px] md:h-[200px] lg:h-[245px] flex items-center justify-center bg-white overflow-hidden rounded">
            <Image
              src={product.imageUrl}
              alt={product.name}
              className="object-contain max-h-full"
            />
          </div>

          <div className="flex flex-col flex-grow justify-between pt-2 sm:pt-4">
            <div>
              <div className="w-fit bg-gradient-to-r from-[#FFD666] to-[#FFAB00] rounded-full px-3 py-1 text-xs text-[#B71D18] font-bold flex items-center space-x-1 mb-2">
                <img src="/images/icon/Like.png" alt="" className="w-4 h-4" />
                <span className="text-[#7A0916]">Giá cực sốc</span>
              </div>

              <h2 className="text-sm sm:text-md font-bold line-clamp-2 h-[36px] sm:h-[48px]">{product.name}</h2>
            </div>

            <div className="pt-2 sm:pt-4">
              <p className="text-base sm:text-lg text-[#B71D18] font-bold">{new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(Number(product.price))}</p>
              <p className="space-x-2 text-xs sm:text-sm">
                <span className="text-[#919EAB] line-through">{new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(Number(product.price))}</span>
                <span className="text-[#B71D18]">-10%</span>
              </p>
              <button className="w-full mt-2 sm:mt-4 h-8 sm:h-10 hover:bg-[#025FCA] hover:text-[#E6F1FF] bg-[#E6F1FF] border-none rounded-md text-[#025FCA] font-bold">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

