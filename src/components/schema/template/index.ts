import { JsonNode } from '../types'

const IndexTemplate:JsonNode[] = [
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
              {
                cpType: "component",
                key: "banner",
                cpCode: "1014",
                endType: "web",
                language: "zh",
                props: {
                  className: "",
                  children: "首页轮播图",
                  loop: true,
                  autoPlay: true,
                  delay: 3000,
                },
              },
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
                key: "advert",
                cpCode: "1015",
                endType: "web",
                language: "zh",
                props: { className: "", children: "首页广告图" },
              },
            ],
          },
        ],
      },
      {
        type: "row",
        cpType: "wrapper",
        key: "Grid_1",
        endType: "web",
        props: { cols: 1 },
      },
      {
        cpType: "component",
        key: "footer",
        cpCode: "1004",
        endType: "web",
        language: "zh",
        props: { className: "", fontSize: 14, children: "底部货架+版权" },
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
export default IndexTemplate