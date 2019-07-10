<template>
  <div id="parc">
    <h3>parceiros</h3>
    <div class="quadrado"></div>
    <div class="quadrado"></div>
    <div class="quadrado"></div>
    <div class="quadrado"></div>
  </div>
</template>

<script>
export default {
  name: "Parceiros"
};
</script>

<style scoped>
#parc {
  margin-top: 40px;
  margin-left: -80px;
  padding-left: 80px;
  height: 30vh;
  background-color: #fff;
  display: flex;
}
.quadrado {
  width: 100px;
  height: 100px;
  margin: 0 10px;
  background-color: aquamarine;
}
</style>
