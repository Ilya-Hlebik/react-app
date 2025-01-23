import {FieldValues, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useState} from "react";
import ExpenseList from "./ExpenseList";

const schema = z.object({
    id: z.number().optional(),
    description: z.string().min(3, {message: "Description must contain at least 3 character(s)"}),
    amount: z.number({required_error: "Amount field is required."}),
    category: z.string().refine((value) => value !== '0', {message: "Please select category"})
})

export type FormData = z.infer<typeof schema>;

const ExpenseForm = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)});
    const [data, setData] = useState<FormData[]>([])

    const onSubmit = (e: FieldValues) => {
        const newFormData = {
            id: data.length === 0 ? 1 : (data[data.length - 1].id || 0) + 1,
            description: e.description,
            category: e.category,
            amount: e.amount
        }
        setData([...data, newFormData])
    };

    const onDelete = (id: number) => {
        setData(data.filter(el => el.id !== id))
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'mb-3'}>
                    <label htmlFor={"description"} className={'form-label'}>Description</label>
                    <input id="description"
                           {...register('description')}
                           type={'text'}
                           className={'form-control'}/>
                    {errors.description && <p className={'text-danger'}>{errors.description.message}</p>}
                </div>
                <div className={'mb-3'}>
                    <label htmlFor={"amount"} className={'form-label'}>Amount</label>
                    <input id="amount"
                           {...register('amount', {valueAsNumber: true})}
                           type={'number'}
                           className={'form-control'}/>
                    {errors.amount && <p className={'text-danger'}>{errors.amount.message}</p>}
                </div>
                <div className={'mb-3'}>
                    <label htmlFor={"category"} className={'form-label'}>Category</label>
                    <select id="category"
                            {...register('category')}
                            defaultValue={'0'} className="form-select" aria-label="Default select example">
                        <option value="0"/>
                        <option value="Groceries">Groceries</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                    {errors.category && (<p className="text-danger">{errors.category.message}</p>)}
                </div>
                <button disabled={!isValid} className={'btn btn-primary'} type={'submit'}>Submit</button>
            </form>
            <ExpenseList data={data} deleteElement={onDelete}/>
        </>
    )
}

export default ExpenseForm;
