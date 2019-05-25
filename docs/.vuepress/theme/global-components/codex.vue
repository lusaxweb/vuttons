<template>
  <div class="code">
    <header class="header">
      <ul>
        <li>
          <a href="">
            <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="组件内页样式" transform="translate(-1121.000000, -1500.000000)" fill-rule="nonzero" fill="currentColor">
                      <g id="codepen" transform="translate(1121.000000, 1500.000000)">
                          <path d="M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z" id="Shape"></path>
                      </g>
                  </g>
              </g>
          </svg>
          </a>

        </li>
        <li>
          <a href="">
            <svg t="1514359261842" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" p-id="9197" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px"><path d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z" p-id="9198"></path></svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg viewBox="64 64 896 896" class="" data-icon="snippets" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z"></path></svg>
          </a>
        </li>
        <li
          :class="{'active': active}"
          class="not-a" @click="active = !active">
          <i class="flaticon-code"></i>
          <!-- <i v-else class="flaticon-up"></i> -->
        </li>
      </ul>
    </header>
    <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    >
      <div v-show="active" class="con-code">
        <slot></slot>
      </div>
    </transition >
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false
  }),
  methods:{
    // animation
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.height = h - 1 + 'px'
      done()
    },
    leave: function (el, done) {
      el.style.height = '0px'
    },
  }
}
</script>
<style lang="stylus">
.con-code
  display: block;
  transition: all .250s ease;
  >div
    div
      &:last-child
        pre
          margin-bottom 0px !important
  pre
    margin-top 0px !important
.header
  width 100%
  display flex
  align-items center
  justify-content center
  ul
    display flex
    align-items center
    margin 0px
    padding 0px
    justify-content center
    width 100%
    border-top 1px solid rgba(0,0,0,.05)
    padding 4px
    li
      list-style none
      color $textColor
      opacity .5
      transition all .25s ease
      border-radius 5px
      cursor pointer
      display none
      &.active
        color $accentColor !important
        opacity 1
        background #f5f7fb
        // background rgb(255,255,255)
        // box-shadow 0px 3px 10px 0px rgba(0,0,0,.04)
      &.not-a
        display block !important
        padding 2px 7px

        i
          display block
          position relative
          pointer-events none
      &:hover
        opacity 1
      a
        padding 3px 7px
        color $textColor
        display block
        cursor pointer
      svg
        fill $textColor !important
        stroke $textColor !important
        path $textColor !important
        pointer-events none
</style>
