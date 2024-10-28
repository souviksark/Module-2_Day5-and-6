import React from 'react'
import Product_Item from '../components/Product_Item'

function Products_page() {
  return (
    <div>
        <h1>Products are here...</h1>
        <Product_Item p_name='Soap' p_price='90' p_qty='30' p_desc='a good soap which will last till 3 days' />
        <hr />
        <Product_Item p_name='Shampoo' p_price='190' p_qty='10' p_desc='a good shampoo which will last till 30 days' />
        <hr/>
        <Product_Item />
    </div>
  )
}

export default Products_page