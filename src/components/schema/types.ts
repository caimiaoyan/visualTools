import { fields } from '../Right/fields'
import preview from './preview/index';
import { ReactElement } from 'react'

export interface FieldNode {
  type: keyof typeof preview
  h?: number
  displayName?: string
  canvasClassName?: string
  layout?: boolean
  module?: string
  title?: string
  key?: string
  props: Record<string, any>
  icon?: ReactElement
  cpCode?:string
  cpPath?: string
  endType?: string
  language?: string
  desc?: string
}

export interface Field extends Record<string, any> {
  key: string
  name: string
  type: keyof typeof fields
}

export interface JsonNode {
  cpCode?: string
  cpType: string
  type?: string
  key?: string
  endType?: string
  language?: string
  props: Record<string, any>
  children?: JsonNode[]
}
