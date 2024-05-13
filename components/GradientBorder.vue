<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const className = cn(
  'sui-gradient-border',
  'w-full rounded-lg relative backdrop-blur-md',
  'before:absolute before:left-0 before:top-0 before:h-full before:w-full before:z-[-1] before:p-0.5 before:rounded-lg',
  '!before:[background-size:400%_auto] !before:[background-position:0_0] before:content-[""]',
  '!hover:before:opacity-100 !hover:before:[background-position:-50%_0]'
)
</script>

<style scoped>
.sui-gradient-border {
  --sui-gb-bg-color-light: #e2e2e2;
  --sui-gb-bg-color-dark: #303030;
  --sui-gb-from-color: #00dc82;
  --sui-gb-via-color: #36e4da;
  --sui-gb-to-color: #0047e1;
}

@media (prefers-color-scheme: light) {
  .sui-gradient-border {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .sui-gradient-border::before {
    background: linear-gradient(
      90deg,
      var(--sui-gb-bg-color-light) 0%,
      var(--sui-gb-bg-color-light) 25%,
      var(--sui-gb-from-color) 50%,
      var(--sui-gb-via-color) 75%,
      var(--sui-gb-to-color) 100%
    );
  }
}
@media (prefers-color-scheme: dark) {
  .sui-gradient-border {
    background-color: rgba(20, 20, 20, 0.3);
  }
  .sui-gradient-border::before {
    background: linear-gradient(
      90deg,
      var(--sui-gb-bg-color-dark) 0%,
      var(--sui-gb-bg-color-dark) 25%,
      var(--sui-gb-from-color) 50%,
      var(--sui-gb-via-color) 75%,
      var(--sui-gb-to-color) 100%
    );
  }
}

.sui-gradient-border::before {
  transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
