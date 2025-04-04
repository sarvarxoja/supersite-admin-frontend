import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen heroimg flex items-end justify-center">
      <div className="text-white pb-38 perspective-normal">
        <h2 className="font-semibold text-5xl text-center uppercase hero-h">
          <span className="title_main">
            Надежная и
            <br />
            современная
          </span>
          <br />
          <span className="title_main">бытовая техника!</span>
        </h2>
        <p className="pt-5 hero-p text-center">
          Современные технологии, высокое качество и надежность
        </p>
      </div>
    </div>
  );
}
