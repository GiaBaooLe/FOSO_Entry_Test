import { Dropdown } from "antd";
import { SubFooter } from "./SubFooter";

export const Footer = () => {
  const languageDropdownContent = (
    <div className="w-18 flex p-1  bg-white shadow-lg border-1 rounded-full">
      <img
        className="w-[36px] h-[36px]"
        src="/images/icon/vietNamIcon.png"
        alt=""
      />
      <div className="flex px-1">
        <div className="font-semibold  flex items-center">EN</div>
      </div>
    </div>
  );
  return (
    <div className="pt-5 bg-gray-100    w-full">
      <div className="space-y-5 ">
        <SubFooter />
      </div>

     <div className="bg-[url('/images/banner/footer.jpg')] bg-cover bg-center w-full min-h-[350px] max-h-[400px] py-10">
  <footer className=" py-10 px-4 sm:px-8 lg:px-10">
  <div className="flex flex-col lg:flex-row flex-wrap justify-between items-start gap-8 max-w-[1280px] mx-auto">
    
    {/* Company Info */}
    <div className="flex-1 min-w-[220px] space-y-3 text-gray-800">
      <p className="font-bold text-[#013065] text-lg leading-tight">
        VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
      </p>
      <div className="text-sm leading-relaxed">
        <p className="pb-2">
          Tax code: <span className="font-semibold">0305094228</span>
        </p>
        <p className="pb-2">
          Address: <span className="font-semibold">13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.</span>
        </p>
        <p className="pb-2">
          Phone number: <span className="font-semibold">0283 760 7607</span>
        </p>
        <p className="pb-2">
          Opening hour: <span className="font-semibold">09:00 - 22:00 from Mon - Fri</span>
        </p>
      </div>
    </div>

    {/* Sitemap */}
    <div className="flex-1 min-w-[150px] space-y-3 text-gray-700">
      <p className="font-bold text-[#013065] text-lg">Sitemap</p>
      <ul className="text-sm space-y-2">
        <li className="hover:text-[#0373F3] cursor-pointer transition">About</li>
        <li className="hover:text-[#0373F3] cursor-pointer transition">Article</li>
        <li className="hover:text-[#0373F3] cursor-pointer transition">Cart</li>
        <li className="hover:text-[#0373F3] cursor-pointer transition">Contact</li>
      </ul>
    </div>

    {/* Legal */}
    <div className="flex-1 min-w-[150px] space-y-3 text-gray-700">
      <p className="font-bold text-[#013065] text-lg">Legal</p>
      <ul className="text-sm space-y-2">
        <li className="font-semibold hover:text-[#0373F3] cursor-pointer transition">Privacy Policy</li>
        <li className="hover:text-[#0373F3] cursor-pointer transition">Cookie policy</li>
        <li className="hover:text-[#0373F3] cursor-pointer transition">Delivery policy</li>
        <li className="hover:text-[#0373F3] cursor-pointer transition">FAQs</li>
      </ul>
    </div>

    {/* Download App */}
    <div className="flex-1 min-w-[220px] space-y-3">
      <p className="font-bold text-[#013065] text-lg">Download App</p>
      <div className="flex flex-col gap-4">
        <a href="#" className="flex shadow-md p-3 items-center bg-[#1C252E] text-white rounded-2xl space-x-4 max-w-[250px] hover:brightness-110 transition">
          <img src="/images/icon/googlePlay.png" alt="Google Play" className="w-8 h-8 object-contain" />
          <div>
            <p className="font-semibold">Get it on</p>
            <p className="text-sm">Google Play Store</p>
          </div>
        </a>
        <a href="#" className="flex shadow-md p-3 items-center bg-[#0373F3] text-white rounded-2xl space-x-4 max-w-[250px] hover:brightness-110 transition">
          <img src="/images/icon/apple.png" alt="Apple Store" className="w-8 h-8 object-contain" />
          <div>
            <p className="font-semibold">Download from</p>
            <p className="text-sm">Apple App Store</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</footer>

  {/* Bottom row */}

  <div className="flex flex-col sm:flex-row justify-between items-center px-20 gap-4">
    {/* Logo bộ công thương */}
    <div className="flex items-center justify-center">
      <img
        src="/images/icon/boCongThuong.png"
        alt="Bộ Công Thương"
        className="h-10 sm:h-12 object-contain"
      />
    </div>

    {/* Dropdown chọn ngôn ngữ */}
    <div>
      <Dropdown overlay={languageDropdownContent} trigger={["hover"]}>
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-[#E6F1FF] px-3 py-2 rounded-full transition">
          <img
            src="/images/icon/vietNamIcon.png"
            alt="Vietnam Flag"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="text-sm sm:text-base font-medium">VI</span>
        </div>
      </Dropdown>
    </div>
  </div>


</div>
    </div>
  );
};
