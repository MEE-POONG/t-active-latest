import React from 'react'
import data from "./data";
const TeamOne = (props) => {
    const itemSlice = data.slice(0 , props.item)
    return (
        <div className="row">
            {itemSlice.map((value , i ) => (
                <div className={`${props.column}`} key={i}>
                    <div className={`team ${props.teamStyle}`}>
                        <div className="thumbnail">
                            <img className="w-100" src={`/assets/images/about/${i+1}.jpg`} alt="Blog Images"/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TeamOne
