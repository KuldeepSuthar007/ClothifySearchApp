import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/zevilogo.png'
import searchicon from '../../assets/search.png'
import { WomenClothing } from '../../Data';


function Home() {
    const navigate = useNavigate();

    const [suggestion, setSuggestion] = useState(false);
    const [data, setData] = useState([]);

    const handlesearch = (e) => {
        navigate("/fashion-store")
    }
    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handlesearch();
        }
    };
    useEffect(() => {
        setData(WomenClothing)
    }, [setData])
    return (
        <div className={style.container}>

            <img src={logo} alt="" className={style.logo} />
            <div className={style.search}>
                <input type="text" placeholder='Search' onClick={() => setSuggestion(!suggestion)} onKeyUp={handleKeypress} />
                <img src={searchicon} alt="" onClick={handlesearch} />
            </div>
            <div>
                {suggestion ? <>  <div className={style.midcontainer}>
                    <h1>Latest Trends</h1>
                    <div className={style.cards}>{
                        data.slice(0, 6).map((item) => {
                            return (<div key={item.id} className={style.card} onClick={handlesearch}>
                                <img src={item.image} alt="" />
                                <h5>{item.title}</h5></div>)
                        })
                    }
                    </div>
                    <h3>Popular suggestion</h3>
                    <p>Striped shirt dress</p>
                    <p>Satin shirts</p>
                    <p>Denim jumpsuit</p>
                    <p>Leather dresses</p>
                    <p>Solid tshirts</p>

                </div></> : <></>}

            </div>
        </div>
    )
}

export default Home