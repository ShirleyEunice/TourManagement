import React from 'react'
import Home from './home/Home'
import PackageLink from './packagelink/PackageLink'
import KnowMore from './knowmore/KnowMore'
import CountryList from './countryList/CountryList'
import Carousels from './carousel/Carousels'

const Main = () => {
  return (
    <div>
      <Carousels></Carousels>
      <Home></Home>
      <PackageLink></PackageLink>
      <CountryList></CountryList>
      <KnowMore></KnowMore>
    </div>
  )
}

export default Main