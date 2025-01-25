import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import React from "react";
import categories from "../categories";

const schema = z.object({
    description: z.string().min(3, {message: "Description must contain at least 3 character(s)"}),
    amount: z.number({invalid_type_error: "Amount field is required."}).min(0.01),
    category: z.enum(categories, {errorMap: () => ({message: "Category is required."})})
})

export type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({onSubmit}: Props) => {
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm<ExpenseFormData>({resolver: zodResolver(schema)});

    return (
        <>
            <form onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset();
            })}>
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
                        {categories.map(category => <option key={category} value={category}>{category}</option>)}
                    </select>
                    {errors.category && (<p className="text-danger">{errors.category.message}</p>)}
                </div>
                <button disabled={!isValid} className={'btn btn-primary'} type={'submit'}>Submit</button>
            </form>
        </>
    )
}

export default ExpenseForm;
