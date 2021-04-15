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
      <div class="sorts">
        <div>
          <div class="img">
            <img src="@/assets/FoodExample/roast-chicken@2x.png" alt="" />
          </div>
          <div class="text">Chicken</div>
        </div>
        <div>
          <div class="img">
            <img src="@/assets/FoodExample/steak@2x.png" alt="" />
          </div>
          <div class="text">Steak</div>
        </div>
        <div>
          <div class="img">
            <img src="@/assets/FoodExample/takeaway (2)@2x.png" alt="" />
          </div>
          <div class="text">Kake</div>
        </div>
        <div>
          <div class="img">
            <img src="@/assets/FoodExample/rice@2x.png" alt="" />
          </div>
          <div class="text">Grilled</div>
        </div>
      </div>
      <div class="signboard"></div>
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
      padding: 10px 0 0 15px;
      color: #1b2749;
      font-size: 34px;
      font-family: SFProDisplay-Bold;
      text-align: left;
      letter-spacing: 0px;
    }
    .sorts {
      display: flex;
      align-items: center;
      padding: 20px 20px 20px 10px;
      box-sizing: border-box;
      .text {
        text-align: center;
        margin-right: 30px;
        margin-top: 5px;
        font-size: 11px;
        font-family: SFProText-Medium;
        color: #1b2749;
        line-height: 13px;
      }
      .img {
        margin-right: 30px;
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
    .signboard {
      margin: 0 18px;
      height: 340px;
      opacity: 1;
      border-radius: 14px;
      background: #1b2749;
      background: url("../../assets/FoodExample/Home@2x.png") no-repeat;
      background-size: 100%;
    }
  }
}
</style>
