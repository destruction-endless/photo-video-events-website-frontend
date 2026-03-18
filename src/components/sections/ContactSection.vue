<template>
  <section id="contact" class="px-6 py-24 md:py-32">
    <div class="mx-auto max-w-3xl text-center">
      <h2
        class="font-heading text-3xl md:text-5xl text-dark tracking-[0.1em] uppercase"
      >
        Let's capture your story
      </h2>
      <p
        class="font-body mt-5 mx-auto max-w-xl text-sm md:text-base text-muted leading-relaxed"
      >
        Share a few details about your day and we will craft imagery that feels
        intimate, timeless, and truly yours.
      </p>

      <form
        class="mt-12 rounded-2xl border border-primary/20 bg-cream/70 p-6 md:p-8 text-left backdrop-blur-[1px]"
        @submit.prevent
      >
        <div class="grid grid-cols-1 gap-5">
          <div>
            <label
              for="contact-name"
              class="block font-heading text-xs uppercase tracking-[0.2em] text-dark/85"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autocomplete="name"
              required
              class="mt-2 w-full rounded-xl border border-primary/30 bg-white/80 px-4 py-3 text-sm text-dark placeholder:text-muted/80 outline-none transition-colors duration-300 focus:border-primary focus:ring-2 focus:ring-primary/25"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              for="contact-email"
              class="block font-heading text-xs uppercase tracking-[0.2em] text-dark/85"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="mt-2 w-full rounded-xl border border-primary/30 bg-white/80 px-4 py-3 text-sm text-dark placeholder:text-muted/80 outline-none transition-colors duration-300 focus:border-primary focus:ring-2 focus:ring-primary/25"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              for="contact-message"
              class="block font-heading text-xs uppercase tracking-[0.2em] text-dark/85"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              required
              class="mt-2 w-full rounded-xl border border-primary/30 bg-white/80 px-4 py-3 text-sm text-dark placeholder:text-muted/80 outline-none transition-colors duration-300 focus:border-primary focus:ring-2 focus:ring-primary/25"
              placeholder="Tell us about your wedding date, location, and vision."
            />
          </div>
        </div>

        <div class="mt-7 flex justify-center">
          <button
            type="submit"
            class="inline-flex items-center justify-center rounded-full border border-primary bg-primary/95 px-8 py-3 font-heading text-xs uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:bg-transparent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            Send Message
          </button>
        </div>
      </form>

      <div
        class="mt-10 flex items-center justify-center gap-4"
        aria-label="Social media links"
      >
        <a
          href="https://facebook.com/GCreatives.ph"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:scale-105 hover:border-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M13.5 21v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4z"
            />
          </svg>
        </a>

        <a
          href="https://instagram.com/Gcreatives.ph"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:scale-105 hover:border-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9zm9.6 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z"
            />
          </svg>
        </a>

        <a
          href="https://youtube.com/GCreativesPh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:scale-105 hover:border-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.3V8.7L15.8 12 10 15.3z"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
