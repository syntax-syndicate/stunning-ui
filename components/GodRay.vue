<template>
  <div class="main-container">
    <div class="jumbo"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@keyframes jumbo {
  from {
    background-position: 50% 50%, 50% 50%;
  }

  to {
    background-position: 350% 50%, 350% 50%;
  }
}

.jumbo {
  --stripes: repeating-linear-gradient(
    100deg,
    #fff 0%,
    #fff 7%,
    transparent 10%,
    transparent 12%,
    #fff 16%
  );
  --rainbow: repeating-linear-gradient(
    100deg,
    #60a5fa 10%,
    #e879f9 15%,
    #60a5fa 20%,
    #5eead4 25%,
    #60a5fa 30%
  );
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

.main-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: background-color 0.3s;
}
</style>
