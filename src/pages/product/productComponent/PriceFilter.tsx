import { useState } from "react";
import { Slider, Button } from "antd";
import type { PriceFilterProps } from "../../../types/type";


const PriceFilter: React.FC<PriceFilterProps> = ({
  min = 0,
  max = 1000000,
  onFilter,
}) => {
  const [range, setRange] = useState<[number, number]>([min, max]);

  const handleSliderChange = (value: number[]) => {
    setRange([value[0], value[1]]);
  };

  const handleFilterClick = () => {
    if (onFilter) onFilter(range);
  };

  return (
    <div className="">
     

      <Slider
      
        range
        min={min}
        max={max}
        step={10000}
        value={range}
        onChange={handleSliderChange}
      />
<div className="flex justify-between">
<Button type="primary" className="" onClick={handleFilterClick} >
        Lọc
      </Button>
      <div className="flex  space-x-1 justify-end text-sm text-gray-600 mt-2 mb-4">
        <span className="">Giá:</span><span className="font-semibold"> {range[0].toLocaleString()}đ</span>
        <span className="font-semibold">- {range[1].toLocaleString()}đ</span>
      </div>

    
</div>  
    </div>
  );
};

export default PriceFilter;
