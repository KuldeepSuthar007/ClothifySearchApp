import React, { useState } from 'react';
import style from "./Card.module.css"
import { RiHeart3Fill } from 'react-icons/ri';
import Rating from 'react-rating-stars-component';
// import heart from '../../assets/Vector (12).png'


function Card({ id, img, price, title, mrp, rating, review }) {
    const [wishlist, setWishlist] = useState(false);

    return (

        <div className={style.card}>
            <div className={style.cardimage} >
                {/* <img src={heart} alt="" className={`${style.heart} ${wishlist ? style.active : ""}`} onClick={() => setWishlist(!wishlist)} /> */}
                <RiHeart3Fill className={`${style.heart} ${wishlist ? style.active : ""}`} onClick={() => setWishlist(!wishlist)} />
                <img src={img} style={{}} alt="" />
                <div className={style.details}>View Product</div>
            </div>
            <h2 >{title}</h2>
            <div className={style.pricesection}>
                <span className={style.mrpprice}>Rs{mrp}</span>
                <span className={style.price}>Rs{price}</span>
            </div>
            <div className={style.rating}>
                <Rating
                    count={5}
                    value={rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                />
                <span >({review})</span>
            </div>
        </div >

    )
}

export default Card

