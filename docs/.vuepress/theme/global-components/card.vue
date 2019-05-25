<template>
  <div class="card">
    <div class="text">
      <slot></slot>
    </div>

    <div v-if="$slots.example" class="example">
      <slot name="example" />
    </div>

    <div v-if="$slots.code" class="slotcode">
      <codex>
        <slot name="code" />
      </codex>
    </div>
  </div>
</template>
<script>
import codex from './codex.vue'
export default {
  components:{
    codex
  }
}
</script>
<style lang="stylus">
.card
  background rgb(255,255,255)
  border-radius 5px
  overflow hidden
  // padding-top 100px
  // box-shadow 0px 5px 15px 0px rgba(0,0,0,.04)
  // border 1px solid rgba(0,0,0,.05)
  .example
    padding 10px
    border-top 1px solid rgba(0,0,0,.05)
    margin-top 10px
  .text
    h2
      padding-top 80px !important
    h2, h3, h4, h5, h6
      padding 15px 20px
      margin 0px
      border-bottom 0px
      padding-bottom 10px
      transition all .25s ease
      &:hover
        padding-left 40px
    p
      padding 5px 20px
      margin 0px
      font-size .85rem

</style>
