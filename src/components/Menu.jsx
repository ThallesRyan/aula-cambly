import "./menu.css"
import { BsChatLeftTextFill } from "react-icons/bs"
import { BsCalendarEvent } from "react-icons/bs"
import { FiBell } from 'react-icons/fi'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'

export default (props) => {
    return (
        <div className="menu">
            <div>
                <nav>
                    <a href="">LOGO</a>
                    <a href="">PROFESSORES</a>
                    <a href="">CURRICULOS</a>
                    <a href="">PROGRESSO</a>
                </nav>
            </div>


            <div className="icones">
                <div>
                    <button className="botaoPlano"> ESCOLHA SEU PLANO</button>
                </div>

                <div>
                    <a className="iconsLink" href=""><BsChatLeftTextFill className="icons" /></a>
                </div>

                <div>
                    <FiBell />
                </div>

                <div>
                    <BsCalendarEvent />
                </div>

                <div>
                   <AiFillQuestionCircle />
                </div>

                <div><AiFillGoogleCircle /></div>
            </div>
        </div>
    )
}