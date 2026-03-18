export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
}

export const videos: VideoItem[] = [
  {
    id: "1",
    title: "Pre-Wedding Film Trailer of Chris & Lady",
    thumbnail: "https://img.youtube.com/vi/wLjTS6FFvnM/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/wLjTS6FFvnM",
  },
  {
    id: "2",
    title: "Pampanga Wedding of Io & Donna Rhia",
    thumbnail: "https://img.youtube.com/vi/_r65Bc9ubXM/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/_r65Bc9ubXM",
  },
  {
    id: "3",
    title: "Tagaytay Wedding of DJ & Alia",
    thumbnail: "https://img.youtube.com/vi/UEVjmZRc00I/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/UEVjmZRc00I",
  },
];
