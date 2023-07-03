//组件公共配置
import { Field } from '../types'

export const defaultComponentSettings:Field[] = [
  {
    key: 'id',
    name: 'id',
    type: 'Text',
  },
  {
    key: 'className',
    name: '类名',
    type: 'Text',
  },
  {
    key: 'width',
    name: '宽度',
    type: 'Text',
  },
  {
    key: 'height',
    name: '高度',
    type: 'Text',
  },
  {
    key: 'background',
    name: '背景颜色',
    type: 'ColorPicker',
  },
  {
    key: 'css',
    name: 'css',
    type: 'TextArea',
  },
  {
    key: 'js',
    name: 'javascript',
    type: 'TextArea',
  },
]