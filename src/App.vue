<template lang="pug">
nav.nav-bar
  .container
    router-link(:to="{ path:'/' }") #[h2 HC]
    .nav-options
      router-link(:to="{ path:'/' }") Inicio
      router-link(:to="{ name: 'crops', params: { slug: '' } }") Cultivos
      router-link(:to="{ name: 'fertilizers', params: { slug: '' } }") Fertilizantes
      router-link(:to="{ name: 'controls', params: { slug: '' } }") Manejo y control

router-view

</template>

<script>
export default {
  data () {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #42476d;
}

a {
  color: #42476d;
  font-weight: bold;
  text-decoration: none;
  transition: .3s;

  &:hover {
    color: #1c1e2e;
  }

}

.principal {
  margin: 70px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 1100px;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #6bba62;

  width: 100%;
  height: 70px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    max-width: 1100px;
    width: 90%;
  }
}

.nav-options {
  display: flex;
  gap: 14px;
}

</style>
