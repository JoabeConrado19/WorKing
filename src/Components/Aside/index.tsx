import { Aside } from "./style";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
  AiOutlineClockCircle,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { FaWallet, FaWindowClose } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";

interface IAsideComponent {
  setMenu?: any;
  menu?: boolean;
}

export const AsideComponent = ({ setMenu, menu }: IAsideComponent) => {
  return (
    <>
      <Aside rigth={menu ? "auto" : "-300px"}>
        <div className="userName">
          <HiOutlineUserCircle />
          <h2>Name</h2>
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
                <AiOutlineHome />
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
              <Link to="/dashboard">
                <FaWallet />
                <p>Carteira</p>
              </Link>
            </li>

            <li>
              {/* Alterar redirecionamento */}
              <Link to="/historic">
                <AiOutlineClockCircle />
                <p>Histórico</p>
              </Link>
            </li>
            <li>
              <Link to="/">
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