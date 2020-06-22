import React from "react";
import {ReactComponent as logo} from "../../images/logo.svg"
import "./GeneralTemplate.css";

const GeneralTemplate = ({children}) => {
    return(
        <div className="generalTemplate--container">
            <nav>
                <div>
                    <a href="/"><logo/></a>
                       <ul>
                          <a><li href="/">Home</li></a>
                          <a><li href="/login">Entrar</li></a>
                          <a><li href="/cadastro">Cadastro</li></a>
                       </ul>
                </div>
            </nav>
            {children}
        </div>
    );
};

export default GeneralTemplate;