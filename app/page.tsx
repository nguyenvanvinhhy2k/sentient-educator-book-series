"use client";
import FlipBook from "./FlipBook";
import anhnen from "../app/images/anhnen.jpg"

export default function Home() {

  return (
    <div className="h-[100vh] w-full bg-cover bg-center px-[40px] bg-[url('/path/to/image.jpg')] overflow-hidden">
      <FlipBook />
    </div>
  );
}