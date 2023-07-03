import { ReactElement, useState } from 'react'
import cl from 'classnames'
import menus from '../schema/fields';

export default function Left(): ReactElement {
  const [type, setType] = useState('layout')
  const fields = menus.find((menu) => menu.key === type);

  const activeIndex = menus.findIndex(item => item.key === type);

  return (
    <div className="left-module">
      <div className="meuns-wrapper">
        <div className="meuns">
          {menus.map((menu, index) => {
            return (
              <div
                key={menu.key}
                onClick={() => setType(menu.key)}
                className={cl(
                  'meun-item',
                  {
                    'meun-item-active': menu.key === type,
                    'meun-item-previous': index === (activeIndex - 1)
                  }
                )}
              >
                <span>{menu.title}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="component-module">
        {fields?.panel}
      </div>
    </div>
  )
}
