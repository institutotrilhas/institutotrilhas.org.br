<template>
  <div id="ativ">
    <h2>atividades</h2>
    <div class="ativ-lista">
      <Atividade index="0" />
      <Atividade index="1" />
      <Atividade index="2" />
      <Atividade index="3" />
      <Atividade index="4" />
      <Atividade index="5" />
      <Atividade index="6" />
      <Atividade index="7" />
      <Atividade index="8" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
#ativ {
  margin-top: 80px;
}

.ativ-lista {
  border: 1px solid lightgrey;
  border-radius: 16px;
  width: 742px;
  // height: 360px;
  background-color: white;
  overflow: hidden;
  padding: 2vh 0;
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

.img {
  width: 50%;
  height: 100%;
  background-color: #000;
}
</style>


<script>
import Atividade from "./Atividade.vue";

export default {
  name: "Atividades",
  components: {
    Atividade
  }
};
</script>
