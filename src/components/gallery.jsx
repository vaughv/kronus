
import assets from "../assets";

// Build a simple images array for the gallery. We keep this local so the gallery
// doesn't assume `assets` is an array. If you later add more images to
// src/assets/index.js, update this list to include them.
const images = [
  { id: 1, url: assets.reward, alt: "KRONUS Award - MSME Most Promising" },
  { id: 2, url: "https://placehold.co/800x800/0f172a/94a3b8?text=Project+1", alt: "Project 1 - Exterior" },
  { id: 3, url: "https://placehold.co/800x800/0b1220/94a3b8?text=Project+2", alt: "Project 2 - Living Room" },
  { id: 4, url: "https://placehold.co/800x800/081024/94a3b8?text=Project+3", alt: "Project 3 - Lobby" },
  { id: 5, url: "https://placehold.co/800x800/001219/94a3b8?text=Project+4", alt: "Project 4 - Amenities" },
  { id: 6, url: "https://placehold.co/800x800/021124/94a3b8?text=Project+5", alt: "Project 5 - Landscape" },
];

const GallerySection = () => {
    if (!images || images.length === 0) return null;

    return (
        <section id="gallery" className="py-16 md:py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
                    Project Gallery
                </h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                    A glimpse into the stunning design and world-class amenities of our recent developments.
                </p>

                {/* Responsive gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image) => (
                        <div key={image.id} className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                            <div className="w-full pb-[75%] bg-gray-200 relative">
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/0f172a/94a3b8?text=Gallery+Image"; }}
                                />
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-md p-3 opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <span className="text-white font-semibold text-sm">{image.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
