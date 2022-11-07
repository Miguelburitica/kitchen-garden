<template lang="pug">

main
  article(v-if="!isDetails")
    .article-section
      img(:src="sectionData.banner" alt="banner section")

    .article-section.description
      p {{ sectionData.description }}

    .article-section.recommendations
      swiper(
        :key="swiperOptions.slidesPerView"
        :slides-per-view="swiperOptions.slidesPerView"
        :space-between="swiperOptions.spaceBetween"
      )
        swiper-slide(
          v-for="item in itemsList"
        )
          option.suggest-item(@click="$router.push({ params: { slug: item.slug } })")
            h3 {{item.name}}
            img(:src="item.img" alt="ilustration of item")

    .article-section.navigation
      h1 {{ sectionData.title }}
      h3 {{ name }}
      h4 {{ techName }}
      label Tiempo para cosecha

  article(v-else v-for="item in itemsList" :class="{ active: $route.params.slug === item.slug, inactive: $route.params.slug !== item.slug }")
    .article-section
      img(:src="item.img" alt="ilustration of item")

    .article-section.description
      p {{ item.description }}

    .article-section.information
      h1 {{ item.name }}
      h3 {{ item.type }}
      h4 {{ item.scientificName }}

    .article-section.navigation
      .clickeable.nav-tool(@click="go('-', item.slug)")
        i.material-icons-round arrow_back

      .clickeable.nav-tool(@click="go('+', item.slug)")
        i.material-icons-round arrow_forward

</template>

<script>

import items from '@/data/items.json'
import sectionDataJSON from '@/data/sectionDescriptions.json'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  name: 'GeneralSection',
  data () {
    return {
      sectionData: {},
      name: '',
      techName: '',
      swiperOptions: {},
      titleSections: {
        cultivos: 'Cultivos',
        fertilizantes: 'Fertilizantes',
        'manejo-control': 'Manejo y control'
      },
      itemsList: []
    }
  },
  computed: {
    isDetails () {
      return !!this.$route.params.slug
    }
  },
  mounted () {
    this.itemsList = items.filter(item => item.type === this.$route.name)
    this.currentItem = items.find(item => item.slug === this.$route.params.slug)
    this.sectionData = sectionDataJSON.find(section => section.view === this.$route.name)
    this.swiperOptions = {
      slidesPerView: 1.2,
      spaceBetween: 20
    }

    // set SlidesPerView
    if (window.innerWidth > 1140) {
      this.swiperOptions.slidesPerView = 3
    } else if (window.innerWidth > 768) {
      this.swiperOptions.slidesPerView = 2
    } else {
      this.swiperOptions.slidesPerView = 1.2
    }
  },
  updated () {
    if (this.sectionData.view !== this.$route.name) this.loadData()
  },
  methods: {
    loadData () {
      this.itemsList = items.filter(item => item.type === this.$route.name)
      this.currentItem = items.find(item => item.slug === this.$route.params.slug)
      this.sectionData = sectionDataJSON.find(section => section.view === this.$route.name)
    },
    go (action, slug) {
      const item = this.itemsList.find(item => item.slug === slug)
      const currentIndex = this.itemsList.indexOf(item)

      if (action === '-') {
        const nextSlug = this.itemsList[currentIndex > 0 ? currentIndex - 1 : this.itemsList.length - 1].slug
        this.$router.replace({ name: this.$route.name, params: { slug: nextSlug } })
      }

      if (action === '+') {
        const nextSlug = this.itemsList[currentIndex < this.itemsList.length - 1 ? currentIndex + 1 : 0].slug
        this.$router.replace({ name: this.$route.name, params: { slug: nextSlug } })
      }
    }
  }
}
</script>

<style lang="less">
.swiper-wrapper {
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
}

// Carousel css config
.swiper-container {
  overflow-y: clip !important;
  width: 100%;
}

</style>

<style lang="less" scoped>

.clickeable {
  cursor: pointer;
}

.nav-tool {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  height: 100%;

  &:hover {
    background-color: #8992db12;
  }
}

main {
  flex-grow: 1;
  position: relative;
  min-height: calc(100vh - 70px);

  article {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 1fr;

    position: absolute;
    left: 0;
    top: 0;

    .swiper-wrapper {
      display: flex;
      box-sizing: content-box;
    }

    &.active {
      transition: .2s ease-in-out ;
    }

    &.inactive {
      transform: translateX(-100%);
    }

    .article-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      img {
        margin: 0 auto;
        max-width: 100%;
        max-height: 100%;
      }

      &.description, &.navigation {
        border-left: 1px solid #8992db;
      }

      &.information, &.navigation, &.recommendations{
        border-top: 1px solid #8992db;
      }

      &.recommendations {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 8px;
        overflow: hidden;

        .suggest-item {
          display: flex;
          flex-direction: column;
          padding: 4px 6px;
          background-color: #8992db11;
          transition: .3s ease all;
          border-radius: 8px;
          width: 200px;

          &:hover {
            background-color: #8992db40;
          }

          h3 {
            margin: 0 0 0.75rem;
          }

          img {
            width: max(14vw, 160px);
            aspect-ratio: 1.8/1;
            border-radius: 8px;
            object-fit: cover;
          }
        }
      }

      &.navigation {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        height: 100%;

        i {
          font-size: 70px;
        }
      }
    }
  }
}

</style>
