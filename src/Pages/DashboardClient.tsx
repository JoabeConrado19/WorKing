import { AiOutlineClockCircle, AiOutlineHome, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { BsPinMapFill } from 'react-icons/bs'
import { FaWallet } from 'react-icons/fa'
import { FiMapPin, FiUsers } from 'react-icons/fi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { ImExit } from 'react-icons/im'
import { StyledAside, StyledBody, StyledClientDash, StyledForm } from '../styles/StyledClientDash'
export const DashboardClient = () => {

    return (
        <StyledBody>
            <StyledClientDash>
                <header>
                    <AiOutlineMenu />
                    <h1>Home</h1>
                </header>
                <main>
                    <div className='input-div'>
                        <input placeholder='Digite aqui sua pesquisa' />
                        <h2>Lista de oportunidades </h2>
                    </div>

                    <section>
                        <StyledForm>
                            <div>
                                <input type="text" placeholder='Titulo da solicitação' />
                                <select name="" id="">
                                    <option value="">Categoria</option>
                                    <option value="TI">Área de TI</option>
                                    <option value="mecanico">Área de mecânica</option>
                                </select>
                            </div>
                            <textarea name="" id="" placeholder='Digite aqui a descrição'></textarea>
                        </StyledForm>
                    </section>
                    <ul>
                        <li className='conteiner'>
                            <div className='top-conteiner' >
                                <HiOutlineUserCircle />
                                <h3>Nome do Profissional</h3>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam, tenetur voluptas sed illum quidem eveniet dolore veniam eligendi non error libero, laborum quae ipsam atque quod rerum aliquam cum?</p>
                                <BsPinMapFill />

                                <div className='div-categoria'>
                                    <button>Editar</button>
                                    <button className='delete'>Deletar</button>
                                </div>





                            </div>
                        </li>
                        <li className='conteiner'>
                            <div className='top-conteiner' >
                                <HiOutlineUserCircle />
                                <h3>Nome do Profissional</h3>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam, tenetur voluptas sed illum quidem eveniet dolore veniam eligendi non error libero, laborum quae ipsam atque quod rerum aliquam cum?</p>
                                <BsPinMapFill />

                                <div className='div-categoria'>
                                    <button>Editar</button>
                                    <button className='delete'>Deletar</button>
                                </div>





                            </div>
                        </li>
                        <li className='conteiner'>
                            <div className='top-conteiner' >
                                <HiOutlineUserCircle />
                                <h3>Nome do Profissional</h3>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam, tenetur voluptas sed illum quidem eveniet dolore veniam eligendi non error libero, laborum quae ipsam atque quod rerum aliquam cum?</p>
                                <BsPinMapFill />

                                <div className='div-categoria'>
                                    <button>Editar</button>
                                    <button className='delete'>Deletar</button>
                                </div>





                            </div>
                        </li>
                        <li className='conteiner'>
                            <div className='top-conteiner' >
                                <HiOutlineUserCircle />
                                <h3>Nome do Profissional</h3>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam, tenetur voluptas sed illum quidem eveniet dolore veniam eligendi non error libero, laborum quae ipsam atque quod rerum aliquam cum?</p>
                                <BsPinMapFill />

                                <div className='div-categoria'>
                                    <button>Editar</button>
                                    <button className='delete'>Deletar</button>
                                </div>





                            </div>
                        </li>

                    </ul>
                </main>
            </StyledClientDash>

            <StyledAside>

                <HiOutlineUserCircle />
                <AiOutlineHome />
                <AiOutlineUser />
                <FiMapPin />
                <FaWallet />
                <AiOutlineClockCircle />
                <ImExit />
                <FiUsers />




            </StyledAside>
        </StyledBody>


    )
}
