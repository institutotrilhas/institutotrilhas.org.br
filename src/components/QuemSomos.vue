<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/AqQW6wpBdtY"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <p>
      <strong>Somos</strong> uma organização sem fins lucrativos, de cunho multidisciplinar e que busca propiciar à sociedade ações de educação, formação e sensibilização no campo da educação socioambiental.
    </p>
    <p>
      Temos o
      <strong>propósito</strong> de fortalecer a relação entre a sociedade e o ambiente, estimular o desenvolvimento humano e promover o direito à cidade, à cultura e à arte, buscando contribuir com um processo de desenvolvimento mais sustentável.
    </p>
    <p>Realizamos nossas atividades de acordo com as necessidades e demandas do público envolvido.</p>
  </div>
</template>

<script>
export default {
  name: "QuemSomos",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: 640px;
  @media (max-width: 640px) {
    width: 80vw;
  }
}
h1 {
  font-family: "Antic Slab", serif;
  margin-top: 0;
  color: #6d8d3c;
}
strong {
  color: #6d8d3c;
}
</style>
