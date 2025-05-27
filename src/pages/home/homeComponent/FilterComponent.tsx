
import { Checkbox, Collapse } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router'
import type { FilterComponentProps } from '../../../types/type';

const { Panel } = Collapse;

export const FilterComponent = ({
  filterGroups,
  onFilterChange,
}: FilterComponentProps) => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string[]>>({});
  const [selectedButtons, setSelectedButtons] = useState<Record<string, string>>({});

  const handleCheckboxChange = (groupLabel: string, values: string[]) => {
    setSelectedValues(prev => ({ ...prev, [groupLabel]: values }));
    onFilterChange?.(groupLabel, values);
  };

  const handleButtonClick = (groupLabel: string, value: string) => {
    const current = selectedButtons[groupLabel];
    const updatedValue = current === value ? '' : value;
    setSelectedButtons(prev => ({ ...prev, [groupLabel]: updatedValue }));
    onFilterChange?.(groupLabel, [updatedValue]);
  };

  return (
    <div>
      <div className="flex p-3 bg-white border-b-2 border-gray-200">
        <img src="/images/filterIcon.png" alt="" />
        <p className="text-2xl text-[#0373F3] font-bold">Bộ Lọc</p>
      </div>

      <div className="bg-white">
        <Collapse
          defaultActiveKey={filterGroups.map((_, idx) => idx.toString())}
          ghost
          expandIconPosition="end"
        >
          {filterGroups.map((group, index) => (
            <Panel
              header={<span className="text-md font-semibold text-gray-700">{group.label}</span>}
              key={index}
            >
              {group.type === "checkbox" ? (
                <Checkbox.Group
                  className="flex flex-col space-y-2 pl-1"
                  onChange={(values) => handleCheckboxChange(group.label, values as string[])}
                  value={selectedValues[group.label] || []}
                >
                  {group.options.map((opt) => (
                    <Checkbox key={opt.value} value={opt.value}>
                      <Link to={`/danh-muc-san-pham/${opt.label}`}>
                        <span className=" hover:text-blue-500 text-black hover:underline">
                          {opt.label}
                        </span>
                      </Link>
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {group.options.map((opt) => {
                    const selected = selectedButtons[group.label] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        className={`px-3 py-1 w-full border ${
                          selected
                            ? "bg-[#0373F3] text-white border-[#0373F3]"
                            : "border-gray-300 text-gray-700 hover:border-[#0373F3] hover:text-[#0373F3]"
                        }`}
                        onClick={() => handleButtonClick(group.label, opt.value)}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};
