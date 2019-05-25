<template>
  <button
    ref="button"
    :class="Class"
    class="vut vutton"
    v-bind="$props"
    v-on="listeners">
    <span>
      <slot />
    </span>

    <loading />
    <submit />
  </button>
</template>
<script>

import base from '../../util/base'
import loading from '../loading/loading'
import submit from '../submit/submit'

export default {
  name: 'Vutton',
  components:{
    loading,
    submit
  },
  mixins: [base]
}
</script>
