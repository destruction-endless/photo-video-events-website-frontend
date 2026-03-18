export interface GalleryImage {
  src: string;
  alt: string;
  rotation: number;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "src/image/gallery/gallery-1.jpg",
    alt: "Wedding ceremony moment",
    rotation: -2,
  },
  {
    src: "src/image/gallery/gallery-2.jpg",
    alt: "Couple portrait in garden",
    rotation: 1.5,
  },
  {
    src: "src/image/gallery/gallery-3.jpg",
    alt: "Reception table details",
    rotation: -1,
  },
  {
    src: "src/image/gallery/gallery-4.jpg",
    alt: "First dance",
    rotation: 2,
  },
  {
    src: "src/image/gallery/gallery-5.jpg",
    alt: "Candid celebration moment",
    rotation: -1.5,
  },
  {
    src: "src/image/gallery/gallery-6.jpg",
    alt: "Sunset couple portrait",
    rotation: 1,
  },
];
