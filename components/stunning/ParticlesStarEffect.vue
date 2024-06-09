<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import {
  tsParticles,
  type Container,
  type ISourceOptions
} from '@tsparticles/engine'
import { loadStarsPreset } from '@tsparticles/preset-stars'
import { loadStarShape } from '@tsparticles/shape-star'
import { onMounted, onUnmounted } from 'vue'

let container: Container | undefined = undefined

const props = defineProps({
  id: {
    type: String,
    default: () => `sparkles-${Math.round(Math.random() * 9999)}`
  },
  size: {
    type: Number,
    default: 1.5
  },
  minSize: {
    type: Number,
    default: 0.4
  },
  density: {
    type: Number,
    default: 800
  },
  speed: {
    type: Number,
    default: 1
  },
  minSpeed: {
    type: Number,
    required: false
  },
  minOpacity: {
    type: Number,
    default: 1
  },
  opacity: {
    type: Number,
    default: 1
  },
  opacitySpeed: {
    type: Number,
    default: 3
  },
  color: {
    type: String,
    default: '#FFFFFF'
  },
  background: {
    type: String,
    default: 'transparent'
  },
  options: {
    type: Object,
    required: false
  }
})

const defaultOptions: ISourceOptions = {
  background: {
    color: {
      value: props.background
    }
  },
  fullScreen: {
    enable: false,
    zIndex: 1
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: props.color
    },
    move: {
      enable: true,
      direction: 'none',
      speed: {
        min: props.minSpeed || props.speed / 10,
        max: props.speed
      },
      straight: false
    },
    number: {
      value: props.density
    },
    opacity: {
      value: {
        min: props.minOpacity || props.opacity / 10,
        max: props.opacity
      },
      animation: {
        enable: true,
        sync: false,
        speed: props.opacitySpeed
      }
    },
    size: {
      value: {
        min: props.minSize || props.size / 2.5,
        max: props.size
      }
    },
    shape: {
      type: 'star'
    }
  },
  detectRetina: true,
  preset: 'stars'
}

const loadParticles = async () => {
  //
}

onMounted(async () => {
  await loadStarsPreset(tsParticles)
  await loadStarShape(tsParticles)

  container = await tsParticles.load({
    id: props.id,
    options: props.options || defaultOptions
  })
})

onUnmounted(() => {
  if (!container) {
    return
  }

  container.destroy()
})
</script>
