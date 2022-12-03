import React from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";
import ItemPage from "../ItemPage";
import {categories} from "../../constants/categories";
import {useTypedSelector} from "../../hooks/useTypedSelector";
// @ts-ignore
import back from "../ItemPage/back.png";

interface IItem {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export const CategoryItems: React.FC = () => {

    const {category} = useParams();

    const mas  = useTypedSelector(state => state.items.items);

    const categoryItemsMas = category ? mas.filter((item: IItem) => item.category===categories[category]): [];

    return (
        <div className="block">
            {categoryItemsMas.map((item: IItem) => (
                <div className="card">
                    <div className="image">
                        <img src={item.image} alt=""></img>
                    </div>
                    <div className="desc">
                        <div className="title"><Link key={item.id} to={`/catalog/${item.id}`}
                                                     className="title">{item.title}</Link></div>
                        <div className="price">{item.price} $</div>
                        <button>Купить</button>
                    </div>
                    <Routes>
                        <Route path={String(item.id)} element={<ItemPage/>}></Route>
                    </Routes>
                </div>
            ))}
        </div>
    )

}