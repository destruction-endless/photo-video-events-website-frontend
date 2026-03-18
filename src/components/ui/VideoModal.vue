<script setup lang="ts">
  import { watch, ref, nextTick } from "vue";
  import { useVideoModal } from "../../composables/useVideoModal";

  const { isOpen, sanitizedUrl, closeVideo } = useVideoModal();
  const modalRef = ref<HTMLDivElement | null>(null);

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeVideo();
  };

  watch(isOpen, (open) => {
    if (open) {
      document.addEventListener("keydown", handleKeydown);
      document.body.style.overflow = "hidden";
      nextTick(() => modalRef.value?.focus());
    } else {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    }
  });
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        ref="modalRef"
        class="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 p-4 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Video player"
        tabindex="-1"
        @click.self="closeVideo"
      >
        <!-- Close Button -->
        <button
          class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-300 z-10"
          aria-label="Close video"
          @click="closeVideo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
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

        <!-- Video Embed -->
        <div class="w-full max-w-4xl aspect-video">
          <iframe
            v-if="sanitizedUrl"
            :src="sanitizedUrl"
            class="w-full h-full"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            title="Video player"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
