import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, {message: "Name must contain at least 3 character(s)"}),
    age: z.number({invalid_type_error: "Age field is required."}).min(18, {message: "Age must be greater than or equal to 18"})
})

type FormData = z.infer<typeof schema>;


const Form = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (e: FieldValues) => {
        console.log(e);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'mb-3'}>
                <label htmlFor={"name"} className={'form-label'}>Name</label>
                <input id="name"
                       {...register('name')}
                       type={'text'}
                       className={'form-control'}/>
                {errors.name && <p className={'text-danger'}>{errors.name.message}</p>}
            </div>
            <div className={'mb-3'}>
                <label htmlFor={"age"} className={'form-label'}>Age</label>
                <input id="age"
                       {...register('age', {valueAsNumber: true})}
                       type={'number'}
                       className={'form-control'}/>
                {errors.age && <p className={'text-danger'}>{errors.age.message}</p>}
            </div>
            <button disabled={!isValid} className={'btn btn-primary'} type={'submit'}>Submit</button>
        </form>
    )
}

export default Form;
