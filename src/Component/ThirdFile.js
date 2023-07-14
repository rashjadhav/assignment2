import React from 'react'

const ThirdFile = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "2%" }}>Assignment 2 (Mobile View)</h1>
            <div classNameName="container text-center" style={{ margin: "15%" }}>
                <div className="row bg-red-600" style={{ background: "blue", padding: "5%" }}>
                    <div className="col" style={{ background: "red", padding: "5%" }}>
                        <h1>Information About Forest</h1>

                        <p>The word forest broadly describes an area that has a large number of trees. There are three general types of forest that exist: temperate, tropical, and boreal. Experts estimate that these forests cover approximately one-third of Earth’s surface.

                            Temperate forests are found across eastern North America and Eurasia. The temperatures of temperate forests vary throughout the year because of the four distinct seasons at these latitudes. Precipitation is abundant and lends to fertile soil that is able to support diverse flora like maples, oak, and birch. Deer, squirrels, and bears are just a few examples of the fauna that call temperate forests home.</p>
                    </div>
                    <div className="col" style={{ background: "pink", padding: "1%" }}>
                        <img src='./nature3.jpg' style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ThirdFile
