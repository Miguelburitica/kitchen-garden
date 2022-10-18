<template lang="pug">

body.principal
  .container(v-if="sectionData")
    section.description
      p {{ sectionData.description }}

    section.information
      .ilustration
        img(:src="sectionData.banner" alt="banner section")

      .data-sheet
        h3 {{ name }}
        h4 {{ techName }}
        label Tiempo para cosecha
        p {{ growTime }}

</template>

<script>
export default {
  props: {
    type: {
      default: null
    }
  },
  data () {
    return {
      sectionData: {},
      name: 'Habichuela',
      techName: 'Phaseolus vulgaris',
      growTime: '2 meses'
    }
  },
  mounted () {
    this.sectionData.banner = 'https://plantasyflores.pro/wp-content/uploads/2019/12/planta-1.jpg'
    this.sectionData.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Nam at lectus urna duis. Nibh praesent tristique magna sit. Massa tincidunt dui ut ornare lectus. Congue quisque egestas diam in. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Nisl nisi scelerisque eu ultrices vitae auctor eu. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Tortor dignissim convallis aenean et tortor at risus. Tortor at risus viverra adipiscing at in tellus integer feugiat. Nunc scelerisque viverra mauris in aliquam sem fringilla. In nibh mauris cursus mattis. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Mi tempus imperdiet nulla malesuada pellentesque elit eget. A cras semper auctor neque. Sed viverra tellus in hac habitasse.'
  }
}
</script>

<style lang="less" scoped>
.component {
  display: flex;
  flex-direction: column;
}
</style>
