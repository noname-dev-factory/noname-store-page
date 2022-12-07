import Product from "./Product"
import IProduct from "./interfaces/IProduct"
import './styles/Products.css'

export default function Products(): JSX.Element {
    const products: IProduct[] = [
        { name: 'Hoodie', price: 80000, img: '/images/hoodie.jpg' },
        { name: 'Beanie', price: 30000, img: '/images/beanie.jpg' },
        { name: 'Jacket', price: 190000, img: '/images/jacket.jpg' },
        { name: 'Pants', price: 100000, img: '/images/pants.jpg' },
        { name: 'Glasses', price: 25000, img: '/images/glasses.jpg' },
        { name: 'T-shirt', price: 50000, img: '/images/t-shirt.jpg' }
    ]

    return (
        <div className="products">
            <div className="products__wrapper flex">
                <div className="products__flex">
                    <div className="products__grid">
                        {products.map((product) =>
                            <Product
                                product={product}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}