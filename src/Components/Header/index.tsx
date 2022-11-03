import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledHeader } from "../Header/style";

export const Header = () => {
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
        <input type="text" placeholder="Digite sua Pesquisa" />
      </div>
    </StyledHeader>
  );
};
