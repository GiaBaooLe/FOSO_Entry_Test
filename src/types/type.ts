
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  category: string;
  yom: string;
  madeIn: string;
  imageUrl: string;
}

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}
export interface SubFooterData{
  title: string;
  description: string;
  imageUrl: string;
}
export interface PriceFilterProps {
  min?: number;
  max?: number;
  onFilter?: (range: [number, number]) => void;
}

export interface ProductListProps {
  product: Product[];
}
export interface ProductCardProps {
  product: Product;
}
export interface FilterOption {
  label: string;
  value: string;
}
export interface FilterGroup {
  type: 'checkbox' | 'button';
  label: string;
  options: FilterOption[];
}
export interface FilterComponentProps {
  filterGroups: FilterGroup[];
  onFilterChange?: (groupLabel: string, values: string[]) => void;
}
