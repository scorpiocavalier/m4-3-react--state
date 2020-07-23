import React from 'react'
import GlobalStyles from './GlobalStyles'
import data from '../data'
import Typeahead from './Typeahead'

const handleSelect = suggestion => {
  window.alert(suggestion)
}

export default (props) => {
  return (
    <>
      <GlobalStyles />
      <Typeahead data={data} handleSelect={handleSelect} />
    </>
  )
}