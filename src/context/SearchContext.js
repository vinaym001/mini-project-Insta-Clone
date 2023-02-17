import React from 'react'

const SearchContext = React.createContext({
  searchInput: '',
  onSearch: () => {},
  onSearchClick:()=>{},
  searchResultList:[]
})

export default SearchContext
