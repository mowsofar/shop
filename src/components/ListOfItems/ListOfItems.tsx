import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface IItem {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

const ListOfItems: React.FC = () => {

    const linkStyle: any = {
        textDecoration: "none",
    }

    const dispatch = useDispatch();

    const getItems = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                dispatch({type: "SET_ITEMS", payload: json})
            })
    }

    useEffect(() => {
        getItems()
    }, [])

    const mas: Array<IItem> = useTypedSelector(state => state.items.items);

    return (
        <div className="block">
            {mas.map((item: IItem) => (
                <div className="card">
                    <div className="image">
                        <img src={item.image} alt=""></img>
                    </div>
                    <div className="desc">
                        <div className="title"><Link key={item.id} to={`/catalog/${item.id}`} className="title"
                                                     style={linkStyle}>{item.title}</Link></div>
                        <div className="price">{item.price} $</div>
                        <button>Купить</button>
                    </div>
                </div>
            ))}

        </div>)
}

export default ListOfItems;
