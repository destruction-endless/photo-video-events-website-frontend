<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import NavBar from "../NavBar.vue";
  import heroImage from "../../assets/hero.jpg";

  const isVisible = ref(false);

  onMounted(() => {
    requestAnimationFrame(() => {
      isVisible.value = true;
    });
  });
</script>

<template>
  <section class="relative min-h-screen w-full overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        :src="heroImage"
        alt=""
        aria-hidden="true"
        class="w-full h-full object-cover scale-[1.06] transition-transform duration-[1800ms] ease-out"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        width="1920"
        height="1080"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-dark/35 via-dark/45 to-dark/65"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,241,232,0.08),transparent_55%)]"
      />
    </div>

    <NavBar />

    <!-- Hero Content -->
    <div
      class="relative z-20 flex min-h-screen flex-col items-center justify-center text-center px-6 pt-24 pb-16"
      :class="
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      "
    >
      <p
        class="font-script text-3xl md:text-5xl text-white/90 mb-3 tracking-[0.04em]"
      >
        Capturing your
      </p>
      <h1
        class="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-[0.12em] leading-[1.05]"
      >
        TIMELESS MOMENTS
      </h1>
      <p
        class="font-body text-sm md:text-base text-white/75 mt-6 max-w-md tracking-[0.22em] uppercase"
      >
        Wedding Photography &amp; Cinematography
      </p>
      <a
        href="#contact"
        class="mt-10 inline-flex items-center justify-center border border-white/70 bg-transparent text-white font-heading text-xs tracking-[0.28em] uppercase px-8 py-3.5 transition-all duration-500 ease-in-out hover:bg-cream hover:text-dark hover:border-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/80"
      >
        Get in Touch
      </a>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      aria-hidden="true"
    >
      <div class="w-px h-12 bg-white/45 animate-pulse" />
    </div>
  </section>
</template>
