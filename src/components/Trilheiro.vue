<template>
  <div class="card" :key="index">
    <img :src="fields.img" alt />
    <h3>{{ fields.nome }}</h3>
    <p :class="{ short: expandir }">{{ fields.descricao }}</p>
    <button @click="toggle">{{ expandir ? "mais" : "menos" }}</button>
  </div>
</template>

<style scoped style lang="scss">
.card {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-areas:
    "perfil nome nome"
    "perfil descr descr"
    "perfil btn .";
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-bottom: 50px;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "perfil"
      "nome"
      "descr"
      "btn";
    justify-items: center;
  }
}
img {
  width: 100px;
  border-radius: 50px;
  grid-area: perfil;
}
h3 {
  font-family: "Antic", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #b4cf8b;
  margin-top: 0;
  margin-bottom: 0;
  grid-area: nome;
}
p {
  margin-top: 0;
  grid-area: descr;
  @media (max-width: 640px) {
    text-align: center;
  }
}
button {
  font-family: "PT Sans", sans-serif;
  color: #535e69;
  padding: 5px;
  width: 30%;
  grid-area: btn;
  border-radius: 20px;
  background-color: unset;
  border: 2px solid #aaa;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover {
  color: #6d8d3c;
  border: 2px solid #6d8d3c;
}
.short {
  height: 2.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: block-axis;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
</style>

<script>
export default {
  name: "Trilheiro",
  props: {
    index: null
  },
  data() {
    return {
      expandir: true,
      fields: {
        nome: null,
        img: null,
        descricao: null
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "trilheiro"), {
          orderings: "[document.first_publication_date]"
        })
        .then(response => {
          var docs = response.results;
          this.fields.nome = docs[this.index].data.nome[0].text;
          this.fields.img = docs[this.index].data.perfil.url;
          this.fields.descricao = docs[this.index].data.descricao[0].text;
        });
    },
    toggle() {
      this.expandir ? (this.expandir = false) : (this.expandir = true);
    }
  },
  created() {
    this.getContent();
  }
};
</script>

