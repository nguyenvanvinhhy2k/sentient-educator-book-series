import React, { useState } from "react";
import anhbia from "../app/images/anhbiaupdate.jpg"
import trang1 from "../app/images/p1.jpg"
import trang2 from "../app/images/p2.jpg"
import trang3 from "../app/images/p3.jpg"
import trang4 from "../app/images/trang4.jpg"
import trang5 from "../app/images/trang5.jpg"
import trang6 from "../app/images/trang6.jpg"
import trang7 from "../app/images/p7.jpg"
import trang8 from "../app/images/p8.jpg"
import trang9 from "../app/images/p9.jpg"
import trang10 from "../app/images/p10.jpg"
import trang11 from "../app/images/p11.jpg"
import trang12 from "../app/images/p12.jpg"
import trang13 from "../app/images/p13.jpg"
import trang14 from "../app/images/p14.jpg"
import trang15 from "../app/images/p15.jpg"
import trang16 from "../app/images/p16.jpg"
import trang17 from "../app/images/p17.jpg"
import trang18 from "../app/images/p18.jpg"
import trang19 from "../app/images/p19.jpg"
import trang20 from "../app/images/p20.jpg"
import trang21 from "../app/images/p21.jpg"
import trang22 from "../app/images/p22.jpg"
import trang23 from "../app/images/p23.jpg"
import trang24 from "../app/images/p24.jpg"
import trang25 from "../app/images/p25.jpg"
import trang26 from "../app/images/p26.jpg"
import trang27 from "../app/images/p27.jpg"
import trang28 from "../app/images/p28.jpg"
import trang29 from "../app/images/p29.jpg"
import trang30 from "../app/images/p30.jpg"
import trang31 from "../app/images/p31.jpg"
import trang32 from "../app/images/p32.jpg"
import trang33 from "../app/images/p33.jpg"
import trang34 from "../app/images/p34.jpg"
import trang35 from "../app/images/p35.jpg"
import trang36 from "../app/images/p36.jpg"
import trang37 from "../app/images/p37.jpg"
import trang38 from "../app/images/p38.jpg"
import trangcuoi from "../app/images/endend.jpg"
import next from "../app/images/next-removebg-preview.png"

const FlipBook = () => {
  const pages = [
    { img: anhbia, text: "Trang 1: Giới thiệu" },
    { img: trang1, text: "Trang 2: Nội dung chương 1" },
    { img: trang2, text: "Trang 3: Nội dung chương 2" },
    { img: trang3, text: "Trang 2: Nội dung chương 3" },
    { img: trang4, text: "Trang 3: Nội dung chương 4" },
    { img: trang5, text: "Trang 2: Nội dung chương 5" },
    { img: trang6, text: "Trang 3: Nội dung chương 6" },
    { img: trang7, text: "Trang 2: Nội dung chương 7" },
    { img: trang8, text: "Trang 3: Nội dung chương 8" },
    { img: trang9, text: "Trang 2: Nội dung chương 9" },
    { img: trang10, text: "Trang 3: Nội dung chương 10" },
    { img: trang11, text: "Trang 2: Nội dung chương 11" },
    { img: trang12, text: "Trang 3: Nội dung chương 12" },
    { img: trang13, text: "Trang 2: Nội dung chương 13" },
    { img: trang14, text: "Trang 3: Nội dung chương 14" },
    { img: trang15, text: "Trang 2: Nội dung chương 15" },
    { img: trang16, text: "Trang 3: Nội dung chương 16" },
    { img: trang17, text: "Trang 2: Nội dung chương 17" },
    { img: trang18, text: "Trang 3: Nội dung chương 18" },
    { img: trang19, text: "Trang 2: Nội dung chương 19" },
    { img: trang20, text: "Trang 3: Nội dung chương 20" },
    { img: trang21, text: "Trang 2: Nội dung chương 21" },
    { img: trang22, text: "Trang 3: Nội dung chương 22" },
    { img: trang23, text: "Trang 2: Nội dung chương 23" },
    { img: trang24, text: "Trang 3: Nội dung chương 24" },
    { img: trang25, text: "Trang 2: Nội dung chương 25" },
    { img: trang26, text: "Trang 3: Nội dung chương 26" },
    { img: trang27, text: "Trang 2: Nội dung chương 27" },
    { img: trang28, text: "Trang 3: Nội dung chương 28" },
    { img: trang29, text: "Trang 2: Nội dung chương 29" },
    { img: trang30, text: "Trang 3: Nội dung chương 30" },
    { img: trang31, text: "Trang 2: Nội dung chương 31" },
    { img: trang32, text: "Trang 3: Nội dung chương 32" },
    { img: trang33, text: "Trang 2: Nội dung chương 33" },
    { img: trang34, text: "Trang 3: Nội dung chương 34" },
    { img: trang35, text: "Trang 2: Nội dung chương 35" },
    { img: trang36, text: "Trang 3: Nội dung chương 36" },
    { img: trang37, text: "Trang 2: Nội dung chương 37" },
    { img: trang38, text: "Trang 3: Nội dung chương 38" },
    { img: trangcuoi, text: "Trang 4: Kết luận" },
  ];

  // console.log('dấ', IMA)
  // const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  // console.log('first', mp3)
  // const AUDIO_SRC = mp3
  // console.log('AUDIO_SRC', AUDIO_SRCs
  console.log('cur', currentPage)

  const nextPage = () => {
    if (currentPage < pages.length && currentPage <= 39) setCurrentPage(currentPage + 1);
    if (currentPage === 39) setCurrentPage(currentPage === 0);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };



  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full sm1:w-[78%] lg1:w-[27.7%] xl1:w-[27.6%] 2xl1:w-[30%] m-auto  px-[50px] sm1:px-0">
      <div className="w-full h-[468px] promax:h-[496px] pixel:h-[569px] sm1:h-[87%] md1:h-[81%] lg1:h-[90%] 2xl1:h-[90%] shadow-2xl relative perspective-[1500px]">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`absolute w-full h-full bg-white flex flex-col justify-center items-center text-sm sm1:text-xl transition-transform duration-1000 ease-in-out shadow-lg origin-left rounded-l-[10px] sm1:rounded-l-[15px] rounded-r-[15px] sm1:rounded-r-[25px] overflow-hidden
            ${index < currentPage ? "-rotate-y-180" : "rotate-y-0"}`}
            style={{ zIndex: pages.length - index, backfaceVisibility: "hidden" }}>
            <img
              src={page.img.src}
              alt={`Page ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        
        {/* Nút Prev */}
        <button onClick={prevPage} className={`${(currentPage === 0 || currentPage == false) && "hidden"} absolute top-1/2 left-[-45px] sm:left-[-90px] -translate-y-1/2 p-2 sm:px-4 rounded bg-transparent hover:scale-95 duration-300`}>
          <img className="h-8 w-8 sm:h-12 sm:w-8 md:h-16 md:w-16 rotate-180" src={next.src} alt="Prev"/>
        </button>

        {/* Nút Next */}
        <button onClick={nextPage} className={` absolute top-1/2 right-[-45px] sm:right-[-90px] -translate-y-1/2 p-2 sm:px-4 rounded bg-transparent hover:scale-95 duration-300`}>
          <img className="h-8 w-8 sm:h-12 sm:w-8 md:h-16 md:w-16" src={next.src} alt="Next"/>
        </button>
      </div>

      </div>
  );
};

export default FlipBook;
