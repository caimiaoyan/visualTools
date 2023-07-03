import { FieldNode } from '../types'
import {
  PicLeftOutlined,
  PicCenterOutlined
} from '@ant-design/icons';
import DocTemplate from '../template/docDetail'
import SearchTemplate from '../template/search'
import IndexTemplate from '../template/index'


const template: FieldNode[] = [
  {
    type:'Template',
    key:'docDetail',
    title:'资料模板',
    endType: 'web',
    icon:<PicLeftOutlined />,
    props:{
      cpList:DocTemplate,
    },
  },
  {
    type:'Template',
    key:'search',
    title:'搜索结果页模板',
    endType: 'web',
    icon:<PicLeftOutlined />,
    props:{
      cpList:SearchTemplate
    }
  },
  {
    type:'Template',
    key:'index',
    title:'首页模板',
    endType: 'web',
    icon:<PicCenterOutlined />,
    props:{
      cpList:IndexTemplate
    }
  }
]

export default template;