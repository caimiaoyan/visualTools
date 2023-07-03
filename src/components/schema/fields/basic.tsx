import { FieldNode } from '../types';
import { SearchOutlined,MoreOutlined } from '@ant-design/icons';
import { Nav, Footer, Brand ,Image,Cooperation} from './../../Icon/';

const fields: FieldNode[] = [
  {
    type: 'search',
    title: '搜索栏',
    icon: <SearchOutlined />,
    cpCode:'1001',
    cpPath: "template/freemarker/commonTemplate/web/searchBar.ftl",
    endType: 'web',
    language: 'zh',
    props: {
      className: '',
      children: '搜索栏',
      showLogo:true,
      showSearch:true,
      showInfo:true,
      background:'#ffffff'
    },
  },
  {
    type: 'nav',
    title: '导航栏',
    icon: Nav,
    cpCode:'1002',
    cpPath: "template/freemarker/commonTemplate/web/nav_header.ftl",
    endType: 'web',
    language: 'zh',
    props: {
      className: '',
      children: '导航栏',
    },
  },
  {
    type: 'footer',
    title: '通用底部',
    icon: Footer,
    cpCode:'1003',
    cpPath: "template/freemarker/commonTemplate/web/footer_line_static_common.ftl",
    endType: 'web',
    language: 'zh',
    props: {
      className: '',
      fontSize:14,
      children: '底部',
    },
  },
  {
    type: 'floatTool',
    title: '悬浮工具条',
    icon: <MoreOutlined />,
    cpCode:'1005',
    cpPath: "template/freemarker/commonTemplate/web/side_float.ftl",
    endType: 'web',
    language: 'zh',
    props: {
      className: '',
      children: '悬浮工具条',
    },
  },
  {
    type: 'recommendedBrand',
    title: '授权代理品牌',
    icon: Brand,
    cpCode:'1006',
    cpPath: "template/freemarker/commonTemplate/web/recommendedBrand.ftl",
    endType: 'web',
    language: 'zh',
    props: {
      className: '',
      children: '授权代理品牌',
    },
  },
  {
    type: 'adWrapBanner',
    title: '垂直广告图',
    icon: Image,
    cpCode:'1007',
    cpPath: "template/freemarker/commonTemplate/web/adWrapBanner.ftl",
    endType: 'web',
    language: 'zh',
    props: {
      className: '',
      children: '垂直广告图',
      background:'#ffffff',
    },
  },
  {
    type: 'brand',
    title: '授权代理品牌墙',
    icon: Cooperation,
    cpCode:'1008',
    cpPath: "template/freemarker/commonTemplate/web/advertisement.ftl",
    endType: 'web',
    language: 'zh',
    props: {
      className: '',
      children: '授权代理品牌墙',
      labelColor:'#333333',
      showAsk:true,
      showCollpase:true,
      background:'#ffffff',
      askBtnColor:'#000000'
    },
  },
  {
    type: 'footer',
    title: '底部货架+版权',
    icon: Footer,
    cpCode:'1004',
    cpPath: "template/freemarker/commonTemplate/web/footer_static_common.ftl",
    endType: 'web',
    language: 'zh',
    props: {
      className: '',
      fontSize: 14,
      children: '底部货架+版权',
    },
  },
  
];

export default fields;
