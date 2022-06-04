import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 lg:pt-16 lg:pb-10 bg-[rgb(24,24,33)] px-4">
      <div className="container mx-auto ">
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:justify-items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                className="h-10 w-10"
                src="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"
                alt=""
              />
              <h1 className="capitalize font-bold text-white">
                Học Lập Trình Để Đi Làm
              </h1>
            </div>
            <h3 className="text-tuyn-gray mb-2 text-sm">
              Điện thoại: 0246.329.1102
            </h3>
            <h3 className="text-tuyn-gray mb-2 text-sm">
              Email: contact@fullstack.edu.vn
            </h3>
            <h3 className="text-tuyn-gray mb-2 text-sm">
              Địa chỉ: Nhà D9, lô A10, Nam Trung Yên, Trung Hòa, Cầu Giấy, Hà
              Nội
            </h3>
            <img
              className="pt-3"
              src="https://static.fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="capitalize font-bold text-white mb-3">VỀ F8</h1>
            <h3 className="text-tuyn-gray mb-2 text-sm">Giới thiệu</h3>
            <h3 className="text-tuyn-gray mb-2 text-sm">Cơ hội việc làm</h3>
            <h3 className="text-tuyn-gray mb-2 text-sm">Đối tác</h3>
          </div>
          <div>
            <h1 className="capitalize font-bold text-white mb-3">HỖ TRỢ</h1>
            <h3 className="text-tuyn-gray mb-2 text-sm">Liên hệ</h3>
            <h3 className="text-tuyn-gray mb-2 text-sm">Bảo mật</h3>
            <h3 className="text-tuyn-gray mb-2 text-sm">Điều khoản</h3>
          </div>
          <div>
            <h1 className="capitalize font-bold text-white mb-3">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
            </h1>
            <h3 className="text-tuyn-gray mb-2 text-sm">
              Mã số thuế: 0109922901
            </h3>
            <h3 className="text-tuyn-gray mb-2 text-sm">
              Ngày thành lập: 04/03/2022
            </h3>
            <h3 className="text-tuyn-gray mb-2 text-sm">
              Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát
              triển những sản phẩm mạng lại giá trị cho cộng đồng.
            </h3>
          </div>
        </section>
        <section className="flex mt-5">
          <h3 className="text-tuyn-gray mb-2 text-sm">
            © 2018 - 2022 F8. All rights reserved.
          </h3>
        </section>
      </div>
    </footer>
  );
}
