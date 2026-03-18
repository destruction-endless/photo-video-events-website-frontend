<template>
  <div class="min-h-screen bg-cream text-dark antialiased">
    <slot />
    <footer class="py-8 px-6 text-center">
      <p class="font-body text-xs text-muted tracking-wider">
        &copy; {{ new Date().getFullYear() }} Studio Name. All rights reserved.
      </p>
    </footer>
  </div>
</template>
