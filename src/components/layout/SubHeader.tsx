import { Dropdown } from "antd";
import type { ProductListProps } from "../../types/type";

import React, { useState } from "react";
import { DownOutlined, MenuOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router";

export const CustomDropdown: React.FC<ProductListProps> = ({ product }) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(
    "Tất cả"
  );
  const categories = [
    {
      category: "Tất cả",
      imageUrl: product[0]?.imageUrl || "",
    },
    ...Array.from(new Set(product.map((p) => p.category))).map((cat) => {
      const firstProduct = product.find((p) => p.category === cat);
      return {
        category: cat,
        imageUrl: firstProduct?.imageUrl || "",
      };
    }),
  ];

  const filteredProducts =
    hoveredCategory === "Tất cả"
      ? product
      : product.filter((p) => p.category === hoveredCategory);

  return (
    <div className="bg-gray-100 rounded-xl shadow-2xl w-full max-w-[98vw] md:max-w-[1200px] lg:max-w-[1200px] overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:min-w-[280px] md:max-w-[280px] md:w-[25%] bg-gray-50 border-r border-gray-100 py-2 px-1 md:px-3 overflow-x-auto">

          {categories.map(({ category, imageUrl }) => (
        <button
  key={category}
  onMouseEnter={() => setHoveredCategory(category)}
  className={`flex items-center justify-between w-full p-2 md:p-3 rounded-md transition-colors duration-150 min-w-0 ${
    hoveredCategory === category
      ? "bg-blue-50 font-bold text-blue-700"
      : "hover:bg-gray-100"
  }`}
>
  <div className="flex items-center space-x-2 overflow-hidden">
    <img
      src={imageUrl}
      alt={category}
      className="w-7 h-7 object-contain rounded"
    />
    <span className="text-xs md:text-sm truncate">{category}</span>
  </div>
  <RightOutlined className="text-xs md:text-base shrink-0" />
</button>

          ))}
        </div>

        <div className="w-full md:w-3/4 bg-gray-100 px-2 md:px-4 py-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 pb-2 border-b border-gray-300">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center bg-white p-2 rounded-lg shadow-sm space-x-2 hover:shadow-md transition-shadow"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded"
                />
                <div>
                  <p className="text-xs sm:text-sm font-semibold line-clamp-2">
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length > 0 && (
            <>
              <div className="flex p-2 sm:p-3">
                <div className="space-x-3 w-full flex justify-between items-center">
                  <p className="border-r-2 border-gray-300 pr-3 text-lg sm:text-base font-bold">
                    Bán chạy nhất
                  </p>
                  <a href="/"><button className="text-blue-700 font-semibold flex items-center text-xs sm:text-sm hover:underline">
                    Xem tất cả
                  </button></a>
                  
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 pb-2 sm:pb-4 px-1 sm:px-2">
                {filteredProducts.slice(0, 5).map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-2 sm:p-4 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center h-full"
                  >
                    <div className="bg-white p-2 sm:p-3 flex justify-center items-center">
                      <img
                        className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold line-clamp-2 text-center mt-1 min-h-[32px] sm:min-h-[40px]">
                      {product.name}
                    </p>
                    <div className="flex flex-col justify-between pt-2 sm:pt-3 w-full h-full">
                      <div className="w-fit mx-auto bg-gradient-to-r from-[#FFD666] to-[#FFAB00] rounded-full px-2 sm:px-3 py-1 text-xs text-[#B71D18] font-bold flex items-center space-x-1 mb-2">
                        <img
                          src="/images/icon/Like.png"
                          alt=""
                          className="w-4 h-4"
                        />
                        <span className="text-[#7A0916]">Giá cực sốc</span>
                      </div>
                      <div className="pt-1 text-center">
                        <p className="text-sm sm:text-base text-[#B71D18] font-bold">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(Number(product.price))}
                        </p>
                        <p className="space-x-2 text-xs sm:text-sm">
                          <span className="text-[#919EAB] line-through">
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(Number(product.price))}
                          </span>
                          <span className="text-[#B71D18]">-10%</span>
                        </p>
                        <button className="w-full mt-2 sm:mt-4 h-8 sm:h-10 hover:bg-[#025FCA] hover:text-[#E6F1FF] bg-[#E6F1FF] border-none rounded-md text-[#025FCA] font-bold transition-colors">
                          Mua ngay
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const SubHeader: React.FC<ProductListProps> = ({ product }) => {
  const popupRender = () => {
    return <CustomDropdown product={product} />;
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row px-2 sm:px-4 md:px-10 lg:px-20 bg-white space-y-2 lg:space-y-0 lg:space-x-5 items-center w-full">
        <div className="w-full lg:w-1/2 p-3 flex flex-col sm:flex-row justify-around space-y-2 sm:space-y-0 sm:space-x-2">
          <Dropdown popupRender={popupRender} placement="bottomLeft" arrow>
            <button className="flex items-center space-x-2 border-2 hover:bg-[#0155C6] hover:text-white border-none font-semibold p-2 sm:p-3 rounded-md cursor-pointer text-sm sm:text-base">
              <MenuOutlined />
              <span>Danh mục sản phẩm</span>
              <DownOutlined />
            </button>
          </Dropdown>
          <button className="border-2 hover:bg-[#0155C6] hover:text-white border-none font-semibold p-2 sm:p-3 rounded-md cursor-pointer text-sm sm:text-base">
            Về chúng tôi
          </button>
          <button className="border-2 hover:bg-[#0155C6] hover:text-white border-none font-semibold p-2 sm:p-3 rounded-md cursor-pointer text-sm sm:text-base">
            Bài viết
          </button>
          <button className="border-2 hover:bg-[#0155C6] hover:text-white border-none font-semibold p-2 sm:p-3 rounded-md cursor-pointer text-sm sm:text-base">
            Catalog
          </button>
          <button className="border-2 hover:bg-[#0155C6] hover:text-white border-none font-semibold p-2 sm:p-3 rounded-md cursor-pointer text-sm sm:text-base">
            Liên hệ
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex flex-wrap justify-around space-y-2 lg:space-y-0 space-x-0 sm:space-x-2 mt-2 lg:mt-0">
          <div className="flex items-center space-x-2">
            <img src="/images/icon/clock.png" alt="clock" className="h-4 w-4" />
            <span className="hover:underline hover:text-[#0155C6] font-semibold cursor-pointer text-xs  sm:text-sm rounded-md">
              Hỗ trợ 24/7
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="/images/icon/handMoney.png"
              alt="money"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
            <span className="hover:underline hover:text-[#0155C6] font-semibold cursor-pointer text-xs sm:text-sm rounded-md">
              Miễn phí vận chuyển
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="/images/icon/truck_fill.png"
              alt="truck"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
            <span className="hover:underline hover:text-[#0155C6] font-semibold cursor-pointer text-xs sm:text-sm rounded-md">
              Giao hàng nhanh 24h
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="/images/icon/refreshCircle.png"
              alt="refreshCircle"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
            <span className="hover:underline hover:text-[#0155C6] font-semibold text-xs cursor-pointer sm:text-sm rounded-md">
              30 Ngày đổi trả
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
