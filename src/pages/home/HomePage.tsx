
import { BreadCrumb } from "../../components/layout/BreadCrumb";
import { Footer } from "../../components/layout/Footer";
import { SubHeader } from "../../components/layout/SubHeader";

import FilterRelevent from "./homeComponent/FilterRelevant";
import ProductCard from "./homeComponent/ProductCard";

import { useEffect, useState } from "react";
import type { FilterGroup, Product } from "../../types/type";
import axios from "axios";
import { generateFilterGroupsFromProducts } from "../../utils/filterHelpers";
import { Header } from "../../components/layout/Header";
import { ArrowUpOutlined, } from "@ant-design/icons";
import { Spin } from "antd";
import { FilterComponent } from "./homeComponent/FilterComponent";
import { ProductSliderComponent } from "./homeComponent/ProductSliderComponent";



export const HomePage = () => {
  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  const onFilterChange = (groupLabel: string, values: string[]) => {
    console.log("Filter changed:", groupLabel, values);
  };

  const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Product[]>(
          "https://6544ed325a0b4b04436d3a1e.mockapi.io/api/v1/FOSO"
        );
        setProducts(res.data);

        const generatedFilters = generateFilterGroupsFromProducts(res.data);
        setFilterGroups(generatedFilters);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
  return (
    
    <div className="flex flex-col min-h-screen">
  <main className="flex-grow bg-gray-100">
    <div className="w-full">
      <img className="w-full" src="/images/icon/smallOne.png" alt="" />
    </div>

    <Header />
    <SubHeader product={products} />


    <div className="px-2 sm:px-4 md:px-4 lg:px-5 xl:px-10 3xl:px-32 py-4 md:py-8">

  <BreadCrumb />
  <img
    className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[350px] xl:h-[450px] object-cover rounded"
    src="/images/banner/banner.png"
    alt="banner"
  />

  <ProductSliderComponent products={products} />

  <div className="flex flex-col lg:flex-row pt-6 md:pt-10 bg-gray-100 gap-4 md:gap-6">
    <div className="w-full lg:w-1/4">
      <FilterComponent
        filterGroups={filterGroups}
        onFilterChange={onFilterChange}
      />
    </div>
    <div className="w-full lg:w-3/4">
      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 items-start md:items-center">
        <div className="text-lg md:text-xl font-bold">Danh sách sản phẩm</div>
        <div className="flex space-x-2 md:space-x-3 items-center">
          <div className="font-medium text-sm md:text-base">Sắp xếp theo:</div>
          <FilterRelevent />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40 md:h-64">
          <Spin size="large" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-500 py-10 md:py-20 text-base md:text-lg">
          Không có sản phẩm nào
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 pt-4 md:pt-10 ">
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
</div>
  </main>

  <Footer />

  <button
    onClick={scrollToTop}
    className="fixed bottom-6 right-6 z-50 w-12 h-12 flex justify-center items-center rounded-full bg-white border border-blue-500 shadow-md hover:bg-blue-100 transition-colors"
    aria-label="Lên đầu trang"
  >
    <ArrowUpOutlined className="text-blue-500 text-xl" />
  </button>

  {loading && (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-40">
      <Spin size="large" />
    </div>
  )}
</div>

  );
};

