import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
// @ts-ignore
import back from './back.png';
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

export const ItemPage: React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const goBack = () => navigate(-1);

    const getProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                dispatch({type: "SET_ITEM", payload: json});
            })
    }

    useEffect(() => {
        getProduct()
    }, [])

    const post: IItem = useTypedSelector(state => state.item.item)


    return (
        <div>
            <button onClick={goBack} className="back-button"><img src={back} alt="" className="item-image"></img>Вернуться
                к списку товаров
            </button>
            <div className="item">
                <div className="image">
                    <img src={post.image} alt=""></img>
                </div>
                <div className="options">
                    <div className="category"><span>{post.category}</span></div>
                    <div className="title">{post.title}</div>
                    <div className="description">{post.description}</div>
                    <div className="price">{post.price} $</div>
                    <button>Купить</button>
                </div>
            </div>
        </div>
    )
}