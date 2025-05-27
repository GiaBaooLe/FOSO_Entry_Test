// components/SelectSort.tsx
import { Select } from "antd";


interface SelectSortProps {
  defaultValue?: string;
  onChange: (value: string) => void;
}




 const sortOptions = [
  { label: "Thứ tự mặc định", value: "" },
  { label: "Thứ tự theo mức độ phổ biến", value: "popular_asc" },
  { label: "Thứ tự điểm đánh giá", value: "price_desc" },
  { label: "Mới nhất", value: "name_asc" },
  { label: "Thứ tự theo giá: thấp đến cao", value: "price_asc" },
  { label: "Thứ tự theo giá: cao đến thấp", value: "price_desc" },
]


export const SelectSort: React.FC<SelectSortProps> = ({ defaultValue = "", onChange }) => {
  return (
    <Select
      defaultValue={defaultValue}
      style={{ width: 250 }}
      onChange={onChange}
      options={sortOptions}
    />
  );
};
