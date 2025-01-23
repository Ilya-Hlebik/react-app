import {ChangeEvent, useState} from "react";
import {FormData} from "./ExpenseForm";

interface Props {
    data: FormData[];
    deleteElement: (id: number) => void;
}

const ExpenseList = ({data, deleteElement}: Props) => {
    const [selectedCategory, setSelectedCategory] = useState("0")

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target?.value)
    };

    const onClick = (id: number) => {
        deleteElement(id);
    }

    const formatAsDollar = (amount: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    const formatCategory = (category: string): string => {
        return category;
    };

    const filteredData = data.filter(el => selectedCategory === "0" ? el : el.category === selectedCategory)
    return (
        <>
            <select id="categories"
                    defaultValue={'0'} className="form-select mt-5 mb-3" aria-label="Default select example"
                    onChange={onChange}
            >
                <option value="0">All categories</option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
            </select>

            <table className="table table-bordered">
                {filteredData.length > 0 &&
                (<thead key={'title'}>
                <tr>
                    <th scope={'col'}>Description</th>
                    <th scope={'col'}>Amount</th>
                    <th scope={'col'}>Category</th>
                    <th scope={'col'}/>
                </tr>
                </thead>)}
                {<tbody> {filteredData
                    .map(el => (<tr key={el.description + el.id}>
                        <td>
                            {el.description}
                        </td>
                        <td>
                            {formatAsDollar(el.amount)}
                        </td>
                        <td>
                            {formatCategory(el.category)}
                        </td>
                        <td>
                            <button type="button" className={'btn btn-danger'}
                                    onClick={() => onClick(el.id || 0)}>Delete
                            </button>
                        </td>
                    </tr>))}
                {filteredData.length > 0 &&
                (<tr key={'total'}>
                    <td>Total</td>
                    <td>
                        {formatAsDollar(filteredData
                            .map(el => el.amount)
                            .reduce((previousValue, currentValue) => previousValue + currentValue, 0))}
                    </td>
                    <td/>
                    <td/>
                </tr>)}
                </tbody>
                }

            </table>
        </>
    )
};
export default ExpenseList;
