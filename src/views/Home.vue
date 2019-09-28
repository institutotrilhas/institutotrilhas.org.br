<template>
  <div class="home">
    <QuemSomos msg="quem somos e o que fazemos" />
    <Atividades />
    <Equipe />
  </div>
</template>


<style scoped <style lang="scss" scoped>
.home {
  margin-top: 10vh;
  margin-left: 20vw;
  display: grid;
  @media (max-width: 640px) {
    margin: 10vh 10vw;
  }
}
</style>

<script>
// @ is an alias to /src
import QuemSomos from "@/components/QuemSomos.vue";
import Atividades from "@/components/Atividades.vue";
import Equipe from "@/components/Equipe.vue";

export default {
  name: "home",
  components: {
    QuemSomos,
    Atividades,
    Equipe
  }
};
</script>
