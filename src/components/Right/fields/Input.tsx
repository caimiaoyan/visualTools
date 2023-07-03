import React, { ReactElement } from 'react'
import { Input,InputNumber } from 'antd'

interface Props {
  onChange: (value: string) => void
  value: any
  label?: string
}

export default function CustomInput({ onChange, value, label = '' }: Props): ReactElement {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={`请输入${label}`}
    />
  )
}

export function TextArea({ onChange, value, label = '' }: Props): ReactElement {
  return (
    <Input.TextArea
      rows={4}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={`请输入${label}`}
    />
  )
}

export function CustomInputNumber({ onChange, value, label = '' }: Props): ReactElement {
  return (
    <InputNumber
      value={value}
      onChange={(value) => onChange(value)}
      placeholder={`${label}`}
    />
  )
}
