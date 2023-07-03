import { FieldNode } from '../types'
import { LikeOutlined } from '@ant-design/icons';
import { Desc, Answer, Keyword,Banner,Advert} from './../../Icon/';


const fields: FieldNode[] = [
  {
    type: 'docDesc',
    title: '资料主体',
    icon: Desc,
    cpCode:'1017',
    cpPath:'template/freemarker/cpTemplate/web/doc_detail.ftl',
    endType:'web',
    language: 'zh',
    props: {
      className: '',
      children: '资料描述',
    },
  },
  {
    type: 'recommend',
    title: '相关推荐',
    icon: <LikeOutlined />,
    cpCode:'1019',
    cpPath:'template/freemarker/commonTemplate/web/recom_block_set.ftl',
    endType:'web',
    language: 'zh',
    props: {
      className: '',
      children: '相关推荐',
    },
  },
  {
    type: 'answer',
    title: '回答',
    icon: Answer,
    cpCode:'1020',
    cpPath:'template/freemarker/commonTemplate/web/commemt.ftl',
    endType:'web',
    language: 'zh',
    props: {
      className: '',
      children: '回答',
    },
  },
  {
    type: 'keywords',
    title: '关键字',
    icon: Keyword,
    cpCode:'1040',
    cpPath:'template/freemarker/commonTemplate/web/keywords.ftl',
    endType:'web',
    language: 'zh',
    props: {
      className: '',
      children: '关键字',
    },
  },
  {
    type: 'banner',
    title: '首页轮播图',
    icon: Banner,
    cpCode:'1014',
    cpPath: "template/freemarker/commonTemplate/web/banner.ftl",
    endType: 'web',
    language: 'zh',
    props: {
      className: '',
      children: '首页轮播图',
      loop:true,
      autoPlay:true,
      delay:3000
    },
  },
  {
    type: 'advert',
    title: '首页广告图',
    icon: Advert,
    cpCode:'1015',
    cpPath:'template/freemarker/commonTemplate/web/index_advert.ftl',
    endType:'web',
    language: 'zh',
    props: {
      className: '',
      children: '首页广告图',
    },
  },
]

export default fields
