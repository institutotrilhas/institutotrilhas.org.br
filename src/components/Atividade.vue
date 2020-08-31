<template>
  <div class="atividade">
    <div class="a-thumb">
      <img v-if="this.index == 0" src="@/assets/1_trilhas_urbanas.jpg" alt />
      <img v-if="this.index == 1" src="@/assets/2_trilhas_biomas.jpg" alt />
      <img v-if="this.index == 2" src="@/assets/3_trilhas teatrais.jpg" alt />
      <img v-if="this.index == 3" src="@/assets/4_trilhas_etnobotanicas.jpg" alt />
      <img v-if="this.index == 4" src="@/assets/5_planejamento_trilhas_2.jpg" alt />
      <img v-if="this.index == 5" src="@/assets/6_curso_formacao_2.jpg" alt />
      <img v-if="this.index == 6" src="@/assets/7_oficinas_1.jpg" alt />
      <img v-if="this.index == 7" src="@/assets/8_projetos_conexao_arte_meio_ambiente.jpg" alt />
      <img v-if="this.index == 8" src="@/assets/9_contacao_historias.jpg" alt />
    </div>
    <div class="a-titulo">
      <h3>{{ conteudo[this.index].titulo }}</h3>
      <button @click="toggle">{{ expandir ? "▼" : "▲" }}</button>
    </div>
    <div class="a-descricao" :class="{ hidden: expandir }">
      <p v-for="p in conteudo[this.index].texto" :key="p.index">{{ p }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Atividade",
  props: {
    index: null
  },
  data() {
    return {
      expandir: true,
      conteudo: [
        {
          titulo: "Trilhas urbanas",
          texto: [
            "São trilhas monitoradas interpretativas realizadas em parques e ruas da cidade. Durante o percurso são apresentados e discutidos elementos relevantes presentes na trajetória.",
            "A abordagem é sempre interdisciplinar, explorando questões diversas como: fauna, flora, história, geografia, serviços ecossistêmicos, saúde, artes e questões sociais."
          ]
        },
        {
          titulo: "Trilhas dos biomas",
          texto: [
            "São trilhas monitoradas interpretativas realizadas em unidades de conservação, parques e outros remanescente de mata dos biomas brasileiros;",
            "Durante o percurso são apresentados e discutidos elementos relevantes presentes na trajetória. A abordagem é sempre interdisciplinar, explorando questões diversas como: fauna, flora, história, geografia, serviços ecossistêmicos, saúde, questões sociais, entre outros."
          ]
        },
        {
          titulo: "Trilhas teatrais",
          texto: [
            "São trilhas monitoradas educativas, nas quais o público interage e é guiado por personagens lúdicos, históricos ou folclóricos."
          ]
        },
        {
          titulo: "Trilhas: imigração e etnobotânica em São Paulo",
          texto: [
            "Trilha urbana por alguns bairros de São Paulo onde há um legado etnobotânico oriundo de imigrações e que são evidenciados pelo cultivo, comércio e uso de espécies vegetais na culinária;",
            "Nestas trilhas são abrangidas regiões da cidade de São Paulo como o Mercadão, a Armênia, o Bom Retiro e outros bairros do centro expandido."
          ]
        },
        {
          titulo: "Planejamento e implementação de trilhas",
          texto: [
            "Planejamos e implementamos trilhas em áreas com potencial de educação ambiental. Esse processo abarca:",
            "•  Desenvolvimento e implementação de trilhas interpretativas;",
            "•  Elaboração de material de apoio para trilha autoguiada;",
            "•	Estudos do meio para desenvolvimento de trilhas;",
            "•	Elaboração de cadernos de campo;",
            "•  Desenvolvimento de produtos como: folders, livretos, maquetes, exposições."
          ]
        },
        {
          titulo: "Cursos de formação",
          texto: [
            "São cursos que visam a formação e capacitação de profissionais de diversas áreas que desejam ter o primeiro contato ou aprofundar seus conhecimentos com temas relativos ao meio ambiente e sociedade, tais como:",
            "•  Educação socioambiental;",
            "•  Resíduos e reciclagem;",
            "•	Hortas;",
            "•	Consumo sustentável;",
            "•  Outros.",
            "Alguns de nossos cursos são:",
            "•  Monitor socioambiental;",
            "•  Educador ambiental;",
            "•  Meio ambiente e sustentabilidade para professores;",
            "•  Estudo do meio aplicado à educação ambiental;",
            "•  Planejamento e implementação de trilhas."
          ]
        },
        {
          titulo: "Oficinas e palestras",
          texto: [
            "•  PANCs (Plantas alimentícias não convencionais);",
            "•	Hortas educacionais;",
            "•	Sustentabilidade doméstica;",
            "•  Urbanjungle (plantas em interiores para escritórios e apartamentos);",
            "•	Análise de Serviços Ecossistêmicos;",
            "•	Práticas em educação ambiental;",
            "•	Elaboração de projetos educativos/sociais;",
            "•	Práticas tradicionais (desenvolvidas em parceria com populações tradicionais);",
            "•	Elaboração de projetos educativos/sociais/ambientais;",
            "•	Técnicas de monitoria;",
            "•	Práticas em educação ambiental;",
            "•	Sustentabilidade doméstica;",
            "•	Elaboração e manutenção de terrários;",
            "•	Compostagem doméstica;",
            "•	Análise de Serviços Ecossistêmicos;",
            "•	Roda de conversa sobre etnobotânica;",
            "•	Caminhada diagnóstica;",
            "•	O vídeo como ferramenta didática na educação socioambiental;",
            "Oficinas e palestras com outros temas podem ser desenvolvidos, conforme a demanda da instituição/público."
          ]
        },
        {
          titulo: "Projetos de conexão entre arte e meio ambiente",
          texto: [
            "Atividades que revelam e propiciam a discussão de temáticas socioambientais presentes em obras artísticas.",
            "Oficina de bonecas Abayomi. Confecção manual de bonecas a partir da reutilização de retalhos, propiciando a discussão do reaproveitamento de materiais e o resgate de histórias e memórias."
          ]
        },
        {
          titulo: "Contação de histórias como instrumento de transformação",
          texto: [
            "Com apoio de contos e personagens folclóricos são abordados temas de relevância social e ambiental, mas sob um olhar lúdico, para despertar a curiosidade e imaginação."
          ]
        }
      ]
    };
  },
  methods: {
    toggle() {
      this.expandir ? (this.expandir = false) : (this.expandir = true);
    }
  }
};
</script>

<style lang="scss" scoped>
.atividade {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 2vh 2vw 2vh 2vw;
  align-items: center;
  h3 {
    font-family: "Antic", sans-serif;
    font-weight: 400;
    color: #6d8d3c;
  }
  .a-titulo {
    display: flex;
    margin-left: 2vw;
    button {
      padding: 0 20px;
      border: none;
      background: none;
      color: #ccc;
      cursor: pointer;
      outline: none;
    }
  }
  .a-descricao {
    margin-top: 1.5vh;
  }
  .a-thumb {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    img {
      max-width: 125%;
      min-height: 100%;
    }
  }
}

.hidden {
  display: none;
}
</style>
