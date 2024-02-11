import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../component/Product'

const WishListScreen = () => {
    const { wishlist } = useSelector(state => state.wishlist)
    console.log(wishlist)
    if (!wishlist || wishlist.length === 0) {
        return  (<div>Your wish list is empty.</div>)
    }
  return (
    <ul>
          {wishlist.map((item) => <Product item={item}/>           
      )}
    </ul>
  )
}

export default WishListScreen
