import {FormEvent, useState} from "react";

interface Props {

}

const Form = ({}: Props) => {
    const [person, setPerson] = useState({name: '', age: ''});
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(person);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className={'mb-3'}>
                <label htmlFor={"name"} className={'form-label'}>Name</label>
                <input id="name" value={person.name} onChange={(event) => setPerson({...person, name: event.target.value})}  type={'text'}
                       className={'form-control'}/>
            </div>
            <div className={'mb-3'}>
                <label htmlFor={"age"} className={'form-label'}>Age</label>
                <input id="age" value={person.age} onChange={(event) => setPerson({...person, age: event.target.value})}
                       type={'number'}
                           className={'form-control'}/>
            </div>
            <button className={'btn btn-primary'} type={'submit'}>Submit</button>
        </form>
    )
}

export default Form;
