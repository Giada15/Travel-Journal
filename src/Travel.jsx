import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarker } from "@fortawesome/free-solid-svg-icons"

export default function Travel(props){
    return(
        <div className="travel">
            <img className="travel--img" src={props.item.imageUrl} alt="" />
            <div className="travel--description">
                <div className="travel--location">
                    <i className="travel--location-icon"><FontAwesomeIcon icon={faMapMarker}/></i>
                    <p>{props.item.location}</p>
                    <a href="">View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <p className="travel--dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="travel--details">{props.item.description}</p>
            </div>
        </div>
    )
}