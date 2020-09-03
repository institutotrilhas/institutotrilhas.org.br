<template>
  <div id="app">
    <div id="hero">
      <img src="./assets/logovert.svg" alt />
    </div>
    <div id="nav">
      <router-link to="/">
        <img src="./assets/logo_instituto.svg" class="logoit" alt />
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
      <h3>contato</h3>
      <div class="info">
        <p>
          <strong>contato@institutotrilhas.org.br</strong>
        </p>
        <div class="social">
          <a href="https://www.facebook.com/itrilhas">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/instituto.trilhas/">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="inscricao">
          <p>receba nossas novidades!</p>
          <form name="contato" action="POST" data-netlify="true">
            <input type="email" name="email" placeholder="digite aqui seu email" />
            <button type="submit">enviar</button>
          </form>
        </div>
      </div>
      <p class="legenda">Todos os direitos reservados © Instituto Trilhas, 2020.</p>
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
      window.scroll(0, 3300);
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
  @media (max-width: 640px) {
    width: 100vw;
  }
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
    @media (max-width: 640px) {
      height: unset;
      align-items: center;
    }
  }
  @media (max-width: 640px) {
    height: auto;
    display: grid;
    justify-content: center;
    padding: 0;
    .logoit {
      width: 80vw;
      margin: 2.5vh 0;
      align-self: center;
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
  @media (max-width: 640px) {
    margin: 0 -10vw;
    padding: 5vh 5vw;
    float: unset;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
#footer {
  background-color: #535e69;
  margin: 40px 0 0 0;
  height: 100%;
  padding: 10px 10px 10px 80px;
  h3 {
    font-family: "Antic", serif;
    font-weight: 400;
    font-size: 2em;
    color: #b4cf8b;
    margin-bottom: 1vh;
  }
  i {
    color: #b4cf8b;
  }
  p {
    margin-bottom: 5vh;
    color: #fff;
  }
  .legenda {
    margin-bottom: 0;
    color: #aaa;
    font-size: 12px;
  }
  .info {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 1.2em;
    i {
      font-size: 1.6em;
      margin: 0 1.5vh;
    }
    @media (max-width: 640px) {
      display: block;
    }
  }
  position: sticky;
  top: 100vh;
  .inscricao {
    p {
      margin: 0 0;
      font-weight: 400;
      color: #b4cf8b;
    }
    form {
      margin: 0;
      button {
        padding: 5px 10px;
        margin-top: 0.5em;
        margin-right: 6vw;
        float: right;
        border-radius: 15px;
        border: 1px solid #aaa;
        background-color: unset;
        box-shadow: none;
        font-family: "Antic", serif;
        font-weight: 800;
        color: #aaa;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        &:hover {
          border-color: #b4cf8b;
          color: #b4cf8b;
        }
      }
      input {
        padding: 5px 0;
        width: 50%;
        border: none;
        border-bottom: 1px solid #aaa;
        margin: 0;
        background-color: unset;
        font-family: "PT Sans", sans-serif;
        color: #f2eee8;
        font-size: 0.8em;
        &::placeholder {
          font-family: "PT Sans", sans-serif;
          color: #aaa;
        }
        &:focus {
          border: none;
          border-bottom: 1px solid #b4cf8b;
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 5vh 5vw;
    .inscricao {
      margin: 5vh 0;
    }
  }
}
img {
  width: 300px;
}
</style>
