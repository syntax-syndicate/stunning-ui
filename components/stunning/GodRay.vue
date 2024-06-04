<template>
  <div class="main-container relative flex h-screen w-screen">
    <div class="jumbo"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.main-container {
  --sui-ray-bg: rgba(255, 255, 255, 0.3);
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
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
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
</style>
