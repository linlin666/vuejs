<template>
  <div>
    <ul>
      <!--http://lea.verou.me/css3patterns/-->
      <li class="hearts"></li>
      <li class="letter"></li>
      <li class="paopao"></li>
      <li class="honeyComb"></li>
      <li class="night"></li>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      height: 200px;
      width: 200px;
      border-radius: 50%;
    }
    .hearts {
      background: radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187, 0, 51, 0) 27%),
      radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187, 0, 51, 0) 27%),
      radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221, 51, 85, 0) 46%),
      radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221, 51, 85, 0) 46%),
      radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221, 51, 85, 0) 31%),
      radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187, 0, 51, 0) 27%) 50px 50px,
      radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187, 0, 51, 0) 27%) 50px 50px,
      radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221, 51, 85, 0) 46%) 50px 50px,
      radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221, 51, 85, 0) 46%) 50px 50px,
      radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221, 51, 85, 0) 31%) 50px 50px;
      background-color: #b03;
      background-size: 100px 100px;
    }
    .letter {
      background-color: #fff;
      background-image: linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),
      linear-gradient(#eee .1em, transparent .1em);
      background-size: 100% 1.2em;
    }
    .paopao {
      background: radial-gradient(rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .15) 30%, rgba(255, 255, 255, .3) 32%, rgba(255, 255, 255, 0) 33%) 0 0,
      radial-gradient(rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .1) 11%, rgba(255, 255, 255, .3) 13%, rgba(255, 255, 255, 0) 14%) 0 0,
      radial-gradient(rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .2) 17%, rgba(255, 255, 255, .43) 19%, rgba(255, 255, 255, 0) 20%) 0 110px,
      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,
      radial-gradient(rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .2) 11%, rgba(255, 255, 255, .4) 13%, rgba(255, 255, 255, 0) 14%) 130px 370px,
      radial-gradient(rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .1) 11%, rgba(255, 255, 255, .2) 13%, rgba(255, 255, 255, 0) 14%) 0 0,
      linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);
      background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;
      background-color: #840b2a;
    }
    .honeyComb {
      background: radial-gradient(circle farthest-side at 0% 50%, #fb1 23.5%, rgba(240, 166, 17, 0) 0) 21px 30px,
      radial-gradient(circle farthest-side at 0% 50%, #B71 24%, rgba(240, 166, 17, 0) 0) 19px 30px,
      linear-gradient(#fb1 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #fb1 0) 0 0,
      linear-gradient(150deg, #fb1 24%, #B71 0, #B71 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #B71 0, #B71 76%, #fb1 0) 0 0,
      linear-gradient(30deg, #fb1 24%, #B71 0, #B71 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #B71 0, #B71 76%, #fb1 0) 0 0,
      linear-gradient(90deg, #B71 2%, #fb1 0, #fb1 98%, #B71 0%) 0 0 #fb1;
      background-size: 40px 60px;
    }
    .night {
      background-color: black;
      background-image: radial-gradient(white, rgba(255, 255, 255, .2) 2px, transparent 40px),
      radial-gradient(white, rgba(255, 255, 255, .15) 1px, transparent 30px),
      radial-gradient(white, rgba(255, 255, 255, .1) 2px, transparent 40px),
      radial-gradient(rgba(255, 255, 255, .4), rgba(255, 255, 255, .1) 2px, transparent 30px);
      background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
      background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
    }
  }
</style>
