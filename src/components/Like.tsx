import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import styled from "styled-components";
import {useState} from "react";

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {
    const [status, setStatus] = useState(false);
    return (
        <ButtonWrapper onClick={() => {
            setStatus(!status);
            onClick();
        }}>
            {status ? <AiFillHeart size={"20"} color={'#ff6b81'}/> :
                <AiOutlineHeart size={"20"} color={'#ff6b81'}/>
            }
        </ButtonWrapper>
    )
}

export default Like;

const ButtonWrapper = styled.button`
    display:  inline-flex ;
    align-items:  center; 
    justify-content:  center;
    width:  2em;  
    height:  2em;  
    padding:  0;  
    border:  none; 
    border-radius:  50%;  
    background-Color:  transparent;  
    cursor:  pointer;
    color: red;
`;
