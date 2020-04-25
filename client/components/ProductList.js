import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'

import {fetchProducts} from '../store'
import history from '../history'

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    console.log('PROPS', this.props)

    const handleClick = id => {
      history.push(`/products/${id}/editproduct`)
    }

    return (
      <div className="productList">
        {this.props.products.map(product => {
          return (
            <React.Fragment key={product.id}>
              <div className="productList-product">
                <Link to={`/products/${product.id}`}>
                  <img className="product-img" src={product.imageUrl} />
                  <h3>{product.name}</h3>
                </Link>
                <p>$ {product.price} USD</p>
                {this.props.isAdmin && (
                  <button type="button" onClick={() => handleClick(product.id)}>
                    Edit
                  </button>
                )}
              </div>
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.productList,
    isAdmin: !!state.user.isAdmin
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
