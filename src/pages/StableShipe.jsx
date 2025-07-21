import React from 'react'
import El1 from "../assets/El1.png"
import El2 from "../assets/El2.png"
import El3 from "../assets/El3.png"
import El4 from "../assets/El4.png"
const StableShipe = () => {
    return (
        <div>
            <div className="absolute top-0 right-0">
                <img src={El1} alt="Elipse" />
            </div>
            <div className="absolute bottom-0 right-0">
                <img src={El2} alt="Elipse" />
            </div>
            <div className="absolute bottom-0 left-0">
                <img src={El3} alt="Elipse" />
            </div>
            <div className="absolute top-0 left-0">
                <img src={El4} alt="Elipse" />
            </div>
        </div>
    )
}

export default StableShipe