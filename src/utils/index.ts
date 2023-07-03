/**
 * depth first traverse, from root to leaves, children in inverse order
 *  if the fn returns false, terminate the traverse
 */
export const traverse = <T extends { children?: T[] }>(
  data: T,
  fn: (param: T) => boolean
) => {
  if (fn(data) === false) {
    return false
  }

  if (data && data.children) {
    for (let i = data.children.length - 1; i >= 0; i--) {
      if (!traverse(data.children[i], fn)) return false
    }
  }
  return true
}

/**
 * depth first traverse, from leaves to root, children in inverse order
 *  if the fn returns false, terminate the traverse
 */
export const traverseUp = <T extends { children?: T[] }>(
  data: T,
  fn: (param: T) => boolean
) => {
  if (data && data.children) {
    for (let i = data.children.length - 1; i >= 0; i--) {
      if (!traverseUp(data.children[i], fn)) return
    }
  }

  if (fn(data) === false) {
    return false
  }
  return true
}

export const isObject = (target: any) => judgeType(target, 'object')
export const isFunction = (target: any) => judgeType(target, 'function')
export const isArray = (target: any) => judgeType(target, 'array')
export const isRegExp = (target: any) => judgeType(target, 'regExp')
export const isNull = (target: any) => judgeType(target, 'null')
export const isUndefined = (target: any) => judgeType(target, 'undefined')
export const isBoolean = (target: any) => judgeType(target, 'boolean')
export const isString = (target: any) => judgeType(target, 'string')
export const isNumber = (target: any) => judgeType(target, 'number')

/**
 * 判断变量或常量的类型
 * @param target 
 * @param type 
 * @returns
 */
function judgeType(target: any, type: string){
  return Object.prototype.toString.call(target) === `[object ${type.replace(/^\S/, s => s.toUpperCase())}]`
}

export function getUrlParams(key: string, href: string) {
  const query = href.split("?");
  if (query.length <= 1) return null;
  const pairs = query[1].split("&");
  const res = pairs
      .filter(pair => {
          const [k] = pair.split("=");
          if (k === key) return true;
          return false;
      })
      .map(pair => {
          const [, v] = pair.split("=");
          return v;
      });
  if (res.length === 0) return null;
  if (res.length === 1) return res[0];
  return res;
}
