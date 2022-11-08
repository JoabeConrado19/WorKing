import { HiOutlineUserCircle } from "react-icons/hi";
import {
  AiOutlineClockCircle,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { FaWallet, FaWindowClose } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { Aside } from "./style";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../../contexts/dashboard";

export interface IAsideComponent {
  setMenu?: any;
  menu?: boolean;
}

export const AsideComponent = () => {

  const { getUserInfo, userImg, userName, menu, setMenu}:any = useContext(DashboardContext)

  useEffect(()=>{
    getUserInfo()
  }, [])

  return (
    <>
      <Aside rigth={menu ? "auto" : "-300px"}>
        <div className="userName">
          <img src={userImg} alt="" />
          <h2>{userName}</h2>
          <button
            onClick={(event) => {
              event.preventDefault();
              setMenu(!menu);
            }}
          >
            <FaWindowClose />
          </button>
        </div>
        <div className="container__menu">
          <ul className="menu">
            <li>
              <Link to="/dashboard">
                <AiOutlineHome className="iconMenu"/>
                <p>Home</p>
              </Link>
            </li>
            <li>
              {/* Alterar redirecionamento */}
              <Link to="/dashboard">
                <AiOutlineUser />
                <p>Perfil</p>
              </Link>
            </li>
            <li>
              {/* Alterar redirecionamento */}
              <Link to="/location">
                <FiMapPin />
                <p>Localização</p>
              </Link>
            </li>
            <li>
              {/* Alterar redirecionamento */}
              <Link to="/wallet">
                <FaWallet />
                <p>Carteira</p>
              </Link>
            </li>

            <li>
              {/* Alterar redirecionamento */}
              <Link to="/dashboard">
                <AiOutlineClockCircle />
                <p>Histórico</p>
              </Link>
            </li>
            <li >
              <Link to="/" >
                <ImExit />
                <p>Logout</p>
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <FiUsers />
                <p>Sobre nós</p>
              </Link>
            </li>
          </ul>
        </div>
      </Aside>
    </>
  );
};
