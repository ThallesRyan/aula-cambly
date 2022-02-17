import "./menu.css"
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
                    (Conversas)
                </div>
                <div>
                    (sininho)
                </div>
                <div>
                    Calendário
                </div>

                <div>
                    ?
                </div>

                <div>Conta Google</div>
            </div>
        </div>
    )
}