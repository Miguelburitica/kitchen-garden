<template lang="pug">

main
  article(v-if="!isDetails")
    .article-section
      img(:src="sectionData.banner" alt="banner section")

    .article-section.description
      p {{ sectionData.description }}

    .article-section.information
      h1 {{ sectionData.title }}
      h3 {{ name }}
      h4 {{ techName }}
      label Tiempo para cosecha

    .article-section.navigation

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
      .clickeable(@click="go('-', item.slug)")
        i.material-icons-round arrow_back

      .clickeable(@click="go('+', item.slug)")
        i.material-icons-round arrow_forward

</template>

<script>

import items from '@/data/items.json'
import sectionDataJSON from '@/data/sectionDescriptions.json'

export default {
  name: 'GeneralSection',
  data () {
    return {
      sectionData: {},
      name: '',
      techName: '',
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
  },
  updated () {
    if (this.sectionData.view !== this.$route.name) this.loadData()
  },
  methods: {
    loadData () {
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

<style lang="less" scoped>

.clickeable {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;

  &:hover {
    background-color: #8992db12;
  }
}

main {
  flex-grow: 1;
  position: relative;

  article {
    display: grid;
    height: 100%;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 1fr;

    position: absolute;
    left: 0;
    top: 0;

    &.active {
      transition: .2s ease-in-out ;
    }

    &.inactive {
      transform: translateX(-100%);
    }

    .article-section {
      height: 100%;
      img {
        width: 100%;
      }

      &.description, &.navigation {
        border-left: 1px solid #8992db;
      }

      &.information, &.navigation {
        border-top: 1px solid #8992db;
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
