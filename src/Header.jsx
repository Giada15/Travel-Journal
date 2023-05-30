import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return(
        <div className="header">
            <div className="header-details">
                <i><FontAwesomeIcon icon={faEarthAmericas }/></i>
                <p className="header-text">my travel journal.</p>
            </div>
        </div>
    )
}