<template>
  <div id="equipe">
    <h2>equipe</h2>
    <div class="equipe-lista">
      <Trilheiro index="0" />
      <Trilheiro index="1" />
      <Trilheiro index="2" />
      <Trilheiro index="3" />
    </div>
  </div>
</template>


<style scoped <style lang="scss" scoped>
#equipe {
  margin-top: 80px;
}

.equipe-lista {
  border: 1px solid lightgrey;
  border-radius: 16px;
  width: 640px;
  background-color: #fff;
  padding: 50px 50px 0 50px;
  @media (max-width: 640px) {
    width: 70vw;
    padding: 5vh 5vw 0 5vw;
  }
}

h2 {
  font-family: "Antic", sans-serif;
  font-weight: 400;
  color: #6d8d3c;
}
</style>


<script>
import Trilheiro from "./Trilheiro.vue";

export default {
  name: "Equipe",
  components: {
    Trilheiro
  }
};
</script>
