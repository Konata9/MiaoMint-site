<script setup lang="ts">
import { useProvideCarousel } from './useCarousel'
import type { CarouselEmits, CarouselProps } from './interface'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
})

const emits = defineEmits<CarouselEmits>()

const { canScrollPrev, canScrollNext, carouselApi, carouselRef, scrollNext, scrollPrev } = useProvideCarousel(props, emits)

defineExpose({
  canScrollPrev,
  canScrollNext,
  carouselApi,
  carouselRef,
  scrollNext,
  scrollPrev,
})

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    scrollPrev()
  }
  else if (event.key === 'ArrowRight') {
    event.preventDefault()
    scrollNext()
  }
}
</script>

<template>
  <div
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown="onKeyDown"
  >
    <slot />
  </div>
</template>
