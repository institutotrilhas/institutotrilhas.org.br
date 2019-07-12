<template>
  <div class="blog">
    <h1>eventos</h1>
    <small v-if="home">
      <a href="/#/eventos">Voltar</a>
    </small>
    <!-- <ul>
      <li v-for="(post, i) in fields.posts" :key="i">
        <a :href="/#/ + 'blog/' + post.uid">{{ post.data.titulo[0].text }}</a>
      </li>
    </ul>-->

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
  computed: {
    home: function() {
      if (this.$route.path === "/eventos") {
        return false;
      } else return true;
    }
  }
  /* methods: {
    getContent() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "blog_post"), {
          orderings: "[my.blog_post.data_do_post desc]"
        })
        .then(response => {
          this.fields.posts = response.results;
          console.log(response.results);
        });
    }
  },
  created() {
    this.getContent();
  } */
};
</script>

<style lang="scss" scoped>
.blog {
  margin: 10vh 20vw;
  h1 {
    font-family: "Antic Slab", serif;
    color: #6d8d3c;
  }
}
</style>
