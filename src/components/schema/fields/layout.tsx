import { FieldNode } from '../types'
import { SingleCol, TwoCol, ThreeCol, FourCol } from '../../Icon';

const fields: FieldNode[] = [
  {
    type: 'Grid',
    key: 'Grid_1',
    module: '@/components',
    title: '单列',
    layout: true,
    icon: SingleCol,
    endType: 'web',
    props: {
      cols: 1,
    },
    desc: '布局组件，对组件进行排版，单列布局，从上到下对组件进行排列组合'
  },
  {
    type: 'Grid',
    key: 'Grid_2',
    module: '@/components',
    icon: TwoCol,
    layout: true,
    title: '双列',
    endType: 'web',
    props: {
      cols: 2,
    },
    desc: '布局组件，对组件进行排版，双列布局，左右排版对组件进行排列组合'
  },
  {
    type: 'Grid',
    key: 'Grid_3',
    module: '@/components',
    icon: ThreeCol,
    layout: true,
    title: '三列',
    endType: 'web',
    props: {
      cols: 3,
    },
    desc: '布局组件，对组件进行排版，三列布局，对组件进行排列组合'
  },
  {
    type: 'Grid',
    key: 'Grid_4',
    module: '@/components',
    icon: FourCol,
    layout: true,
    title: '四列',
    endType: 'web',
    props: {
      cols: 4,
    },
    desc: '布局组件，对组件进行排版，四列布局，对组件进行排列组合'
  },
]

export default fields
