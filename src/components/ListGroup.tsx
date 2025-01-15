import {useState} from "react";
import styled from "styled-components";

interface ListItemProps {
    active: boolean;
}

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {

    const [selectedIndex, setsSelectedIndex] = useState(0);
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <List>
                {items.map((item, index) => (
                    <ListItem
                        active={index === selectedIndex}
                        key={item}
                        onClick={() => {
                            setsSelectedIndex(index)
                            onSelectItem(item)
                        }}
                    >{item}</ListItem>))}
            </List>
        </>
    );
}

const List = styled.ul`
    list-style: none;
    padding: 0;
`;


const ListItem = styled.li<ListItemProps>`
     padding: 5px 0;
     background: ${props => props.active ? 'blue' : 'none'}
`;
export default ListGroup;
