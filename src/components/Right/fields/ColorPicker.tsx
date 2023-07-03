import { ReactElement,useState,useEffect } from 'react'
import { SketchPicker } from 'react-color';

interface Props {
  onChange: (value: any) => void
  value: any
}

const styles = {
  color: {
    width: '36px',
    height: '14px',
    borderRadius: '2px',
  },
  swatch: {
    padding: '5px',
    background: '#fff',
    borderRadius: '1px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
    display: 'inline-block',
    cursor: 'pointer',
  },
  popover: {
    position: 'absolute',
    zIndex: '2',
  },
  cover: {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
};

export default function ColorPicker({ onChange, value }: Props): ReactElement {
  const [visible, setVisible] = useState(false);
  const [selectColor,setSelectColor] = useState(value);
  
  useEffect(() => {
    setSelectColor(value)
  }, [value]);

  return (
    <div>
      <div style={ styles.swatch } onClick={ () => setVisible(!visible) }>
        <div style={ {...styles.color,...{background:selectColor}} } />
      </div>
      {visible ? 
        <div style={{position: 'absolute',zIndex: '2'}}>
          <div style={{...styles.cover,...{position: 'fixed'}}} onClick={ () => setVisible(false) } />
          <SketchPicker
            width='225px'
            color={ selectColor }
            onChangeComplete={ (color) => {
              setSelectColor(`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`)
              onChange(`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`)
            } }
          /> 
        </div>:null
      }
    </div>
  )
}