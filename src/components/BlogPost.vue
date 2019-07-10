<template>
  <div :key="this.$route.params.uid">
    <br />
    <h2>{{ fields.titulo }}</h2>
    <small>{{ fields.date }}</small>
    <div v-for="(slice, index) in fields.slices" :key="index">
      <div v-if="slice.slice_type === 'texto'">
        <div v-for="(p, index) in slice.primary.texto" :key="'p-' + index">
          <p>{{ p.text }}</p>
        </div>
      </div>
      <div v-else>
        <img :src="slice.primary.imagem.url" />
      </div>
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
        slices: null
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .getByUID("blog_post", this.$route.params.uid)
        .then(document => {
          this.fields.titulo = document.data.titulo[0].text;
          this.fields.date = new Date(
            document.data.data_do_post
          ).toLocaleString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric"
          });
          this.fields.slices = document.data.body;
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
