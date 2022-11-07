import { useEffect, useState } from "react";
import api from "../../services/api";

export interface iData {
    userId: string;
    Job: {
        Job_Name: string;
        Experience_Time: string;
    };
    id: string;

}

// export interface iSearch {
//     InputSearch: (data: iData) => Promise<void>
// }

export interface iSearch {


}


export const InputSearch = () => {

    const [products, setProducts] = useState<iData>({} as iData)
    const [filteredProducts, setFilteredProducts] = useState<iData>({} as iData)

    useEffect(() => {
        async function renderize() {

            await api.get('jobs')
                .then(res => setProducts(res.data))
                .then(res => console.log(filteredProducts))
                .catch(error => console.error(error));
        }

        function pesquisa(event: iData) {

            let array = []
            products.forEach(element => {

                if (element.name.toUpperCase().includes(event.target.value.toUpperCase())) {
                    array.push(element)
                }
                setFilteredProducts(array)
            })



        }

        renderize()
    }, [])


    return (
        <div className='input-div'>
            <input placeholder='Digite aqui sua pesquisa' />
            <h2>Lista de oportunidades </h2>
        </div>
    )
}


