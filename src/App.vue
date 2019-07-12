<template>
  <div id="app">
    <div id="hero">
      <img src="./assets/logovert.svg" alt />
    </div>
    <div id="nav">
      <router-link to="/">
        <img src="./assets/logo_instituto.svg" alt />
      </router-link>
      <div class="menu">
        <!-- <router-link to="/">
          <span @click="rolar">atividades</span>
        </router-link>-->
        <router-link to="/">
          <span @click="rolarEquipe">equipe</span>
        </router-link>
        <router-link to="/eventos">eventos</router-link>
        <router-link to="/blog">blog</router-link>
      </div>
    </div>
    <router-view />
    <div id="footer">
      <p>Todos os direitos reservados © Instituto Trilhas, 2019.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    rolar() {
      window.scroll(0, 1632);
    },
    rolarEquipe() {
      window.scroll(0, 2000);
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i");
@import url("https://fonts.googleapis.com/css?family=Antic|Antic+Didone|Antic+Slab");

body {
  margin: 0;
  background-color: #f2eee8;
}

#app {
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #535e69;
}
#hero {
  min-height: 100vh;
  background-image: url("assets/bg_trilhas_c.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: grid;
  align-content: center;
  justify-content: center;
}
#nav {
  position: sticky;
  top: 0;
  background-color: #6d8d3c;
  padding: 24px 16px 16px 36px;
  height: 100px;
  text-align: left;
  a {
    height: 100px;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s ease;
    &.router-link-exact-active &:active {
      color: #2c3e50;
    }
    &:hover {
      color: #2c3e50;
    }
  }
}
.menu {
  margin-top: 45px;
  margin-right: 100px;
  float: right;
  a {
    margin: 0 20px;
  }
}
#footer {
  background-color: #535e69;
  margin: 40px 0 0 0;
  height: 100%;
  padding: 10px 10px 10px 80px;
  p {
    color: #aaa;
    font-size: 12px;
  }
  position: sticky;
  top: 100vh;
}
</style>

<style scoped>
img {
  width: 300px;
}
</style>
