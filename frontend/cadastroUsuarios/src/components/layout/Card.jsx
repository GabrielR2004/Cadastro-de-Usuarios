import "./Card.css"
import React from "react";

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="titulo"><strong>{props.titulo}</strong></div>
            <div className="conteudo">
                {props.children}
            </div>
        </div>
    )
}