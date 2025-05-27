import { useState } from "react";

const options = [
  "Liên quan",
  "Bán chạy",
  "Mới nhất",
  "Nổi bật",
  "Giá: Thấp ↑ cao ↓",
];

const FilterRelevent = () => {
  const [selected, setSelected] = useState("Liên quan");
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`relative h-9 px-2 sm:px-3 py-1 bg-white rounded-lg font-medium transition-colors duration-200
            ${
              selected === option
                ? "border-blue-500 text-blue-500 border-2"
                : "border border-gray-200"
            }
          `}
        >
          {option}
          {selected === option && (
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
              ✓
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default FilterRelevent;