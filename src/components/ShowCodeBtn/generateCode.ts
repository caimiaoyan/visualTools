import { State ,FieldNodeSchema} from '../../app/codeTreeSlice';
import { JsonNode } from '../schema/types';

const fn = (parent:JsonNode[],children:FieldNodeSchema[]) => {
  children.map((child)=>{
    let item:any = {};
    if(child.layout){
      //容器
      item={
        type:child.type === 'Grid'?'row':'col',
        cpType:'wrapper',
        key:child.key,
        endType:child.endType,
        props:child.props || {}
      }
      parent.push(item)
    }else{
      //组件
      item = {
        cpType:'component',
        key:child.type,
        cpCode:child.cpCode,
        endType:child.endType,
        language:child.language,
        props:child.props || {}
      }
      parent.push(item)
    }
    if(child.children && child.children.length > 0){
      item.children = [];
      fn(item.children,child.children)
    }
  })
  return parent;
}

export const generateCode = (state: State) => {
  //codeTree转json
  if(state.children && state.children.length > 0){
    let jsonTree:JsonNode[] = fn([],state.children);
    //console.log(jsonTree)
    return JSON.stringify(jsonTree)
  }else{
    return ''
  }
};
