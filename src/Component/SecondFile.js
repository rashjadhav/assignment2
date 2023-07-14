import React from 'react'

const SecondFile = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "2%" }}>Assignment 2 (Tab View)</h1>
            <div classNameName="container text-center" style={{ margin: "15%" }}>
                <div className="row bg-red-600" style={{ background: "blue", padding: "5%" }}>
                    <div className="col" style={{ background: "red", padding: "5%" }}>
                        <h1>Information About Chandrayan</h1>

                        <p>It consists of a lander and a Rover which has been launched into the space by a rocket called LVM3 from SDSC SHAR, Sriharikota. While the Chandrayaan-2 which was launched in 2019 consisted of an orbiter, a Lander and a Rover, because of a software glitch the craft lost all communications just minutes before it was supposed to land and later it was crashed. Though it was not a complete failure, the orbiter is still functional and provides valuable data to the organization.</p>
                    </div>
                    <div className="col" style={{ background: "pink", padding: "1%" }}>
                        <img src='./nature5.jpg' style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default SecondFile
