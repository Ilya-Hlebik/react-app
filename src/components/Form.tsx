import {FormEvent, useRef} from "react";

interface Props {

}

const Form = ({}: Props) => {
    let nameRef = useRef<HTMLInputElement>(null);
    let ageRef = useRef<HTMLInputElement>(null);
    const person = {name: '', age: 0}
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (nameRef.current) {
            person.name = nameRef.current.value;

        }
        if (ageRef.current) {
            person.age = parseInt(ageRef.current.value);
        }
        console.log(person);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className={'mb-3'}>
                <label htmlFor={"name"} className={'form-label'}>Name</label>
                <input ref={nameRef} id="name" type={'text'} className={'form-control'}/>
            </div>
            <div className={'mb-3'}>
                <label htmlFor={"age"} className={'form-label'}>Age</label>
                <input ref={ageRef} id="age" type={'number'} className={'form-control'}/>
            </div>
            <button className={'btn btn-primary'} type={'submit'}>Submit</button>
        </form>
    )
}

export default Form;
