import React, { useEffect, useState } from 'react'
import style from './Product.module.css'
import logo from '../../assets/zevilogo.png'
import Card from '../../components/Card/Card'
import Rating from 'react-rating-stars-component';
import { WomenClothing } from '../../Data';

function Product() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [selectBrand, setSelectBrand] = useState([]);
    const [selectPrice, setSelectPrice] = useState([]);
    const [selectRating, setSelectRating] = useState(null);


    const handlebrand = (brand) => {
        setSelectBrand((prevSelected) =>
            prevSelected.includes(brand)
                ? prevSelected.filter((item) => item !== brand)
                : [...prevSelected, brand]
        );
    }
    const handleprice = (pricerange) => {
        setSelectPrice((prevSelected) =>
            prevSelected.includes(pricerange)
                ? prevSelected.filter((item) => item !== pricerange)
                : [...prevSelected, pricerange]
        );
    }
    const handleRating = (rating) => {
        setSelectRating((prevRating) => (prevRating === rating ? null : rating));

    };

    const filterdata = data.filter((item) => {
        const matchsearch = item.title.toLowerCase().includes(search.toLowerCase());
        const brandfilter = selectBrand.length === 0 || selectBrand.includes(item.brand);
        const pricefilter = selectPrice.length === 0 || (selectPrice.includes("under500") ? item.price <= 500 : "" || selectPrice.includes("1000to3000") ? item.price >= 1000 && item.price <= 3000 : "");
        const ratingfilter = item.rating >= selectRating
        return matchsearch && brandfilter && pricefilter && ratingfilter;
    })



    useEffect(() => {
        setData(WomenClothing)
    }, [search, setData])

    return (
        <div className={style.container}>
            <img src={logo} alt="" className={style.logo} />
            <div className={style.search}>
                <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className={style.midcontainer}>
                <div className={style.leftsec}>
                    <h1>Search Results</h1>
                    <div id="list1" className={style.dropdown_check_list} >
                        <span className={style.anchor}  >BRAND</span>
                        <ul className={style.items}>
                            <li><input type="checkbox" onChange={() => handlebrand("H&M")} />H&M </li>
                            <li><input type="checkbox" onChange={() => handlebrand("Mongo")} />Mongo</li>
                        </ul>
                        <hr />
                    </div>

                    <div id="list1" className={style.dropdown_check_list}>
                        <span className={style.anchor} >PRICE RANGE</span>
                        <ul className={style.items}>
                            <li><input type="checkbox" onChange={() => handleprice("under500")} />Under 500</li>
                            <li><input type="checkbox" onChange={() => handleprice("1000to3000")} />1000 To 3000</li>
                        </ul>
                        <hr />
                    </div>

                    <div id="list1" className={style.dropdown_check_list}>
                        <span className={style.anchor} >RATINGS</span>
                        <ul className={style.items}>
                            <li><input type="checkbox" onChange={() => handleRating(5)} /> <Rating
                                count={5}
                                value={5}
                                size={21}
                                activeColor="#ffd700"
                                edit={false}
                                classNames={style.rating}

                            /></li>
                            <li><input type="checkbox" onChange={() => handleRating(4)} /> <Rating
                                count={5}
                                value={4}
                                size={21}
                                activeColor="#ffd700"
                                edit={false}
                            /></li>
                            <li><input type="checkbox" onChange={() => handleRating(3)} /> <Rating
                                count={5}
                                value={3}
                                size={21}
                                activeColor="#ffd700"
                                edit={false}

                            /></li>
                            <li><input type="checkbox" onChange={() => handleRating(2)} /> <Rating
                                count={5}
                                value={2}
                                size={21}
                                activeColor="#ffd700"
                                edit={false}
                            /></li>
                            <li><input type="checkbox" onChange={() => handleRating(1)} /> <Rating
                                count={5}
                                value={1}
                                size={21}
                                activeColor="#ffd700"
                                edit={false}
                            /></li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className={style.rightsec}>
                    {filterdata.length > 0 ? (filterdata.map((item, index) => {
                        return (<Card key={item.id} id={item.id} img={item.image} brand={item.brand} title={item.title} price={item.price} mrp={item.mrp} rating={item.rating} review={item.review} />)
                    })) : (<h1>Product not found.</h1>)
                    }


                </div>
            </div>

        </div>
    )
}

export default Product