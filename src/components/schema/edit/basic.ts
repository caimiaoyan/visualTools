import { Field } from '../types'
import { defaultComponentSettings } from './common'


const editFields: Record<string, Field[]> = {
  search: [
    {
      key:'showLogo',
      name:'是否展示Logo',
      type:'Checkbox'
    },
    {
      key:'logoUrl',
      name:'Logo图路径',
      type:'Text'
    },
    {
      key:'href',
      name:'Logo跳转链接',
      type:'Text'
    },
    {
      key:'showSearch',
      name:'是否展示搜索栏',
      type:'Checkbox'
    },
    {
      key:'showInfo',
      name:'是否展示右侧栏',
      type:'Checkbox'
    },
    ...defaultComponentSettings
  ],
  nav: [
    ...defaultComponentSettings,
  ],
  footer: [
    {
      key: 'fontSize',
      name: '字体大小',
      type: 'Slider',
    },
    ...defaultComponentSettings,
  ],
  floatTool:[
    {
      key: 'right',
      name: '右定位',
      type: 'Text',
    },
    {
      key: 'bottom',
      name: '下定位',
      type: 'Text',
    },
    ...defaultComponentSettings,
  ],
  recommendedBrand:[
    {
      key: 'itemWidth',
      name: '单张图片宽度',
      type: 'Text',
    },
    {
      key: 'max',
      name: '最大展示长度',
      type: 'Number',
    },
    ...defaultComponentSettings,
  ],
  adWrapBanner:[
    {
      key: 'max',
      name: '最大展示长度',
      type: 'Number',
    },
    ...defaultComponentSettings,
  ],
  brand: [
    {
      key: 'labelColor',
      name: '类目文字颜色',
      type: 'ColorPicker',
    },
    {
      key: 'itemWidth',
      name: '单张图片宽度',
      type: 'Text',
    },
    {
      key:'showCollpase',
      name:'显示展开按钮',
      type:'Checkbox'
    },
    {
      key:'showImgCollpase',
      name:'默认全部展开',
      type:'Checkbox'
    },
    {
      key: 'itemHeight',
      name: '单项类目高度',
      type: 'Text',
    },
    {
      key:'showAsk',
      name:'显示提问模块',
      type:'Checkbox'
    },
    {
      key: 'askTip',
      name: '提问模块文案',
      type: 'Text',
    },
    {
      key: 'askBtnText',
      name: '提问按钮文案',
      type: 'Text',
    },
    {
      key: 'askBtnColor',
      name: '提问按钮颜色',
      type: 'ColorPicker',
    },
    ...defaultComponentSettings,
  ],
  div: [
    {
      key: 'className',
      name: '类名',
      type: 'Text',
    },
  ],
}

export default editFields
