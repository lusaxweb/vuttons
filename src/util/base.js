import { setColor } from './functions'
export default {
  inheritAttrs: false,
  props: {
    color: {
      default: 'primary',
      type: String
    },
    type:{
      default: 1,
      type: Number | String
    },
    size: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    submit: {
      type: Boolean,
      default: false
    },
    to:{
      default:false,
      type:String | Object
    },
    href:{
      default:'',
      type:String | Object
    },
    blank:{
      default:false,
      type:Boolean
    }
  },

  computed: {
    Class() {
      return [
        `vutton--${this.type}`,
        `vutton--${this.size}`,
        { 'vutton__active' : this.active },
        { 'vutton__loading' : this.loading },
        { 'vutton__submit' : this.submit },
      ]
    },
    listeners() {
      return {
        ...this.$listeners,
        click: (event) => this.clickx(event),
      }
    }
  },

  watch:{
    color() {
      setColor('component', this.color, this.$refs.button)
    }
  },

  mounted () {
    setColor('component', this.color, this.$refs.button)
    console.log(this.color)
  },

  methods:{
    clickx() {
      this.$emit('click', event)

      if(this.to) {
        this.routerPush()
      } else if (this.href) {
        this.open()
      }
    },
    routerPush() {
      this.$router.push(this.to)
    },
    open() {
      this.blank ? window.open(this.href) : window.location.href = this.href
    }
  }

}
