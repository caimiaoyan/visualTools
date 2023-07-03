
import { initialState , State,FieldNodeSchema,colNode} from '../../app/codeTreeSlice';
import { JsonNode } from '../schema/types';
import { v1 as uuid } from 'uuid';
import basic from '../schema/fields/basic'
import components from '../schema/fields/components'
import layout from '../schema/fields/layout'

const fn = (childrenTree:FieldNodeSchema[],cpList:JsonNode[])=>{
  cpList.map((item:JsonNode)=>{
    let child:any = {};
    if(item.cpType === 'wrapper'){
      //容器
      if(item.type === 'col'){
        //列
        child = colNode
      }else{
        child = layout.filter(oItem => oItem.key === item.key)
      }
    }else{
      //组件
      child = [...basic,...components].filter(oItem => oItem.type === item.key)
    }
    child = child.length>0?child[0]:child;
    let child_write = {...child,...{props:item.props}}
    child_write.id = uuid();
    child_write.children=[];
    childrenTree.push(child_write)
    if(item.children && item.children.length > 0){
      fn(child_write.children,item.children)
    }
  })
  return childrenTree;
}

export const jsonToCodeTree = (cpList:JsonNode[])=>{
  let rootTree: State = {...initialState};
  rootTree.children = fn([],cpList)
  return rootTree
}