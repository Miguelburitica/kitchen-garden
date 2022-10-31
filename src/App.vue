<template lang="pug">
nav
  router-link(:to="{ path:'/' }") #[h2 HC]
  .nav-options
    router-link(:to="{ path:'/' }") Inicio
    router-link(:to="{ name: 'cultivos', params: { slug: '' } }") Cultivos
    router-link(:to="{ name: 'fertilizantes', params: { slug: '' } }") Fertilizantes
    router-link(:to="{ name: 'control-manejo', params: { slug: '' } }") Manejo y control

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
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #8992db;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
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

nav {
  background-color: #9ae17b;

  width: 100%;
  height: 70px;

  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-options {
  display: flex;
  gap: 14px;
}

</style>
