import './styles/Product.css'

export default function Product({ ...props }): JSX.Element {
    const { product } = props

    return (
        <div className="product">
            <div className="product__img">
                <img
                    src="//cdn.shopify.com/s/files/1/0311/9398/9260/products/blurred_mesh_shirt_black_camisa_camisetas_2_720x720.jpg?v=1669835532"
                    alt={product.name}
                    width="300"
                />
            </div>
            <h3 className="product__name">{product.name}</h3>
            <span className="product__price">
                ${Number(product.price).toLocaleString('es')}
            </span>
        </div>
    )
}