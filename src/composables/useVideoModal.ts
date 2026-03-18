import { ref, computed } from "vue";

const isOpen = ref(false);
const currentVideoUrl = ref("");

const ALLOWED_HOSTS = [
  "www.youtube.com",
  "youtube.com",
  "www.vimeo.com",
  "vimeo.com",
  "player.vimeo.com",
];

export function useVideoModal() {
  const sanitizedUrl = computed(() => {
    try {
      const url = new URL(currentVideoUrl.value);
      if (ALLOWED_HOSTS.includes(url.hostname)) {
        return currentVideoUrl.value;
      }
      return "";
    } catch {
      return "";
    }
  });

  const openVideo = (url: string) => {
    currentVideoUrl.value = url;
    isOpen.value = true;
  };

  const closeVideo = () => {
    isOpen.value = false;
    currentVideoUrl.value = "";
  };

  return { isOpen, sanitizedUrl, openVideo, closeVideo };
}
