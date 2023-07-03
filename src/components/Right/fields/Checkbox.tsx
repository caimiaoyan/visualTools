import React, { ReactElement } from 'react'
import { Checkbox } from 'antd'

interface Props {
  onChange: (value: boolean) => void
  value: any
}

export default function CustomCheckbox({ onChange, value }: Props): ReactElement {
  return (
    <Checkbox
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
    />
  )
}