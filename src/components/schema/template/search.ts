import { JsonNode } from '../types'

const SearchTemplate:JsonNode[] = [
  {
    type: "row",
    cpType: "wrapper",
    key: "Grid_1",
    endType: "web",
    props: { cols: 1 },
    children: [
      {
        cpType: "component",
        key: "search",
        cpCode: "1001",
        endType: "web",
        language: "zh",
        props: { className: "", children: "搜索栏" },
      },
      {
        cpType: "component",
        key: "nav",
        cpCode: "1002",
        endType: "web",
        language: "zh",
        props: { className: "", children: "导航栏" },
      },
      {
        type: "row",
        cpType: "wrapper",
        key: "Grid_2",
        endType: "web",
        props: { cols: 2 },
        children: [
          {
            type: "col",
            cpType: "wrapper",
            key: "Col_1",
            props: { className: "" },
            children: [
            ],
          },
          {
            type: "col",
            cpType: "wrapper",
            key: "Col_1",
            props: { className: "" },
            children: [
              {
                cpType: "component",
                key: "recommendedBrand",
                cpCode: "1006",
                endType: "web",
                language: "zh",
                props: { className: "", children: "授权代理品牌" },
              },
              {
                cpType: "component",
                key: "adWrapBanner",
                cpCode: "1007",
                endType: "web",
                language: "zh",
                props: { className: "", children: "垂直广告图" },
              },
              {
                cpType: "component",
                key: "brand",
                cpCode: "1008",
                endType: "web",
                language: "zh",
                props: { className: "", children: "授权代理品牌墙" },
              },
            ],
          },
        ],
      },
      {
        cpType: "component",
        key: "footer",
        cpCode: "1003",
        endType: "web",
        language: "zh",
        props: { className: "", fontSize: 14, children: "底部" },
      },
      {
        cpType: "component",
        key: "floatTool",
        cpCode: "1005",
        endType: "web",
        language: "zh",
        props: { className: "", children: "悬浮工具条" },
      },
    ],
  },
];
export default SearchTemplate

