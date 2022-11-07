import { useState } from "react";
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

    const [products, setProducts] = useState<iData[]>([] as iData[])
    const [search, setSearch] = useState('')
    const [filteredProducts, setFilteredProducts] = useState<iData[]>([] as iData[])


    async function renderize() {

        await api.get('jobs')
            .then(res => setProducts(res.data))
            .then(res => console.log(products))
            .catch(error => console.error(error));
    }
    renderize()

    // function pesquisa(event: string) {

    //     // let array = []
    //     // products.forEach(element => {

    //     //     if (element.name.toUpperCase().includes(event.toUpperCase())) {
    //     //         array.push(element)
    //     //     }
    //     //     setFilteredProducts(array)
    //     // })
    // }
    const searchResult = products.filter((element) => element.Job.Job_Name === search)


    return (
        <div className='input-div'>
            <input onChange={(event) => setSearch(event.target.value)}
                placeholder='Digite aqui sua pesquisa' />
            <h2>Lista de oportunidades </h2>
        </div>
    )
}


