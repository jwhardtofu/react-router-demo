import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://v2.jokeapi.dev/joke/Any?amount=10'
        );
        const items = await data.json();
        console.log(items);
        setItems(items.jokes);
    }

    return (
        <div>
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        {item.setup}
                    </Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;
