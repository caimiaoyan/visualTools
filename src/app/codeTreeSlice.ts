import { createSlice } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";
import { traverse } from "../utils";
import layout from "../components/schema/fields/layout";
import { FieldNode } from "../components/schema/types";
import { isParentNode } from "../components/schema/utils";

export interface FieldNodeSchema extends FieldNode {
  id: string;
  props: Record<string, any>;
  pageInfo: {};
  children: any[];
}

export interface State extends FieldNodeSchema {
  focusId?: string;
}

export const colNode: FieldNode = {
  type: "GridCol",
  key: "Col_1",
  layout: true,
  props: {},
};

const _layout = {...layout[0]}
delete _layout.icon;
const fixedLayoutProps = [{ ..._layout, id: uuid() }];

export const initialState: State = {
  props: {},
  id: "root",
  type: "div",
  pageInfo: {},
  children: fixedLayoutProps,
};

const codeTree = createSlice({
  name: "codeTree",
  initialState,
  reducers: {
    append: (state, action) => {
      const focusId = uuid();
      state.focusId = focusId;
      delete action.payload.icon;
      state.children.push({
        ...action.payload,
        id: focusId,
      });
    },
    appendCom: (state, action) => {
      const { data, item, hoverParentId, hoverIndex, positionDown } =
        action.payload;

      const focusId = uuid();

      traverse(state, (sub) => {
        if (item) delete item.icon;
        //非嵌套标签往父层插入
        if (!isParentNode(data.type) && sub.id === hoverParentId) {
          if (positionDown) {
            sub.children.splice(hoverIndex + 1, 0, { ...item, id: focusId });
          } else {
            sub.children.splice(hoverIndex, 0, { ...item, id: focusId });
          }
          return false;
        }
        if (isParentNode(data.type) && sub.id === data.id) {
          if (sub.children && sub.children.length > 0) {
            sub.children.push({
              ...item,
              id: focusId,
            });
          } else {
            sub.children = [{ ...item, id: focusId }];
          }

          return false;
        }
        return true;
      });
      state.focusId = focusId;
    },
    moveCom: (state, action) => {
      const {
        data: hoverData,
        item: dragData,
        hoverParentId: hId,
        hoverIndex: hIndex,
        dragParentId,
        dragIndex,
        positionDown,
      } = action.payload;

      if (hoverData.id === dragData.id) return state;
      //在子节点中不拖拽
      let hoverInDragData = false;

      traverse(dragData, (sub) => {
        if (sub.id === hoverData.id) {
          hoverInDragData = true;
          return false;
        }
        return true;
      });

      if (hoverInDragData) return state;

      const focusId = uuid();

      traverse(state, (sub) => {
        if (sub.id === dragParentId) {
          sub.children.splice(dragIndex, 1);
          return false;
        }
        return true;
      });

      traverse(state, (sub) => {
        if (!isParentNode(hoverData.type) && sub.id === hId) {
          if (positionDown) {
            sub.children.splice(hIndex + 1, 0, { ...dragData, id: focusId });
          } else {
            sub.children.splice(hIndex, 0, { ...dragData, id: focusId });
          }
          return false;
        }
        //非嵌套标签往父层插入
        if (isParentNode(hoverData.type) && sub.id === hoverData.id) {
          if (sub.children) {
            sub.children.unshift({
              ...dragData,
              id: focusId,
            });
          } else {
            sub.children = [{ ...dragData, id: focusId }];
          }
          return false;
        }
        return true;
      });

      state.focusId = focusId;
    },
    setFocus: (state, action) => {
      const { focusId } = action.payload;
      state.focusId = focusId;
    },
    removeCom: (state, action) => {
      const { id, parentId } = action.payload;
      traverse(state, (sub) => {
        if (sub.id === parentId) {
          sub.children = sub.children.filter((child) => child.id !== id);
          return false;
        }
        return true;
      });
    },
    updateTree: (state, action) => {
      const { focusId } = state;
      const { key, value } = action.payload;
      traverse(state, (sub) => {
        if (sub.id === focusId) {
          sub.props[key] = value;
          return false;
        }
        return true;
      });
    },
    clearCom: (state, action) => {
      delete state.focusId;
      state.children = fixedLayoutProps;
    },
    updatePageInfo: (state, action) => {
      state.pageInfo = { ...state.pageInfo, ...action.payload}
    },
    resetPageInfo: (state, action) => {
      state.pageInfo = {...initialState.pageInfo};
    }
  },
});

export const {
  append,
  appendCom,
  moveCom,
  setFocus,
  removeCom,
  updateTree,
  clearCom,
  updatePageInfo,
  resetPageInfo
} = codeTree.actions;

export default codeTree.reducer;
