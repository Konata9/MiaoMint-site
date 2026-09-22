<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTitle } from '@vueuse/core'
import Layout from '../Layout.vue'

const { t, tm } = useI18n()
useTitle(() => t('meta.title'))

const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

const storeUrl =
  'https://chromewebstore.google.com/detail/miaomint-smart-tab-manage/fhbglejcilmhdnmipnjhanffmbijjego?hl=en'
const reviewsUrl = `${storeUrl}&tab=reviews`

/* ---------- Hero ---------- */
const facts = computed(() => tm('hero.facts') as unknown as string[])
const card = computed(
  () =>
    tm('commandCard') as unknown as {
      file: string
      chip: string
      openLabel: string
      openCmd: string
      openDesc: string
      modesLabel: string
      modes: Array<{ cmd: string; label: string }>
      keysLabel: string
      keys: Array<{ key: string; label: string }>
      foot: string[]
    }
)

/* ---------- Sources strip ---------- */
const sources = computed(
  () =>
    tm('sources') as unknown as { label: string; items: string[] }
)

/* ---------- Tour carousel ---------- */
const tourCopy = computed(
  () => tm('tour') as unknown as { title: string; lede: string; slides: Array<{ title: string; desc: string }> }
)
const tourAssets: Array<{ image?: string; video?: string; poster?: string }> = [
  { image: '/images/search-tab.png' },
  { image: '/images/list-tab.png' },
  { image: '/images/list-bookmark.png' },
  { image: '/images/list-history.png' },
  { image: '/images/setting-page.png' },
  { video: '/video/miaomint-demo.mp4', poster: '/images/demo-poster.jpg' }
]
const tourSlides = computed(() =>
  tourAssets.map((asset, i) => ({
    ...asset,
    title: tourCopy.value.slides[i]?.title ?? '',
    desc: tourCopy.value.slides[i]?.desc ?? ''
  }))
)
const slideCount = computed(() => tourSlides.value.length)

const trackRef = ref<HTMLElement | null>(null)
const current = ref(0)
const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const scrollToSlide = (i: number) => {
  const track = trackRef.value
  if (!track) return
  const clamped = Math.max(0, Math.min(i, slideCount.value - 1))
  const slide = track.children[clamped] as HTMLElement | undefined
  if (!slide) return
  track.scrollTo({
    left: slide.offsetLeft - track.offsetLeft,
    behavior: reduceMotion ? 'auto' : 'smooth'
  })
}

const onTrackScroll = () => {
  const track = trackRef.value
  if (!track) return
  const children = Array.from(track.children) as HTMLElement[]
  let best = 0
  let bestDist = Infinity
  children.forEach((el, i) => {
    const d = Math.abs(el.offsetLeft - track.offsetLeft - track.scrollLeft)
    if (d < bestDist) {
      bestDist = d
      best = i
    }
  })
  current.value = best
}

const prev = () => scrollToSlide(current.value - 1)
const next = () => scrollToSlide(current.value + 1)

onMounted(() => {
  current.value = 0
})

/* ---------- Capabilities ---------- */
const features = computed(
  () =>
    tm('features') as unknown as {
      title: string
      lede: string
      columns: string[]
      items: Array<{ name: string; sub: string; desc: string; mode: string }>
    }
)

/* ---------- How (band) ---------- */
const how = computed(
  () =>
    tm('how') as unknown as {
      title: string
      lede: string
      steps: Array<{ idx: string; title: string; desc: string }>
      split: Array<{ label: string; title: string; desc: string }>
    }
)

/* ---------- Principles ---------- */
const principles = computed(
  () =>
    tm('principles') as unknown as {
      title: string
      items: Array<{ idx: string; title: string; desc: string }>
    }
)

/* ---------- Install ---------- */
const install = computed(
  () =>
    tm('install') as unknown as {
      title: string
      lede: string
      cards: Array<{
        label: string
        title: string
        list: string[]
        cmd: string
        cta?: string
      }>
      note: { label: string; text: string }
    }
)

/* ---------- FAQ ---------- */
const faq = computed(
  () =>
    tm('faq') as unknown as {
      title: string
      items: Array<{ q: string; a: string }>
    }
)
</script>

<template>
  <Layout>
    <!-- ============ Hero · split diptych ============ -->
    <section class="hero">
      <div class="container hero__grid">
        <div>
          <p class="hero__eyebrow mono-label">{{ t('hero.eyebrow') }}</p>
          <h1 class="hero__h1">{{ t('hero.title') }}</h1>
          <p class="hero__lede">{{ t('hero.lede') }}</p>
          <div class="hero__ctas">
            <a class="btn btn--primary btn--lg" :href="storeUrl" target="_blank" rel="noreferrer">
              {{ t('hero.cta_primary') }}
            </a>
            <a class="btn btn--ghost btn--lg" :href="reviewsUrl" target="_blank" rel="noreferrer">
              {{ t('hero.cta_secondary') }}
            </a>
          </div>
          <ul class="hero__facts">
            <li v-for="fact in facts" :key="fact">{{ fact }}</li>
          </ul>
        </div>

        <div class="code-card">
          <div class="code-card__bar">
            <span class="code-card__file">{{ card.file }}</span>
            <span class="chip chip--ok">{{ card.chip }}</span>
          </div>
          <div class="code-card__body">
            <div class="cmd-group">
              <p class="cmd-label"># {{ card.openLabel }}</p>
              <p class="cmd-row">
                <span class="tok-key">{{ card.openCmd }}</span>
                <span class="tok-punct">{{ card.openDesc }}</span>
              </p>
            </div>
            <div class="cmd-group">
              <p class="cmd-label"># {{ card.modesLabel }}</p>
              <p v-for="m in card.modes" :key="m.cmd" class="cmd-row">
                <span class="tok-key">{{ m.cmd }}</span>
                <span class="tok-punct">{{ m.label }}</span>
              </p>
            </div>
            <div class="cmd-group">
              <p class="cmd-label"># {{ card.keysLabel }}</p>
              <p v-for="k in card.keys" :key="k.key" class="cmd-row">
                <span class="tok-key">{{ k.key }}</span>
                <span class="tok-punct">{{ k.label }}</span>
              </p>
            </div>
          </div>
          <ul class="code-card__foot">
            <li v-for="item in card.foot" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ============ Sources strip ============ -->
    <section class="sources" aria-label="Search sources">
      <div class="container sources__inner">
        <p class="sources__label mono-label">{{ sources.label }}</p>
        <ul class="sources__list">
          <li v-for="item in sources.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <!-- ============ 01 · Tour · screenshot carousel ============ -->
    <section class="section" id="tour">
      <div class="container">
        <div class="sec-head">
          <div class="sec-head__body">
            <h2 class="sec-head__title">{{ tourCopy.title }}</h2>
            <p class="lede">{{ tourCopy.lede }}</p>
          </div>
        </div>

        <div class="carousel">
          <div class="carousel__viewport">
            <div
              ref="trackRef"
              class="carousel__track"
              tabindex="0"
              :aria-label="tourCopy.title"
              @scroll="onTrackScroll"
            >
              <figure v-for="(slide, i) in tourSlides" :key="i" class="carousel__slide">
                <figcaption class="carousel__cap">
                  <span class="carousel__idx">{{ String(i + 1).padStart(2, '0') }}</span>
                  <div>
                    <h3 class="carousel__title">{{ slide.title }}</h3>
                    <p class="carousel__desc">{{ slide.desc }}</p>
                  </div>
                </figcaption>
                <div class="carousel__frame">
                  <video
                    v-if="slide.video"
                    :src="withBase(slide.video)"
                    :poster="withBase(slide.poster as string)"
                    controls
                    muted
                    loop
                    playsinline
                    preload="none"
                  />
                  <img
                    v-else
                    :src="withBase(slide.image as string)"
                    :alt="slide.title"
                    :loading="i === 0 ? 'eager' : 'lazy'"
                  />
                </div>
              </figure>
            </div>

            <div class="carousel__arrows">
              <button
                class="carousel__btn"
                type="button"
                :disabled="current === 0"
                aria-label="Previous"
                @click="prev"
              >
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
                  <path d="M10 3 5 8l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button
                class="carousel__btn"
                type="button"
                :disabled="current === slideCount - 1"
                aria-label="Next"
                @click="next"
              >
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div class="carousel__pager">
            <div class="carousel__dots" role="group" aria-label="Choose a screenshot">
              <button
                v-for="(slide, i) in tourSlides"
                :key="i"
                class="carousel__dot"
                type="button"
                :aria-current="i === current"
                :aria-label="slide.title"
                @click="scrollToSlide(i)"
              ></button>
            </div>
            <p class="carousel__counter">
              <b>{{ current + 1 }}</b> / {{ slideCount }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 02 · Capabilities · spec sheet ============ -->
    <section class="section" id="features">
      <div class="container">
        <div class="sec-head">
          <div class="sec-head__body">
            <h2 class="sec-head__title">{{ features.title }}</h2>
            <p class="lede">{{ features.lede }}</p>
          </div>
        </div>

        <div class="spec">
          <div class="spec__head" aria-hidden="true">
            <span v-for="col in features.columns" :key="col">{{ col }}</span>
          </div>
          <article v-for="item in features.items" :key="item.name" class="spec__row">
            <h3 class="spec__name">
              {{ item.name }}
              <span class="spec__sub">{{ item.sub }}</span>
            </h3>
            <p class="spec__desc">{{ item.desc }}</p>
            <span class="spec__mode">{{ item.mode }}</span>
          </article>
        </div>
      </div>
    </section>

    <!-- ============ 03 · How · graphite band ============ -->
    <section class="section band" id="how">
      <div class="container">
        <div class="sec-head">
          <div class="sec-head__body">
            <h2 class="sec-head__title">{{ how.title }}</h2>
            <p class="lede">{{ how.lede }}</p>
          </div>
        </div>

        <div class="steps">
          <article v-for="step in how.steps" :key="step.idx" class="step">
            <p class="step__idx">{{ step.idx }}</p>
            <h3 class="step__title">{{ step.title }}</h3>
            <p class="step__desc">{{ step.desc }}</p>
          </article>
        </div>

        <div class="split">
          <div v-for="col in how.split" :key="col.label" class="split__col">
            <p class="split__label">{{ col.label }}</p>
            <h3 class="split__title">{{ col.title }}</h3>
            <p class="split__desc">{{ col.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 04 · Principles ============ -->
    <section class="section" id="principles">
      <div class="container">
        <div class="sec-head">
          <div class="sec-head__body">
            <h2 class="sec-head__title">{{ principles.title }}</h2>
          </div>
        </div>

        <div class="principles">
          <article v-for="item in principles.items" :key="item.idx" class="principle">
            <p class="principle__idx">{{ item.idx }}</p>
            <h3 class="principle__title">{{ item.title }}</h3>
            <p class="principle__desc">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ============ 05 · Install ============ -->
    <section class="section" id="install">
      <div class="container">
        <div class="sec-head">
          <div class="sec-head__body">
            <h2 class="sec-head__title">{{ install.title }}</h2>
            <p class="lede">{{ install.lede }}</p>
          </div>
        </div>

        <div class="install">
          <div v-for="(item, i) in install.cards" :key="item.title" class="os">
            <p class="os__label">{{ item.label }}</p>
            <h3 class="os__title">{{ item.title }}</h3>
            <ul class="os__list">
              <li v-for="line in item.list" :key="line">{{ line }}</li>
            </ul>
            <span class="os__cmd">{{ item.cmd }}</span>
            <div v-if="i === 0" class="os__actions">
              <a class="btn btn--primary" :href="storeUrl" target="_blank" rel="noreferrer">
                {{ item.cta }}
              </a>
            </div>
          </div>
        </div>

        <div class="note">
          <span class="note__label">{{ install.note.label }}</span>
          {{ install.note.text }}
        </div>
      </div>
    </section>

    <!-- ============ 06 · FAQ ============ -->
    <section class="section" id="faq">
      <div class="container">
        <div class="sec-head">
          <div class="sec-head__body">
            <h2 class="sec-head__title">{{ faq.title }}</h2>
          </div>
        </div>

        <div class="faq">
          <details v-for="(item, i) in faq.items" :key="item.q" class="faq__item">
            <summary class="faq__q">
              <span class="faq__idx">Q{{ i + 1 }}</span>
              {{ item.q }}
            </summary>
            <p class="faq__a">{{ item.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- ============ Final CTA ============ -->
    <section class="section">
      <div class="container cta">
        <div>
          <h2 class="cta__title">{{ t('cta.title') }}</h2>
          <p class="cta__lede">{{ t('cta.lede') }}</p>
        </div>
        <div class="cta__actions">
          <a class="btn btn--primary btn--lg" :href="storeUrl" target="_blank" rel="noreferrer">
            {{ t('cta.primary') }}
          </a>
          <a class="btn btn--ghost btn--lg" :href="reviewsUrl" target="_blank" rel="noreferrer">
            {{ t('cta.secondary') }}
          </a>
        </div>
      </div>
    </section>
  </Layout>
</template>
