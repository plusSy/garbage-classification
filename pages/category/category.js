
import * as GarbgeData from '../../assets/data/index.js'

Page({
  data: {
    _num: 'wet',
    menus: [
      { type: 'wet', name: '湿垃圾', value: '0' },
      { type: 'dry', name: '干垃圾', value: '1' },
      { type: 'recyclable', name: '可回收物', value: '2' },
      { type: 'harmful', name: '有害垃圾', value: '3' }
    ],
    detailList: [],
    injectData: {},
    logoImg: '/assets/image/wet.png',
    showToolTip: false
  },
  onShow: function () {
    this.setData({
      detailList: GarbgeData.default['wet']
    })
  },
  menuClick (e) {
    this.data.detailList = [];
    let type = e.target.dataset.num;
    let data = GarbgeData.default[type];
    this.setData({
      _num: type,
      logoImg: `/assets/image/${type}.png`,
      detailList: data
    })
  },
  detailClick (e) {
    this.setData({
      injectData: e.target.dataset.item,
      showToolTip: true
    })
  },
  handleClose (params) {
    this.setData({
      showToolTip: false
    })
  }
})
