<template>
  <div class="logo">
    <div  class="logox">

      <div class="svg1">
        <svg width="50px" height="50px">
          <polygon points="0 0, 10 0, 25 30, 40 0, 50 0, 25 50" fill="#7289da"></polygon>
          <polygon points="10 0, 20 0, 25 10, 30 0, 40 0, 25 30" fill="#35495E"></polygon>
        </svg>
      </div>

    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
  .logo
    display flex
    align-items center
    justify-content center
    margin-top 200px
    margin-bottom 200px
    .svg1
      position absolute
      bottom -22px
      left -6px
      transform rotate(63deg)
    div.logox
      overflow hidden
      padding-bottom 0px
      width 55px
      height 55px
      border 4px solid #7289da
      border-radius 10px
      position relative
      box-shadow 0px 10px 20px 0px rgba(114, 137, 218,.5)
</style>

