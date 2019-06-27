// pages/components/common/tooltip/tooltip.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    injectObj: {
      type: Object,
      default: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    assetsBase: '/assets/image/'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClose () {
      this.triggerEvent('closeModal', false)
    }
  }
})
