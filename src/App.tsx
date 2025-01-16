import React, {useState} from "react";
import Like from "./components/Like";


function App() {
    const [game, setGame] = useState({id: 1, player: {name: 'Bug 1'}});

    const [pizza, setPizza] = useState({name: "Spicy Peperoni", toppings: ['Mushroom']});

    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id: 1, title: "Product 1", quantity: 1},
            {id: 2, title: "Product 2", quantity: 1}
        ]
    });


    const handleClick = () => {
        setGame({...game, player: {...game.player, name: "Fred"}});
        setPizza({...pizza, toppings: [...pizza.toppings, 'Onions']})
        setCart({...cart, items: cart.items.map(item => item.id == 1 ? {...item, quantity: item.quantity + 1} : item)})
        console.log(cart);
    }
    return (
        <>
            <Like onClick={() => handleClick()}/>
        </>
    );
}

export default App;
