import React from "react";

function Home(){
    return(
        <>
        <div className="bg-cyan-500  h-screen">
            <div className="">
               <h5>welcome studen</h5>
            </div>
            <div className="">
              <p>some information</p>
            </div>
            <div className="flex justify-around">
              <p className="p-2 px-4 bg-red-500 rounded-sm">exam</p>   <p className="p-2 px-4 bg-green-500 rounded-sm">result</p>
            </div>
        </div>
        </>
    )
}

export default Home;