/* eslint-disable @typescript-eslint/no-unused-vars */
import { Badge, Dropdown } from "antd";
import { useState } from "react";
import type { CartItem } from "../../types/type";

export const Header: React.FC = () => {
  const [cartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Lọc dầu nhớt động cơ JS C307J",
      quantity: 1,
      price: 299000,
      imageUrl:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/403/products/c307.webp?v=1676948469600",
    },
    {
      id: "2",
      name: "Bộ lọc không khí cho Polaris Sportsman 7080595",
      quantity: 2,
      price: 299000,
      imageUrl: "https://m.media-amazon.com/images/I/41eptMDiYVL._SS400_.jpg",
    },
  ]);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const cartDropdownContent = (
    <div className="w-80 p-4 bg-white shadow-lg rounded">
      {cartItems.length === 0 && <div>Giỏ hàng trống</div>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center mb-3 bg-white border-b pb-2 last:border-b-0 last:pb-0 space-y-2"
        >
          <img
            src={item.imageUrl}
            alt={item.name}
            width={60}
            height={60}
            className=" object-cover rounded"
          />
          <div className="ml-3 flex-1">
            <div className="font-semibold text-sm">{item.name}</div>
            <div className="text-xs text-gray-500">
              Số lượng: {item.quantity}
            </div>
            <div className="">
              <div className="w-fit bg-gradient-to-r from-[#FFD666] to-[#FFAB00] rounded-full px-3 py-1 text-xs text-[#B71D18] font-bold flex items-center space-x-1 mt-5">
                <img src="/images/icon/Like.png" alt="" className="w-4 h-4" />
                <span className="text-[#7A0916]">Giá cực sốc</span>
                <p>-10%</p>
              </div>{" "}
              <div className="flex justify-between ">
                <div className=" ">
                  <div className="flex items-center text-md text-gray-700">
<p>Giá: </p> <p className="font-semibold"> {new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(Number((item.price * item.quantity)))}</p>
                  </div>
                  
                <div>   <p className="text-xs line-through"> {new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(Number((item.price * item.quantity)))}</p></div>
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

      {cartItems.length > 0 && (
        <div className="mt-3 text-right">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="  px-3 py-1 rounded hover:bg-[#025FCA] hover:text-[#E6F1FF] bg-[#E6F1FF] text-[#025FCA] font-bold"
          >
            Xem giỏ hàng
          </button>
        </div>
      )}
    </div>
  );
  const languageDropdownContent = (
    <div className="w-18 flex p-1  bg-white shadow-lg border-1 rounded-full">
      <img
        className="w-[36px] h-[36px]"
        src="/images/icon/vietNamIcon.png"
        alt="VietNam"
      />
      <div className="flex px-1">
        <div className="font-semibold  flex items-center">EN</div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col md:flex-row pt-3 md:pt-5 px-2 sm:px-4 md:px-10 justify-between items-center space-y-3 md:space-y-0 md:space-x-10 bg-white w-full">
      <div className="flex-shrink-0 mb-2 md:mb-0">
        <img
          src="/images/logo/logo.png"
          alt=""
          className="h-14 sm:h-14 md:h-24 w-auto"
        />
      </div>

      <div className="w-full md:w-[400px] lg:w-[600px] xl:w-[739px] h-[48px] md:h-[64px] rounded-full border-2 border-[#0373f3] flex items-center mb-2 md:mb-0">
        <input
          className="outline-none w-full pl-4 md:pl-6 py-2 md:py-3 bg-transparent text-sm md:text-base"
          type="text"
          placeholder="Tìm sản phẩm"
        />
        <div className="flex items-center py-1 px-1 md:py-2 md:px-2 space-x-2 md:space-x-3">
          <img
            src="/images/icon/Camera.png"
            alt=""
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <button className="bg-[#0373f3] rounded-3xl w-14 h-10 md:w-[80px] md:h-[48px] flex justify-center items-center">
            <img
              className="w-6 h-6 md:w-[28px] md:h-[28px]"
              src="/images/icon/search.png"
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="flex space-x-4 md:space-x-9 items-center">
        <Dropdown overlay={languageDropdownContent} trigger={["hover"]}>
          <div className="flex justify-center rounded-3xl items-center space-x-1 cursor-pointer hover:bg-[#E6F1FF] px-2 py-1">
            <img
              className="w-7 h-7 md:w-9 md:h-9"
              src="/images/icon/vietNamIcon.png"
              alt=""
            />
            <span className="inline-block text-xs md:text-base">VI</span>
          </div>
        </Dropdown>

        <Dropdown overlay={cartDropdownContent} trigger={["hover"]}>
          <div className="flex justify-center rounded-3xl items-center space-x-1 cursor-pointer hover:bg-[#E6F1FF] px-2 py-1">
            <Badge count={totalQuantity} offset={[0, 5]}>
              <img
                className="w-7 h-7 md:w-9 md:h-9"
                src="/images/icon/Cart.png"
                alt=""
              />
            </Badge>
            <span className="inline-block text-xs md:text-base">Giỏ hàng</span>
          </div>
        </Dropdown>

        <div className="flex justify-center rounded-3xl items-center space-x-1 cursor-pointer hover:bg-[#E6F1FF] px-2 py-1">
          <img
            className="w-7 h-7 md:w-9 md:h-9"
            src="/images/icon/userCircle.png"
            alt="userCirle"
          />
          <span className="inline-block text-xs md:text-base">Tài khoản</span>
        </div>
      </div>
    </div>
  );
};
