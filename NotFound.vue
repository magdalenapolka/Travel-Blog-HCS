<template>
  <section class="page_404 py-20 my-20">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div class="w-full">
          <div class="four_zero_four_bg mb-10">
            <h1 class="text-center">404</h1>
          </div>
          <div
            class="contant_box_404 flex justify-center items-center flex-col"
          >
            <h3 class="text-center text-3xl">Look like you're lost</h3>

            <p class="text-center text-xl">
              the page you are looking for not avaible!
            </p>

            <router-link to="/" class="link_404">Go to Home </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo";
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>
