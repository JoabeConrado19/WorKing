import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { DashboardContext } from "../../contexts/dashboard";
import { StyledHeader } from "../Header/style";


export const Header = () => {

  const { setWorkers, workers, workerSearch, setWorkerSearch, searchWorkFilter }: any = useContext(DashboardContext)



  return (
    <StyledHeader>
      <div className="search">
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          <AiOutlineSearch />
        </button>
        <input type="text"
          placeholder="Digite sua Pesquisa"
          onChange={(event) => {
            setWorkerSearch(event.target.value);
            searchWorkFilter(event.target.value)

          }}
        />
      </div>
    </StyledHeader>
  );
};
