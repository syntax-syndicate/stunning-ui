<template>
  <section :class="className">
    <div class="fake-card"></div>
    <div class="card">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

const className = cn('sui-animated-gradient-border')
</script>

<style scoped>
@property --angle {
  inherits: true;
  initial-value: 0deg;
  syntax: '<angle>';
}

.sui-animated-gradient-border {
  --bg: hsl(0 0% 0%);
  --angle: 0;
  --sui-gb-bg-color-light: #e2e2e2;
  --sui-gb-bg-color-dark: #303030;
  --sui-gb-from-color: #00dc82;
  --sui-gb-via1-color: #bb36e4;
  --sui-gb-via2-color: #dae10b;
  --sui-gb-to-color: #0047e1;
  animation: rotate-gradient calc(var(--border-speed, 2) * 1s) infinite linear;
  animation-play-state: paused;
}

.sui-animated-gradient-border {
  --gradient: hsla(0, 0%, 98%, 0.1);
}

.sui-animated-gradient-border:hover {
  animation-play-state: running;
  --gradient: conic-gradient(
    from calc(180deg + var(--angle)) at 50% 70%,
    hsla(0, 0%, 98%, 1) 0deg,
    var(--sui-gb-from-color) 72.0000010728836deg,
    var(--sui-gb-via1-color) 144.0000021457672deg,
    var(--sui-gb-via2-color) 216.00000858306885deg,
    var(--sui-gb-to-color) 288.0000042915344deg,
    hsla(0, 0%, 98%, 1) 1turn
  );
}

.card:last-of-type:hover {
  --alpha: 0;
}

.fake-card {
  position: absolute;
  z-index: -1;
  inset: 0;
  background: var(--gradient) border-box;
}

.card {
  color: hsl(0 0% 92%);
  background: linear-gradient(var(--bg), var(--bg)) padding-box,
    var(--gradient) border-box;
  border: calc(var(--border-width, 2) * 1px) solid transparent;
  border-radius: calc(var(--border-radius, 8) * 1px);
  position: relative;
  transform: translate3d(0, 0, 0);
  transition: background 0.2s;
  z-index: 2;
}

.card::before {
  content: '';
  position: absolute;
  inset: calc(var(--border-width) * -1px);
  border-radius: calc(var(--border-radius) * 1px);
  background: hsl(0 0% 0%);
  opacity: var(--alpha, 0.5);
  transition: opacity 0.2s;
}

@keyframes rotate-gradient {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}
</style>
