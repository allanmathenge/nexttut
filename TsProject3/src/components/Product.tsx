import React, { ReactElement, memo} from 'react'

import { ProductType } from '../context/ProductsProvider'
import { ReducerActionType, ReducerAction } from '../context/CartProvider'

type PropsType = {
  product: ProductType,
  dispatch: React.ActionDispatch<[action: ReducerAction]>,
  REDUCER_ACTIONS: ReducerActionType,
  inCart: boolean
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {

  // const img: string = require(`../images/${product.sku}.jpg`)
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href

  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 }})
  const itemInCart = inCart ? ' Item in cart✔' : null

  const content = (
    <article className='product'>
      <h3 className="">{product.name}</h3>
      <img
        src={img}
        alt={product.name}
        className='product__img'  
      />
      <p className="">{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}</p>
      <button className="" onClick={onAddToCart}>Add To Cart</button>
    </article>
  )

  return content
}

function areProductsEqual({ product: prevProduct, inCart: prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart}: PropsType) {
  return (
    Object.keys(prevProduct).every(key => {
      return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
    }) && prevInCart === nextInCart
  )
}

const memoizedProduct = memo<typeof Product>(Product, areProductsEqual)

export default memoizedProduct