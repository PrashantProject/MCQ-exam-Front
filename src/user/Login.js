import React from "react";



function Login(){
    return(
    <>
     <div className="bg-cyan-500 flex items-center justify-center h-screen">
      <form className="flex flex-col bg-emerald-800 p-4 rounded-sm">
        <input className="m-1 p-4 rounded-sm"  type="text" placeholder="email"/>
        <input  className="m-1 p-4 rounded-sm" type="text" placeholder="password"/>
        <button className="bg-blue-800 p-1 m-1">Login</button>
      </form>
     </div>
    </>
    )
}

export default Login