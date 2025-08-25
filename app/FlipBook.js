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
import trangcuoi from "../app/images/endend.jpg"
import next from "../app/images/next-removebg-preview.png"
// import musicFile from "@/assets/music.mp3";
// import mp3 from "../app/images/dream-of-peace-chill-background-music-271248.mp3"

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
    { img: trangcuoi, text: "Trang 4: Kết luận" },
  ];

  // console.log('dấ', IMA)
  // const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  // console.log('first', mp3)
  // const AUDIO_SRC = mp3
  // console.log('AUDIO_SRC', AUDIO_SRC
  console.log('cur', currentPage)

  const nextPage = () => {
    if (currentPage < pages.length && currentPage <= 9) setCurrentPage(currentPage + 1);
    if (currentPage === 9) setCurrentPage(currentPage === 0);
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
