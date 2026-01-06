import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import type { HTMLAttributes } from 'vue'

export type CarouselApi = EmblaCarouselType

export interface CarouselProps {
  opts?: EmblaOptionsType
  plugins?: EmblaPluginType[]
  orientation?: 'horizontal' | 'vertical'
  class?: HTMLAttributes['class']
}

export interface CarouselEmits {
  (e: 'init-api', payload: CarouselApi): void
}

export interface WithClassAsProps {
  class?: HTMLAttributes['class']
}
