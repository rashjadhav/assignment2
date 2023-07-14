import React, { useRef } from 'react'
import logomobile from "../Component/nature2.jpg";
import logodesktop from "../Component/nature5.jpg";
// import logodesktop from "../Component/nature3.jpg";

const MainPage = () => {
    return (
        <div>

            <h1 style={{ textAlign: "center", margin: "2%" }}>Assignment 2 (desktop View)</h1>

            <div className="container text-center" style={{ margin: "6%" }}>
                <div className="row bg-red-600" style={{ background: "blue", padding: "5%" }}>
                    <div className="col" style={{ background: "red", padding: "5%" }}>
                        <h1>Information About Nature</h1>
                        <p>Nature, in the broadest sense, is equivalent to the natural world, physical world, or material world. "Nature" refers to the phenomena of the physical world, and also to life in general. It ranges in scale from the subatomic to the cosmic.

                            The term "nature" may refer to living plants and animals, geological processes, weather, and physics, such as matter and energy. The term is often refers to the "natural environment" or wilderness—wild animals, rocks, forest, beaches, and in general areas that have not been substantially altered by humans, or which persist despite human intervention.  </p>
                    </div>
                    {/* {window.innerWidth > 1024 ?
                        <div className="col" style={{ background: "pink", padding: "1%" }}>
                            <img src='./nature2.jpg' style={{ width: "100%", height: "100%" }} />
                        </div> :
                        <div className="col" style={{ background: "pink", padding: "1%" }}>
                            <img src='./nature5.jpg' style={{ width: "100%", height: "100%" }} />
                        </div>} */}

                    <div className="col" style={{ background: "pink", padding: "1%" }}>
                        <img src='./nature2.jpg' style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>

            </div>



        </div >
    )
}

export default MainPage

