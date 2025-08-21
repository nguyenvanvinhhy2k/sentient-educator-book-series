import React, { useState } from "react";
import anhbia from "../app/images/anhbiaupdate.jpg"
import trang1 from "../app/images/trang1up.jpg"
import trang2 from "../app/images/trang2upd.jpg"
import trangcuoi from "../app/images/endend.jpg"
import next from "../app/images/next-removebg-preview.png"
// import musicFile from "@/assets/music.mp3";
// import mp3 from "../app/images/dream-of-peace-chill-background-music-271248.mp3"

const FlipBook = () => {
  const pages = [
    { img: anhbia, text: "Trang 1: Giới thiệu" },
    { img: trang1, text: "Trang 2: Nội dung chương 1" },
    { img: trang2, text: "Trang 3: Nội dung chương 2" },
    { img: trangcuoi, text: "Trang 4: Kết luận" },
  ];

  // console.log('dấ', IMA)
  // const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  // console.log('first', mp3)
  // const AUDIO_SRC = mp3
  // console.log('AUDIO_SRC', AUDIO_SRC)

  const nextPage = () => {
    if (currentPage < pages.length && currentPage < 3) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // useEffect(() => {
  //   const audio = audioRef?.current;
  //   if (!audio) return;

  //   audio.loop = true;
  //   audio.volume = 0.6;

  //   // Thử autoplay
  //   const tryPlay = async () => {
  //     try {
  //       await audio.play();
  //       setIsPlaying(true);
  //     } catch {
  //       setIsPlaying(false); // bị block
  //     }
  //   };

  //   tryPlay();
  // }, []);

  // const toggleMusic = async () => {
  //   const audio = audioRef?.current;
  //   if (!audio) return;

  //   if (isPlaying) {
  //     audio.pause();
  //     setIsPlaying(false);
  //   } else {
  //     try {
  //       await audio.play();
  //       setIsPlaying(true);
  //     } catch {
  //       setIsPlaying(false);
  //     }
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-[45%] h-[95vh] relative m-auto px-2">
      <div className="w-full max-w-[90vw] sm:w-[600px] h-[85vh] sm:h-[90%] perspective-[1500px] shadow-2xl">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`absolute w-full h-full bg-white flex flex-col justify-center items-center text-sm sm:text-xl transition-transform duration-1000 ease-in-out shadow-lg origin-left rounded-l-[10px] sm:rounded-l-[15px] rounded-r-[15px] sm:rounded-r-[25px] overflow-hidden
        ${index < currentPage ? "-rotate-y-180" : "rotate-y-0"}`}
            style={{ zIndex: pages.length - index, backfaceVisibility: "hidden" }}
          >
            <img
              src={page.img.src}
              alt={`Page ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Button Prev */}
      <button
        onClick={prevPage}
        className={`${currentPage === 0 && 'hidden'} absolute top-1/2 left-2 -translate-y-1/2 px-2 py-2 sm:pl-12 sm:py-2 rounded bg-none bg-transparent hover:scale-90 duration-300 cursor-pointer`}
      >
        <img
          className="h-12 w-8 sm:h-16 sm:w-16 rotate-180"
          src={next.src}
        />
      </button>

      {/* Button Next */}
      <button
        onClick={nextPage}
        className={`${currentPage === 3 && 'hidden'} absolute top-1/2 right-2 -translate-y-1/2 px-2 py-2 sm:pr-16 sm:py-2 rounded bg-none bg-transparent hover:scale-90 duration-300 cursor-pointer`}
      >
        <img
          className="h-12 w-8 sm:h-16 sm:w-16 bg-none bg-transparent"
          src={next.src}
        />
      </button>
      {/* <div className="fixed bottom-5 right-5 z-50">

      <audio ref={audioRef} src={musicFile} />


      <button
        onClick={toggleMusic}
        className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white shadow-lg hover:bg-gray-100 transition"
      >
        {isPlaying ? (
          'Bật'
        ) : (
          "Tắt"
        )}
        <span className="text-sm font-medium">
          {isPlaying ? "Đang phát" : "Tắt nhạc"}
        </span>
      </button>
    </div> */}
    </div>

  );
};

export default FlipBook;
