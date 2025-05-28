import { useEffect, useState } from "react";

import type { Product } from "../../types/type";
import { SubHeader } from "../../components/layout/SubHeader";

import axios from "axios";

import { Rate, Spin } from "antd";
import { Image, Input, type GetProps } from "antd";
import PriceFilter from "./productComponent/PriceFilter";
import { SelectSort } from "./productComponent/SortSelector";
import ProductCard from "../home/homeComponent/ProductCard";
import { BreadCrumb } from "../../components/layout/BreadCrumb";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";



type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;



export const StarRating = ({
  value = 0,
  onChange,
  allowHalf = true,
  disabled = false,
}: {
  value?: number;
  onChange?: (val: number) => void;
  allowHalf?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Rate
        allowHalf={allowHalf}
        disabled={disabled}
        value={value}
        
        onChange={onChange}
      />
      
    </div>
  );
};



 export const ProductPage = () => {
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);
const [sortOption, setSortOption] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://6544ed325a0b4b04436d3a1e.mockapi.io/api/v1/FOSO",{
              params: { sort: sortOption }
          }
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sortOption]);
  
  return (
   <div className="flex flex-col min-h-screen bg-gray-100 ">
      <main className="flex-grow ">
      <Header />
      <SubHeader product={products} />
      <div className="px-2 sm:px-4 md:px-10">
          <BreadCrumb/>
      </div>
      <div className="flex flex-col lg:flex-row pt-6 md:pt-10 gap-4">
       
        <div className="w-full lg:w-1/3 border-r-0 lg:border-r-2 border-[#8d8d8d] bg-white h-max">
          <div className="p-4 sm:p-6 md:p-10 space-y-4">
            <Search
              placeholder="Tìm kiếm sản phẩm"
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
            <div className="text-xl md:text-2xl font-semibold">Lọc theo giá </div>
            <PriceFilter/>
            <div className="text-xl md:text-2xl font-semibold">Danh mục sản phẩm</div>
            {products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <span className="text-blue-600 text-base md:text-lg font-semibold">{product.category}</span>
                <span>(32)</span>
              </div>
            ))}
            <div>
              <div className="text-xl md:text-2xl font-semibold">Sản phẩm bán chạy</div>
              {products.slice(0,6).map((product) => (
                <div key={product.id} className="flex items-center px-2 sm:px-3 space-x-2 border-b border-[#8d8d8d]">
                  <div>
                    <Image
                      src={product.imageUrl} alt={product.name} width={80} height={80} className="object-contain"
                    />
                  </div>
                  <div className="p-2 sm:p-3 ">
                    <div className="text-xs sm:text-base line-clamp-2 font-semibold">{product.name}</div>
                    <div className="line-clamp-1 text-xs sm:text-sm">Lọc giadsasdsa dasdasd asdasdas asdas dasdasd sasdsa adssad asddasda ó động cơ</div>
                    
                     
                        <div>

                      
              <div className="w-fit bg-gradient-to-r from-[#FFD666] to-[#FFAB00] rounded-full px-3 py-1 text-xs text-[#B71D18] font-bold flex items-center space-x-1 mt-5">
                <img src="/images/icon/Like.png" alt="" className="w-4 h-4" />
                <span className="text-[#7A0916]">Giá cực sốc</span>
                <p>-10%</p>
              </div>{" "}  


              <div>
              <StarRating onChange={(val) => console.log("Rated:", val)} /></div>
              <div className="flex justify-between ">
                <div className=" ">
                  <div className="flex items-center text-md text-gray-700">
<p>Giá: </p> <p className="font-semibold text-[#B71D18]"> {new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(Number((product.price)))}</p>
                  </div>
                  
                <div>   <p className="text-xs line-through"> {new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(Number((product.price)))}</p></div>
                </div>
               
               
               
                <button className="w-24 mt-2 h-8 hover:bg-[#025FCA] hover:text-[#E6F1FF] bg-[#E6F1FF] border-none rounded-md text-[#025FCA] font-bold">
                  Mua ngay
                </button>
                <div></div>
              </div>{" "}
            </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
        <div className="w-full lg:w-2/3 p-2 sm:p-6 md:p-10">
          <div className="px-1 sm:px-3 pb-6 md:pb-10 text-2xl md:text-4xl font-semibold border-b border-gray-300 text-blue-600">
            Lọc gió động cơ - Air Filter
          </div>
          <div className="flex flex-col md:flex-row pt-6 md:pt-10 justify-between gap-2 md:gap-4">
            <p className="text-sm md:text-base">Hiển thị 1-12 của 83 kết quả</p>
            <SelectSort defaultValue="" onChange={setSortOption} />
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Spin size="large" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center text-gray-500 py-20 text-lg">
              Không có sản phẩm nào
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 pt-6 md:pt-10">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded shadow p-2  w-full flex flex-col min-h-[250px] sm:min-h-[350px] md:min-h-[400px]"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
    <Footer/>
    {loading && (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-40">
        <Spin size="large" />
      </div>
    )}
   </div>
  );
};


