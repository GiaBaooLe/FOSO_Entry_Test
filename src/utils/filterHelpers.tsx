import type { FilterGroup, Product } from "../types/type";


export const generateFilterGroupsFromProducts = (
  products: Product[]
): FilterGroup[] => {
  const getUniqueOptions = (key: keyof Product): { label: string; value: string }[] => {
    const values = Array.from(
      new Set(products.map((p) => p[key]?.trim()).filter(Boolean))
    );
    return values.map((v) => ({
      label: v,
      value: v,
    }));
  };

  return [
    {
      type: "checkbox",
      label: "Danh mục sản phẩm",
      options: getUniqueOptions("category"),
    },
    {
      type: "button",
      label: "Khoảng giá",
      options: [
        { label: "Dưới 200,000 đ", value: "<200000" },
        { label: "200,000 đ - 500,000 đ", value: "200000-500000" },
        { label: "500,000 đ - 1,000,000 đ", value: "500000-1000000" },
        { label: "Trên 1,000,000 đ", value: ">1000000" },
      ],
    },
    {
      type: "checkbox",
      label: "Thương hiệu",
      options: getUniqueOptions("brand"),
    },
    {
      type: "checkbox",
      label: "Năm sản xuất",
      options: getUniqueOptions("yom"),
    },
    {
      type: "checkbox",
      label: "Xuất xứ",
      options: getUniqueOptions("madeIn"),
    },
  ];
};
