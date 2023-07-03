import { Field } from '../types'

const editFields: Record<string, Field[]> = {
  Grid: [
    {
      key: 'width',
      name: '容器宽度',
      type: 'Number',
      min: 1,
      max: 1000,
    },
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
  ],
  GridCol: [
    {
      key: 'width',
      name: '容器宽度',
      type: 'Number',
      min: 1,
      max: 1000,
    },
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
  ],
}

export default editFields
