<script setup lang="ts">
  import { videos } from "../../data/videos";
  import { useVideoModal } from "../../composables/useVideoModal";

  const { openVideo } = useVideoModal();
</script>

<template>
  <section id="films" class="py-16 md:py-24 px-6 bg-dark">
    <div class="max-w-6xl mx-auto">
      <!-- Section Heading -->
      <div class="text-center mb-16">
        <h2
          class="font-heading text-2xl md:text-4xl text-white/90 tracking-wide uppercase"
        >
          Wedding Films
        </h2>
        <span
          class="block w-16 h-px bg-accent mx-auto mt-4"
          aria-hidden="true"
        />
      </div>

      <!-- Video Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <button
          v-for="video in videos"
          :key="video.id"
          class="group relative overflow-hidden cursor-pointer text-left"
          :aria-label="`Play ${video.title}`"
          @click="openVideo(video.embedUrl)"
        >
          <div class="aspect-video overflow-hidden relative">
            <img
              :src="video.thumbnail"
              :alt="video.title"
              loading="lazy"
              width="640"
              height="360"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Play Button Overlay -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-dark/30 group-hover:bg-dark/50 transition-colors duration-300"
            >
              <div
                class="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <p
            class="font-heading text-sm text-white/70 mt-3 tracking-wider uppercase"
          >
            {{ video.title }}
          </p>
        </button>
      </div>
    </div>
  </section>
</template>
