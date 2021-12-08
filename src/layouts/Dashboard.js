import React from 'react'
import { Button } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
//rfc tab tab
export default function Dashboard() {
    return (
        <div>
            <Navi/>
            <Categories/>
            <ProductList/>
          {/* <Button
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
    />
    <Button
      basic
      color='blue'
      content='Fork'
      icon='fork'
      label={{
        as: 'a',
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: '2,048',
      }}
    /> */}
        </div>
    )
}
