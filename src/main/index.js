import './index.css';
import axios from 'axios';
import React from 'react';

function MainPages() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(
        function(){
            axios.get("https://e282e94e-6827-4f6a-a1ef-0d92deaa6f9a.mock.pstmn.io/products")
            .then(function(result){
                const products = result.data.products;
                setProducts(products);
            }).catch(function(error){
                console.error("에러 발생 : ", error);
            });
        },[])

    
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png"></img>
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png"></img>
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {
                        products.map(function(product, index){
                            return (
                            <div className="product-card">
                                <div>
                                    <img className="product-img" src={product.imageUrl}></img>
                                </div>
                                <div className="product-contents">
                                    <span className="product-name">
                                        {product.name}
                                    </span>
                                    <span className="product-price">
                                        {product.price}원
                                    </span>
                                    <div className="product-seller">
                                        <img className="product-avatar" src="images/icons/avatar.png"></img>
                                        <span>{product.seller}</span>
                                    </div>
                                </div>
                            </div>);
                        })
                    }
                    
                </div>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default MainPages;