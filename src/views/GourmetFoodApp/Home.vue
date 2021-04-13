<template>
  <div class="GF-home">
    <header class="home_header">
      <div class="img-l">
        <img src="@/assets/FoodExample/Menu.png" alt="" />
      </div>
      <div class="img-r">
        <img src="@/assets/FoodExample/Icon-Next.png" alt="" />
      </div>
    </header>
    <main class="home_main">
      <div class="title">Welcome</div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.GF-home {
  .home_header {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px 0 5px;
    .img-l {
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 30px;
      }
    }
    .img-r {
      background: #efeff2;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 23px;
      }
    }
  }
  .home_main {
    .title {
      color: #1b2749;
      font-size: 34px;
      font-family: SFProDisplay-Bold;
      text-align: left;
      letter-spacing: 0px;
    }
  }
}
</style>
