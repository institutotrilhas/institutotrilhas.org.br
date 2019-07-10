<template>
  <div>
    <div class="postcard" v-for="post in fields.posts" :key="post.id">
      <a :href="/#/ + 'blog/' + post.uid">
        <div class="postcard-img">
          <img :src="post.data.body[0].primary.imagem.url" alt />
        </div>
        <div class="postcard-texto">
          <h3>{{ post.data.titulo[0].text }}</h3>
          <p>{{ post.data.body[1].primary.texto[0].text }}</p>
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
        posts: null
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "blog_post"), {
          orderings: "[my.blog_post.data_do_post desc]"
        })
        .then(response => {
          this.fields.posts = response.results;
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
