<template lang="pug">

i.material-icons-round back_arrow
.cards
  .card(v-for="card in cards" @click="this.$router.push({ name: card.type, params: { slug: card.slug } })")
    .ilustration
      img(:src="card.src" :alt="`ilustration of ${card.name}`")

    .information
      .field
        label Nombre común
        p {{card.name}}

</template>

<script>
export default {
  name: 'CardSelector',
  props: {
    cards: {
      default: [
        {
          name: 'producto 1',
          slug: 'variedad',
          type: 'crops',
          src: 'https://plantasyflores.pro/wp-content/uploads/2019/12/Variedades-1.jpg'
        },
        {
          name: 'producto 2',
          slug: 'plantula',
          type: 'controls',
          src: 'https://plantasyflores.pro/wp-content/uploads/2019/12/Plantulas.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.cards {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.card {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 8px;
  max-width: 450px;
  width: 100%;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  transition: .6s;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }

  @media(max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
}

.ilustration {
  display: flex;
  width: 58%;
  border-radius: 6px;
  overflow: hidden;

  img {
    width: 100%;
  }

  @media(max-width: 450px) {
    width: 95%;
  }
}

.information {
  display: flex;
  width: 40%;

  label {
    color: #307470;
    font-weight: bold;
  }

  p {
    margin: 0;
  }

  @media(max-width: 450px) {
    width: 95%;
  }
}
</style>
