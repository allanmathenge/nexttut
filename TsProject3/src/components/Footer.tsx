import React from 'react'
import useCart from '../hooks/useCart'

type PropsType = {
  viewCart: boolean
}

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart()
  const year = new Date().getFullYear()
  const pageContent = viewCart
    ? <p className="">Shopping Cart &copy;{year}</p>
    : (
      <>
        <p className="">Total Items {totalItems}</p>
        <p className="">Total Price {totalPrice}</p>
        <p className="">Shopping Cart &copy;{year}</p>
      </>
    )

    const content = (
      <footer className="footer">
        { pageContent }
      </footer>
    )
  return content
}

export default Footer