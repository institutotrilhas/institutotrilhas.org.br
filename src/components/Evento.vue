<template>
  <div :key="this.$route.params.uid">
    <br />
    <h2>{{ fields.titulo }}</h2>
    <small>{{ fields.date }}</small>
    <br />
    <img :src="fields.imagem.url" />
    <div v-for="(p, index) in fields.texto" :key="index">
      <p>{{ p.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        titulo: null,
        date: null,
        imagem: null,
        texto: null
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .getByUID("evento", this.$route.params.uid)
        .then(document => {
          console.log(document);
          this.fields.titulo = document.data.titulo[0].text;
          this.fields.date = new Date(document.data.date).toLocaleString(
            "pt-BR",
            {
              weekday: "long",
              day: "numeric",
              month: "short",
              year: "numeric"
            }
          );
          this.fields.texto = document.data.texto;
          this.fields.imagem = document.data.imagem;
        });
    }
  },
  created() {
    this.getContent();
  },
  beforeUpdate() {
    this.getContent();
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 30vw;
}
</style>
