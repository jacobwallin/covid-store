import React from 'react'
import {withRouter} from 'react-router-dom'

import algoliasearch from 'algoliasearch'
import {
  connectStateResults,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox
} from 'react-instantsearch-dom'
import Rating from '@material-ui/lab/Rating'

const searchClient = algoliasearch(
  '7XNVVHR5BR',
  '8a9130d9c443dea3ae3d5177cba27d25'
)

// const searchClient = algoliasearch(process.env.ALGOLIA_CLIENT_ID, process.env.ALGOLIA_SEARCH_API_KEY);

const Hit = ({hit}) => {
  let rating
  if (hit.reviews) {
    rating = hit.reviews.length
      ? +(
          Math.round(
            (hit.reviews.reduce((a, c) => {
              return a + c.rating
            }, 0) /
              hit.reviews.length) *
              2
          ) / 2
        )
      : 0
  }

  return (
    <a href="/">
      <div className="search-hit">
        <div className="search-hit-image">
          <img src={hit.imageUrl} alt={hit.name} className="image" />
        </div>
        <div className="search-hit-contents">
          <div attribute="name" hit={hit} className="search-hit-name">
            {hit.name}
          </div>
          <div className="search-hit-rating">
            <Rating
              name="half-rating-read"
              value={hit.reviews ? rating : ''}
              precision={0.5}
              readOnly
            />{' '}
          </div>
          <div className="search-hit-category">
            <span>{hit.category.name}</span>
          </div>
        </div>
      </div>
    </a>
  )
}

const StateResults = ({searchResults}) => {
  const hasResults = searchResults && searchResults.nbHits !== 0
  const nbHits = searchResults && searchResults.nbHits

  return (
    <div className="search-results">
      <div hidden={!hasResults}>{nbHits} results</div>
      <div hidden={hasResults}>0 results</div>
    </div>
  )
}
const CustomStateResults = connectStateResults(StateResults)

export const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="products_NAME">
      <Header />
      <CustomStateResults />
      <div className="search-body-content">
        <Content />
      </div>
    </InstantSearch>
  )
}

const UnwrappedSearchBar = props => {
  console.log('SEARCH BAR', props)
  const {handleChange, handleSubmit, query} = props
  return (
    <InstantSearch searchClient={searchClient} indexName="products_NAME">
      <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
      />
    </InstantSearch>
  )
}

export const SearchBar = withRouter(UnwrappedSearchBar)

const UnwrappedHeader = props => {
  const {handleChange, handleSubmit, query} = props
  const refinement = props.location.pathname.slice(8)
  console.log('HEADERPROPS', props, query)
  return (
    <header className="search-bar-header">
      <SearchBox
        className="search-bar"
        translations={{placeholder: 'Search'}}
        onSubmit={handleSubmit}
        onChange={handleChange}
        defaultRefinement={refinement}
        value={query}
      />
    </header>
  )
}

export const Header = withRouter(UnwrappedHeader)

const UnwrappedContent = () => (
  <main>
    <Hits hitComponent={Hit} />
    <div>
      <Pagination showFirst={true} showLast={true} />
    </div>
  </main>
)

export const Content = withRouter(UnwrappedContent)
