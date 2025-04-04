import React from "react";

export default function Video() {
  return (
    <div className="md:py-12">
      <video className="w-full h-auto" controls autoPlay muted loop>
        <source src="https://beston.uz/wp-content/uploads/2024/05/playback.mp4" type="video/mp4" />
        Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
      </video>
    </div>
  );
}
