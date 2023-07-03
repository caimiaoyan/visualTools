import basic from './basic'
import components from './components'
import layout from './layout'
import template from './template'
import DragPanel from '../../Left/DragPanel'
import TemplatePanel from '../../TemplatePanel'
import { ReactElement } from 'react'

const menus: {
  key: string
  title: string
  panel: ReactElement
}[] = [
  {
    key: 'template',
    title: '页面模板',
    panel: <DragPanel data={template} />,
  },
  {
    key: 'layout',
    title: '布局组件',
    panel: <DragPanel data={layout} />,
  },
  {
    key: 'components',
    title: '业务组件',
    panel: <DragPanel data={components} />,
  },
  {
    key: 'basic',
    title: '公共组件',
    panel: <DragPanel data={basic} />,
  },
]

export default menus
