<template lang="pug">

body.principal
  .container(v-if="!isDetails")
    h1 {{ sectionData.title }}
    .banner
      img(:src="sectionData.banner" alt="banner section")
    section.description
      p {{ sectionData.description }}

    section.information
      .ilustration

      .data-sheet
        h3 {{ name }}
        h4 {{ techName }}
        label Tiempo para cosecha

  .container(v-else)

</template>

<script>

import items from '@/data/items.json'
import sectionDataJSON from '@/data/sectionDescriptions.json'

export default {
  name: 'GeneralSection',
  data () {
    return {
      sectionData: {},
      isDetails: false,
      name: '',
      techName: '',
      titleSections: {
        cultivos: 'Cultivos',
        fertilizantes: 'Fertilizantes',
        'manejo-control': 'Manejo y control'
      },
      currentItem: {}
    }
  },
  mounted () {
    this.currentItem = items.find(item => item.slug === this.$route.params.slug)
    this.sectionData = sectionDataJSON.find(section => section.view === this.$route.name)
  },
  updated () {
    if (this.sectionData.view !== this.$route.name) this.loadData()
  },
  methods: {
    loadData () {
      this.sectionData = sectionDataJSON.find(section => section.view === this.$route.name)
    }
  }
}
</script>

<style lang="less" scoped>
.component {
  display: flex;
  flex-direction: column;
}

.banner {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;

  img {
    width: 100%;
  }
}
</style>
