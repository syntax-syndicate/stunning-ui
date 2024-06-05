<template>
  <div class="god-ray relative flex h-screen w-screen">
    <div class="jumbo"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.god-ray {
  --sui-ray-bg: #ffffff;
  --stripes: repeating-linear-gradient(
    100deg,
    var(--sui-ray-bg) 0%,
    var(--sui-ray-bg) 7%,
    transparent 10%,
    transparent 12%,
    var(--sui-ray-bg) 16%
  );
  --rainbow: repeating-linear-gradient(
    100deg,
    #60a5fa 10%,
    #e879f9 15%,
    #60a5fa 20%,
    #5eead4 25%,
    #60a5fa 30%
  );
  --aurora: repeating-linear-gradient(
    100deg,
    #3b82f6 10%,
    #a5b4fc 15%,
    #93c5fd 20%,
    #ddd6fe 25%,
    #60a5fa 30%
  );
  background-color: var(--sui-ray-bg);
  transition: background-color 0.3s;
}

@keyframes jumbo {
  from {
    background-position: 50% 50%, 50% 50%;
  }

  to {
    background-position: 350% 50%, 350% 50%;
  }
}

.jumbo {
  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;
  filter: blur(10px) invert(100%);
  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
}

.jumbo::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  animation: jumbo 60s linear infinite;
  background-attachment: fixed;
  mix-blend-mode: difference;
}

.dark .god-ray {
  --sui-ray-bg: rgba(0, 0, 0, 1);
}

.dark .jumbo,
.dark .jumbo::after {
  background-image: var(--stripes), var(--aurora);
  filter: blur(12px) invert(10%);
}
</style>
