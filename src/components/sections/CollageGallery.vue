<script setup lang="ts">
  import { galleryImages } from "../../data/gallery";

  const desktopFrameClasses = [
    "md:rotate-[-3deg] md:mt-0 md:ml-0 md:z-20",
    "md:rotate-[2.5deg] md:-mt-8 md:-ml-3 md:z-30",
    "md:rotate-[-2deg] md:mt-4 md:ml-2 md:z-10",
    "md:rotate-[3deg] md:-mt-10 md:-ml-5 md:z-40",
    "md:rotate-[-1.5deg] md:-mt-4 md:ml-4 md:z-20",
    "md:rotate-[2deg] md:-mt-12 md:-ml-2 md:z-30",
  ];

  const sizeClasses = [
    "md:col-span-1 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 lg:col-span-1 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-2",
  ];

  const getFrameClass = (index: number) => desktopFrameClasses[index] ?? "";
  const getSizeClass = (index: number) => sizeClasses[index] ?? "";
</script>

<template>
  <section id="gallery" class="py-16 md:py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Section Heading -->
      <div class="text-center mb-16">
        <h2
          class="font-heading text-2xl md:text-4xl text-dark tracking-wide uppercase"
        >
          Portfolio
        </h2>
        <span
          class="block w-16 h-px bg-accent mx-auto mt-4"
          aria-hidden="true"
        />
      </div>

      <!-- Collage Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[180px] gap-4 md:gap-6"
      >
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="relative group focus-within:z-50"
          :class="getSizeClass(index)"
        >
          <div
            class="relative overflow-hidden rounded-sm bg-cream shadow-[0_12px_28px_rgba(25,25,25,0.16)] transform-gpu transition-all duration-500 ease-in-out group-hover:rotate-0 group-hover:scale-[1.05] group-hover:z-50 group-focus-within:rotate-0 group-focus-within:scale-[1.05]"
            :class="getFrameClass(index)"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              loading="lazy"
              width="600"
              height="800"
              class="w-full h-full object-cover min-h-52 md:min-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
