<template>
  <div>
    <div class="postcard" v-for="evento in fields.eventos" :key="evento.id">
      <a :href="/#/ + 'eventos/' + evento.uid">
        <div class="postcard-img">
          <img :src="evento.data.imagem_do_evento.url" alt />
        </div>
        <div class="postcard-texto">
          <h3>{{ evento.data.titulo[0].text }}</h3>
          <p>{{ evento.data.texto[0].text }}</p>
        </div>
      </a>
    </div>
    <!-- <ul>
      <li v-for="(post, i) in fields.posts" :key="i">
        <a :href="/#/ + 'blog/' + post.uid">{{ post.data.titulo[0].text }}</a>
      </li>
    </ul>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        eventos: null
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "evento"), {
          orderings: "[my.evento.date desc]"
        })
        .then(response => {
          console.log(response);
          this.fields.eventos = response.results;
        });
    }
  },
  created() {
    this.getContent();
  }
};
</script>

<style lang="scss" scoped>
.postcard {
  margin: 48px 0;
  width: 640px;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
  a {
    text-decoration: none;
    color: unset;
  }
  .postcard-texto {
    padding: 20px;
    h3 {
      font-family: "Antic", sans-serif;
    }
  }
  .postcard-img {
    width: 100%;
    max-height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-items: center;
    img {
      width: 100%;
    }
  }
  &:hover {
    box-shadow: 0 0 0.5em #6d8d3c;
  }
}
</style>
