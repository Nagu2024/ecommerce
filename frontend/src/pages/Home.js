import { Fragment, useEffect, useState } from 'react'
import ProductCart from "../components/ProductCart";
import { useSearchParams } from 'react-router-dom';



export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchparams, setSearchparams] = useSearchParams();
    console.log(searchparams);


    useEffect(() => {

        fetch(process.env.REACT_APP_API_URL + '/products?' + searchparams.toString())
            .then(res => res.json())
            .then(res => setProducts(res.product))
    }, [searchparams])

    console.log(products);

    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">

                {products.map(product => <ProductCart product={product} />)}


            </div>
        </section>
    </Fragment>

}

