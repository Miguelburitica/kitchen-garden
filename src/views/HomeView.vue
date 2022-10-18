<template lang="pug">

body.principal
  .container
    section
      h1 Huerta organica autosuficiente
      p.description Esta huerta ubicada en la ciudad de villavicencio, en el sector Kirpas, ha sido llevada a cabo con la intención de acercar a la comunidad con la posibilidad de sembrar sus propios productos de consumo domestico.

    section
      h2 Los cultivos
      p.description Dentro de esta sección encontrarán todos aquellos cultivos que han sido desarrollado por el equipo de aprendices con el fin de demostrar que es posible sembrar más que carne en nuestra región.
      card-selector

    section
      h2 Los Fertilizantes
      p.description Aquí debajo están presentadas todas las variedades de aditivos libres de quimicos industriales que se encargan de alimentar y fortalecer nuestro cultivo, en su mayoría procesados por los aprendices.
      card-selector

    section
      h2 Manejo y control
      p.description Desde esta sección veremos todo el control fitosanitario y de malezas que se le ha dado a los diferentes cultivos, para poder tener unos sanos y fuertes ejemplares.
      card-selector

</template>

<script>

import CardSelector from '@/components/CardSelector.vue'

export default {
  name: 'HomeView',
  components: { CardSelector },
  data () {
    return {
      cropCards: null,
      fertilizerCards: null,
      controlCards: null
    }
  }
}
</script>

<style lang="less" scoped>

</style>
