<script setup lang="ts">
  import { onMounted } from "vue";
  import { useSeo } from "../composables/useSeo";
  import HeroSection from "../components/sections/HeroSection.vue";
  import StorySection from "../components/sections/StorySection.vue";
  import CollageGallery from "../components/sections/CollageGallery.vue";
  import VideoSection from "../components/sections/VideoSection.vue";
  import ContactSection from "../components/sections/ContactSection.vue";
  import VideoModal from "../components/ui/VideoModal.vue";

  onMounted(() => {
    useSeo({
      title: "Studio Name — Wedding Photography & Cinematography",
      description:
        "Timeless wedding photography and cinematography. Capturing your most beautiful moments with an editorial, fine-art approach.",
      keywords: [
        "wedding photography",
        "wedding videography",
        "cinematography",
        "wedding films",
        "portfolio",
      ],
      canonicalPath: "/",
    });
  });
</script>

<template>
  <main>
    <HeroSection />
    <StorySection />
    <CollageGallery />
    <VideoSection />
    <ContactSection />
    <VideoModal />
  </main>
</template>
