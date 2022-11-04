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

export const AsideComponent = () => {
  return (
    <>
      <Aside>
        <div className="userName">
          <HiOutlineUserCircle />
          <h2>Name</h2>
        </div>
        <div className="container__menu">
          <ul className="menu">
            <li>
              <AiOutlineHome />
              <p>Home</p>
            </li>
            <li>
              <AiOutlineUser />
              <p>Perfil</p>
            </li>
            <li>
              <FiMapPin />
              <p>Localização</p>
            </li>
            <li>
              <FaWallet />
              <p>Carteira</p>
            </li>
            <li>
              <AiOutlineClockCircle />
              <p>Histórico</p>
            </li>
            <li>
              <ImExit />
              <p>Logout</p>
            </li>
            <li>
              <FiUsers />
              <p>Sobre nós</p>
            </li>
          </ul>
        </div>
      </Aside>
    </>
  );
};
