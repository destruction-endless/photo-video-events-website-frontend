<script setup lang="ts">
  import { ref } from "vue";

  const isMenuOpen = ref(false);

  const navLinks = [
    { label: "Story", href: "#story" },
    { label: "Gallery", href: "#gallery" },
    { label: "Films", href: "#films" },
    { label: "Contact", href: "#contact" },
  ];
</script>

<template>
  <nav class="absolute top-0 left-0 w-full z-30 px-6 py-6 md:px-12 md:py-8">
    <div class="flex items-center justify-between">
      <a
        href="#"
        class="font-script text-2xl md:text-3xl text-white/90 hover:text-white transition-colors duration-300"
      >
        GCreatives.ph
      </a>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="font-heading text-sm tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-300"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden text-white/90 hover:text-white transition-colors"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <ul
        v-if="isMenuOpen"
        class="md:hidden mt-6 flex flex-col gap-4 bg-dark/80 backdrop-blur-sm rounded-lg p-6"
      >
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="font-heading text-sm tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-300 block py-1"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </Transition>
  </nav>
</template>
