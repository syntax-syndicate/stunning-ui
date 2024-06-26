<template>
  <div
    class="sui-tyndall-effect relative flex gap-10 min-h-screen overflow-hidden h-auto w-full justify-start items-center"
  >
    <div
      class="streak"
      v-motion
      :initial="{ opacity: 0, rotate: '38deg', scale: 0.5 }"
      :enter="{ opacity: 0.8, rotate: '38deg', scale: 1 }"
      :duration="2000"
    />
    <div
      class="streak"
      v-motion
      :initial="{ opacity: 0, rotate: '30deg', scale: 0.5 }"
      :enter="{ opacity: 1, rotate: '30deg', scale: 1 }"
      :duration="2000"
    />
    <div
      class="streak"
      v-motion
      :initial="{ opacity: 0, rotate: '22deg', scale: 0.5 }"
      :enter="{ opacity: 1, rotate: '22deg', scale: 1 }"
      :duration="2000"
    />
    <div class="overlay"></div>
    <div class="particles-effect" v-if="$slots.particles">
      <slot name="particles" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.sui-tyndall-effect {
  --sui-tyndall-effect-bg-first-color: #00b7fa;
  --sui-tyndall-effect-bg-second-color: rgb(0, 40, 128);
  --sui-tyndall-effect-bg-third-color: rgba(0, 53, 97, 0.71);
  --sui-tyndall-effect-bg-fourth-color: rgb(0, 0, 0);
  --sui-tyndall-effect-streak-color: #00e1ff;
  background: radial-gradient(
    102% 64% at 1% 48%,
    var(--sui-tyndall-effect-bg-first-color) 0%,
    var(--sui-tyndall-effect-bg-second-color) 54%,
    var(--sui-tyndall-effect-bg-third-color) 72%,
    var(--sui-tyndall-effect-bg-fourth-color) 100%
  );
}

.sui-tyndall-effect .overlay {
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.32) 43%,
    rgba(0, 0, 0, 0.13) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  flex: none;
  height: 226px;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 11;
}

.sui-tyndall-effect .streak {
  background: linear-gradient(
    90deg,
    var(--sui-tyndall-effect-streak-color) 16%,
    rgba(255, 255, 255, 0) 100%
  );
  flex: none;

  mask: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.5) 64%,
    rgba(0, 0, 0, 0) 100%
  );
  mix-blend-mode: overlay;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  width: 141%;
}

.sui-tyndall-effect .streak:nth-child(1) {
  height: 228px;
  left: -16vw;
  top: 21vw;
  opacity: 0.8;
  width: 150%;
}
.sui-tyndall-effect .streak:nth-child(2) {
  height: 100px;
  left: -12vw;
  top: 17vw;
  width: 150%;
}
.sui-tyndall-effect .streak:nth-child(3) {
  height: 200px;
  left: -10vw;
  top: 10vw;
  width: 150%;
}

.sui-tyndall-effect .particles-effect {
  flex: none;
  height: 100vh;
  left: 0;
  mask: linear-gradient(
    225deg,
    rgba(0, 0, 0, 0) 30%,
    rgb(0, 0, 0) 36%,
    rgb(0, 0, 0) 63%,
    rgba(0, 0, 0, 0) 76%
  );
  position: absolute;
  right: 0;
  top: 0;
}
</style>
