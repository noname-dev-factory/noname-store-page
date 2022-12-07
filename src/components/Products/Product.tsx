import './styles/Product.css'

export default function Product({ ...props }): JSX.Element {
    const { product } = props

    return (
        <div className="product">
            <div className="product__img">
                <img
                    src={product.img}
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