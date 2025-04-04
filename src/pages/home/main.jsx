import React, { Suspense, lazy } from "react";

const Video = lazy(() => import("./video"));
const About = lazy(() => import("./about"));
const Details = lazy(() => import("./details"));
const SwiperPage = lazy(() => import("./swiper"));
const Techniques = lazy(() => import("./techniques"));

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<div>Yuklanmoqda...</div>}>
        <Techniques />
        <SwiperPage />
        <Video />
        <About />
        <Details />
      </Suspense>
    </main>
  );
}
