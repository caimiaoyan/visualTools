import { Field } from '../types'
import { defaultComponentSettings } from './common'

const editFields: Record<string, Field[]> = {
  docDesc: defaultComponentSettings,
  recommend: defaultComponentSettings,
  advert: defaultComponentSettings,
  answer: [
    {
      key: 'max',
      name: '最大展示长度',
      type: 'Number',
    },
    ...defaultComponentSettings,
  ],
  keywords: [
    {
      key: 'max',
      name: '最大展示长度',
      type: 'Number',
    },
    ...defaultComponentSettings,
  ],
  banner: [
    {
      key: 'loop',
      name: '循环模式',
      type: 'Checkbox',
    },
    {
      key: 'autoPlay',
      name: '自动切换',
      type: 'Checkbox',
    },
    {
      key: 'delay',
      name: '自动切换的时间间隔，单位ms',
      type: 'Number',
    },
    ...defaultComponentSettings,
  ]
}

export default editFields
