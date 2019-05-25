<template>
  <div class="conlogo">
    <div  class="logox">

      <div class="svg1">
        <svg width="25px" height="25px">
          <polygon points="0 0, 5 0, 12.5 15, 20 0, 25 0, 12.5 25" fill="#fff"></polygon>
          <polygon points="5 0, 10 0, 12.5 5, 15 0, 20 0, 12.5 15" fill="#35495E"></polygon>
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
  .conlogo
    display flex
    align-items center
    justify-content center
    // background rgb(255,255,255)
    // padding 5px
    // border-radius 10px
    .svg1
      position absolute
      bottom -11px
      left -4px
      line-height none !important
      transform rotate(63deg)
    div.logox
      // opacity .4
      overflow hidden
      padding-bottom 0px
      width 27px
      height 27px
      border 3px solid rgb(255,255,255)
      border-radius 5px
      position relative
      // box-shadow 0px 5px 10px 0px rgba(114, 137, 218,.5)
      transition all .25s ease
      &:hover
        // transform rotate(-63deg)
        opacity 1
        transform translate(0,-3px)
        box-shadow 0px 5px 10px 0px rgba(0, 0, 0,.2) !important
</style>

