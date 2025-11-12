import React from "react";
import assets from "../assets";

// Gallery data
const galleryMedia = [
  { type: "image", src: assets.a , aspectRatio: "h-auto" },
  { type: "video", id: "lb246_NEfks", aspectRatio: "h-[30rem]" },
  { type: "image", src: assets.b, aspectRatio: "h-auto" },
  { type: "image", src: assets.c, aspectRatio: "h-auto" },
  { type: "video", id: "F_ED_Shqd44", aspectRatio: "h-[24rem]" },
  { type: "image", src: assets.d, aspectRatio: "h-auto" },
  { type: "image", src: assets.e, aspectRatio: "h-auto" },
  { type: "image", src: assets.f, aspectRatio: "h-auto" },
  { type: "video", id: "Frnuz0Bndx4", aspectRatio: "h-[26rem]" },
  { type: "image", src: assets.g, aspectRatio: "h-52" },
  { type: "video", id: "aKf2N4prUng", aspectRatio: "h-[28rem]" },
];

// Split into 3 columns
const splitIntoColumns = (arr, numCols) => {
  const cols = Array.from({ length: numCols }, () => []);
  arr.forEach((item, i) => {
    cols[i % numCols].push(item);
  });
  return cols;
};

const SectionTitle = ({ id, children }) => (
  <h2 id={id} className="text-4xl font-extrabold text-stone-800 mb-12 border-b-4 border-amber-600 inline-block pb-1">
    {children}
  </h2>
);

// Single Column
const GalleryColumn = ({ items, speedClass, delayClass }) => {
  const allItems = [...items, ...items];

  return (
    <div className={`flex flex-col min-w-[260px] space-y-6 ${speedClass} ${delayClass}`}>
      {allItems.map((item, index) => (
        <div
          key={index}
          className={`w-full rounded-xl overflow-hidden shadow-xl shrink-0 transition duration-200 hover:shadow-2xl ${item.aspectRatio}`}
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              className="w-full h-full object-cover"
              onError={(e) => (e.target.src = "https://placehold.co/400x400/FACC15/78350F?text=Media")}
            />
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${item.id}?controls=0&mute=1&autoplay=1&loop=1&playlist=${item.id}`}
              frameBorder="0"
              allow="autoplay; encrypted-media; gyroscope;"
              loading="lazy"
              className="w-full h-full object-cover"
            ></iframe>
          )}
        </div>
      ))}
    </div>
  );
};

const ContinuousScrollGallery = () => {
  const [col1, col2, col3] = splitIntoColumns(galleryMedia, 3);

  const styles = `
  @keyframes scroll-up {
    0% { transform: translateY(0); }
    100% { transform: translateY(-100%); }
  }
  @keyframes scroll-down {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(0); }
  }

  .animate-scroll-up-fast {
    animation: scroll-up 15s linear infinite;
  }
  .animate-scroll-up-medium {
    animation: scroll-up 20s linear infinite;
  }
  .animate-scroll-down {
    animation: scroll-down 15s linear infinite;
  }

  .delay-5s { animation-delay: 2s; }
`;


  return (
    <>
      <style>{styles}</style>

      <div className="w-full mx-auto text-center bg-white">
        <SectionTitle id="gallery">Construction & Design Gallery (Reel Style)</SectionTitle>

        <p className="text-stone-600 mb-12 text-lg max-w-3xl mx-auto">
          Explore our latest work — a continuous stream of images & reel-style videos.
        </p>

        <div className="relative h-[150vh] overflow-hidden rounded-2xl shadow-2xl bg-white">
          <div className="flex justify-evenly h-full w-full p-4 space-x-6">

            {/* LEFT COLUMN — UP FAST */}
            <GalleryColumn items={col1} speedClass="animate-scroll-up-fast" delayClass="" />

            {/* MIDDLE COLUMN — DOWN */}
            <GalleryColumn items={col2} speedClass="animate-scroll-down" delayClass="delay-2s" />

            {/* RIGHT COLUMN — UP MEDIUM */}
            <GalleryColumn items={col3} speedClass="animate-scroll-up-medium" delayClass="" />
          </div>

          <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-white to-transparent pointer-events-none"></div>

          <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default ContinuousScrollGallery;
