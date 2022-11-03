import { Aside } from "./style";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
  AiOutlineClockCircle,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

export const AsideComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Aside>
        <div className="userName">
          <HiOutlineUserCircle />
          <h2>Name</h2>
        </div>
        <div className="container__menu">
          <ul className="menu">
            <Link to={"/dashboard"} className="Link-Component">
              <li>
                <AiOutlineHome />
                <p>Home</p>
              </li>
            </Link>
            <Link to={"/"} className="Link-Component">
            <li>
              <AiOutlineUser />
              <p>Perfil</p>
            </li>
            </Link>
            <Link to={"/location"} className="Link-Component">

            <li>
              <FiMapPin />
              <p>Localização</p>
            </li>
            </Link>

            <Link to={"/"} className="Link-Component">
            <li>
              <FaWallet />
              <p>Carteira</p>
            </li>
            </Link>
            <Link to={"/"} className="Link-Component">

            <li>
              <AiOutlineClockCircle />
              <p>Histórico</p>
            </li>
            </Link>
            <Link to={"/"} className="Link-Component">

            <li>
              <ImExit />
              <p>Logout</p>
            </li>
            </Link>
            <Link to={"/about-us"} className="Link-Component">

            <li>
              <FiUsers />
              <p>Sobre nós</p>
            </li>
            </Link>

          </ul>
        </div>
      </Aside>
    </>
  );
};
