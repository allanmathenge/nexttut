import React from 'react'
import Search from './Search'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className="h-24 bg-green-300 flex flex-wrap justify-around items-center">
        <h2 className="text-xl tracking-wider font-bold">Wiki-urlSearchParams</h2>
        <Search />
    </div>
  )
}

export default Navbar