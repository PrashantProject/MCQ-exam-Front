import React from "react";


function Result(){
    return(
        <>
        <div className="bg-cyan-500 flex items-center justify-center h-screen">
            <div className="flex bg-purple-500">
               <div className="border-2 p-3">
                 <h4 >name</h4>
                 <p className="border-t-2 border-indigo-500">prashant</p>
               </div>
               <div className="border-2  p-3">
                <h4>Roll No.</h4>
                <p className="border-t-2 border-indigo-500">3434</p>
               </div>
               <div className="border-2  p-3">
                <h4>Total question</h4>
                <p className="border-t-2 border-indigo-500">100</p>
               </div>
               <div className="border-2  p-3">
                <h4>Attempt</h4>
                <p className="border-t-2 border-indigo-500">30</p>
               </div>
               <div className="border-2  p-3">
                <h4>currect</h4>
                <p className="border-t-2 border-indigo-500">kokok</p>
               </div>
            </div>
        </div>
        </>
    )
}


export default Result;