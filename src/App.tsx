import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import {useState} from "react";
import ListGroup from "./components/ListGroup";

import { BsCalendar2Event } from "react-icons/bs";


function App() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]
    const handleSelectItem = (item: string) => {
        console.log(item)
    }
    const [alertVisible, setAlertVisibility] = useState(false);
    return (
        <>
            <BsCalendar2Event color="red" size="40" />
            <Button  color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
            {<div><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/></div>}
        </>
    );
}

export default App;
