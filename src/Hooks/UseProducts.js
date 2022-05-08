import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pure-harbor-50785.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return [products, setProducts];

}

export default UseProducts;