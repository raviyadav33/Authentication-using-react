import React, { Component } from 'react'
import Profile from './Profile'
export default class Login extends Component {
 state={
     username:"",
     password:"",
     message:"",
     verification:"",
     redirect:false,
 };


 async authenticate(){
     var formData=new FormData();
     var apiData={
         username:this.state.username,
         password:this.state.password,
     };
     for(var name in apiData){
         formData.append(name,apiData[name])
     }
     const myJson=await fetch("http://192.34.56.14/v1/login",{
         method:"POST",
         headers:{
            Accept: 'application/json', 'Content-Type': 'application/json', 'X-Api-Key': 'usf-user',   
         },
         body:formData
     });
     if("token" in myJson){
         console.log("myJsonData",myJson);
         this.setState({redirect:true});
         await localStorage.setItem("token",myJson.token)
     }else{
         alert(myJson.message)
     }
 }
 

 
 
 
    render() {
        return (
            <div>
        <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Sign In Here
          </h2>
          <form onSubmit={this.handleLoginSubmit}> 
          <div>
            <label className="block mb-1 font-bold text-gray-500">username</label>
            <input
           onChange={(e) => {this.setState({ username: e.target.value })}}
              type="text"
              value={username}
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-gray-500">password</label>
            <input
               onChange={(e) => {this.setState({ password: e.target.value })}}
              type="password"
              value={password}
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
          </div>
          <button  className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300 mt-5">
            Sign In
          </button>
              </form>  
              </div>
              </div>
              
     
              </div>
            
        )
    }
}
