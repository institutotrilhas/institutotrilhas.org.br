<template>
  <div id="ativ">
    <h2>atividades</h2>
    <div class="ativ-lista">
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <img
                src="https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
                alt
              />
            </li>
            <li class="glide__slide">
              <img src="http://fillmurray.com/500/500" alt />
            </li>
            <li class="glide__slide">
              <img
                src="https://images.pexels.com/photos/2583850/pexels-photo-2583850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
                alt
              />
            </li>
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
      </div>
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
  height: 360px;
  background-color: #fff;
  overflow: hidden;
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
export default {
  name: "Atividades"
};
</script>
