export const SubFooter: React.FC = () => {
  const totalStore = 1000;
  const itemsData = [
    {
      id: 1,
      name: "Miên phí vận chuyển",
      description: "Với hóa đơn từ 1 triệu",
        imageUrl: "/images/icon/money.png",
    },
    {
      id: 2,
      name: "Hỗ trợ 24/7",
      description:
        "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
       imageUrl: "/images/icon/support.png",
    },
    {
      id: 3,
      name: "Giao hàng nhanh 2h",
      description: "Trong vòng bán kính 10km nội thành TP HCM",
       imageUrl: "/images/icon/delivery.png",
    },
    
    {
      id: 4,
      name: "30 ngày đổi trả",
      description: "Bảo vệ động cơ tối ưu với bộ lọc động cơ chính hãng.",
   imageUrl: "/images/icon/package.png",
    },
  ];

  return (
  <div className="bg-gray-100">
 
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-5 px-4 sm:px-8 lg:px-10">
      {itemsData.map((item) => (
        <div
          key={item.id}
          className="flex shadow-md items-center bg-white p-4 sm:p-6 rounded-2xl space-x-4"
        >
          <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-contain" />
          <div>
            <p className="font-semibold text-base sm:text-lg">{item.name}</p>
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[120px] bg-[#E6F1FF] px-4 sm:px-8 lg:px-10 py-4 md:py-0">
      <div className="flex items-center space-x-4 md:space-x-10 mb-4 md:mb-0">
        <img src="/images/icon/location.png" alt="" className="w-8 h-8" />
        <p className="font-semibold text-lg md:text-2xl text-center md:text-left">
          Xem hệ thống trên {totalStore} cửa hàng trên toàn quốc
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button className="flex w-32 sm:w-40 h-10 sm:h-12 bg-white rounded-3xl items-center shadow">
          <div className="flex w-full justify-center space-x-2">
            <span className="font-medium">Xem ngay</span>
            <img src="/images/icon/arrow.png" className="h-6 w-6" alt="" />
          </div>
        </button>
      </div>
    </div>
  </div>
);
};

