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
<<<<<<< HEAD
import { Link } from "react-router-dom";

interface IAsideComponent {
  setMenu: any;
  menu: boolean;
}

export const AsideComponent = ({ setMenu, menu }: IAsideComponent) => {
=======
import { Link, useNavigate } from "react-router-dom";

export const AsideComponent = () => {
  const navigate = useNavigate();
>>>>>>> 04e90912bede871abde157d98b7221b905890274
  return (
    <>
      <Aside rigth={menu ? 'auto' : '-300px'}>
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
<<<<<<< HEAD
            <li>
              <Link to="/dashboard">
                <AiOutlineHome />
                <p>Home</p>
              </Link>
            </li>
=======
            <Link to={"/dashboard"} className="Link-Component">
              <li>
                <AiOutlineHome />
                <p>Home</p>
              </li>
            </Link>
            <Link to={"/"} className="Link-Component">
>>>>>>> 04e90912bede871abde157d98b7221b905890274
            <li>
              {/* Alterar redirecionamento */}
              <Link to="/dashboard">
                <AiOutlineUser />
                <p>Perfil</p>
              </Link>
            </li>
            </Link>
            <Link to={"/location"} className="Link-Component">

            <li>
              {/* Alterar redirecionamento */}
              <Link to="/dashboard">
                <FiMapPin />
                <p>Localização</p>
              </Link>
            </li>
            </Link>

            <Link to={"/"} className="Link-Component">
            <li>
              {/* Alterar redirecionamento */}
              <Link to="/dashboard">
                <FaWallet />
                <p>Carteira</p>
              </Link>
            </li>
            </Link>
            <Link to={"/"} className="Link-Component">

            <li>
              {/* Alterar redirecionamento */}
              <Link to="/dashboard">
                <AiOutlineClockCircle />
                <p>Histórico</p>
              </Link>
            </li>
            </Link>
            <Link to={"/"} className="Link-Component">

            <li>
              <Link to="/">
                <ImExit />
                <p>Logout</p>
              </Link>
            </li>
            </Link>
            <Link to={"/about-us"} className="Link-Component">

            <li>
              <Link to="/about-us">
                <FiUsers />
                <p>Sobre nós</p>
              </Link>
            </li>
            </Link>

          </ul>
        </div>
      </Aside>
    </>
  );
};
