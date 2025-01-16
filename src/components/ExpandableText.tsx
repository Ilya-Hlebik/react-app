import {useState} from "react";

interface Props {
    maxChars?: number;
    children: string;
}

const ExpandableText = ({maxChars = 100, children}: Props) => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    };
    const getTextFormatted = () => {
        if (children.length < maxChars || clicked) {
            return children
        } else {
            return children.substring(0, maxChars) + "..."
        }
    };
    return (
        <p>
            {getTextFormatted()}
            {children.length > maxChars && <button onClick={handleClick}>{clicked ? 'Less' : 'More'}</button>}
        </p>
    )
}

export default ExpandableText;
