import React, { ReactElement } from 'react'
import { Switch } from 'antd'

interface Props {
  onChange: (value: boolean) => void
  value: any
}

export default function CustomSwitch({ onChange, value }: Props): ReactElement {
  return (
    <Switch
      checked={value}
      onChange={(checked: boolean) => onChange(checked)}
    />
  )
}