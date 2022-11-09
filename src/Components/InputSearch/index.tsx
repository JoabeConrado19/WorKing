import { useContext, useEffect } from "react";
import { DashboardContext } from "../../contexts/dashboard";
import api from "../../services/api";

export const InputSearch = () => {
    const { setWorkers, setSearch, searchFilter, search }: any = useContext(DashboardContext)

    useEffect(() => {
        api.get('jobs')
            .then(res => setWorkers(res.data))
            .catch(error => console.error(error));
    }, [])



    // searchResult?.length > 0 && setFilteredProducts(searchResult)

    return (
        <div className='input-div'>
            <input onChange={(event) => {
                setSearch(event.target.value)
                searchFilter(event.target.value)
            }

            }
                value={search}
                placeholder='Digite aqui sua pesquisa' />
            <h2>Lista de oportunidades </h2>
        </div>
    )
}


