import React, { Component } from 'react'

export default class Register extends Component {
    
    state={
        username:"",
        password:"",
        loginpin:"",
        message:'',
        redirect:false,
        verification:false,
    }
   
    async registerUser(){
        var formData = new FormData();
         var apiData={
             username:this.state.username,
             password:this.state.password,
             loginpin:this.state.loginpin
         }
         for(var name in apiData){
             formData.append(name,apiData[name])
         }
      //    console.log("data",JSON.stringify(apiData));
        
      //   const setting={
      //     method:"POST",
      //     headers:{
      //       Accept:"application/json",
      //       'Content-Type':"application/json",
      //       'X-APi-Key':'usf-user'
      //     },
      //     body:JSON.stringify({"username":this.state.username,"password":this.state.password, "login_pin": this.state.loginpin})
      //   };
      //   try {
      //     const fetchResponse = await fetch(`http://192.34.56.14/v1/registration/user`, setting);
      //     const data = await fetchResponse.json();
      //     console.log("data",data)
      // } catch (e) {
      //     return e;
      // }    
  
      
        const data=await fetch("http://192.34.56.14/v1/registration/user",{
            method:"POST",
            headers:{
              'Content-Type': 'application/json', 'X-Api-Key': 'usf-user',
              },
            body:JSON.stringify({"username":this.state.username,"password":this.state.password, "login_pin": this.state.loginpin})
            // body:formData
        });
        const myJson=await data.json()
        console.log("myJson",myJson);
        if(myJson.success){
            this.state({message:myJson.message,verification:true})
        }else{
           alert(myJson.message)   
        }
    }

    
    handleSubmit=(e)=>{
        e.preventDefault();
        this.registerUser();
        console.log("form data",this.state);
    }
    render() {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="bg-white p-16 rounded shadow-2xl w-2/3">
              <h2 className="text-3xl font-bold mb-10 text-gray-800">
                Create Your Account
              </h2>
              <form onSubmit={this.handleSubmit}> 
                <div>
                  <label className="block mb-1 font-bold text-gray-500">username</label>
                  <input
                   onChange={(e) => {this.setState({ username: e.target.value })}}
                    type="text"
                    
                    className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                    
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold text-gray-500">password</label>
                  <input
                  onChange={(e) => {this.setState({ password: e.target.value })}}
                    type="password"
                
                    className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold text-gray-500">login pin</label>
                  <input
                  onChange={(e) => {this.setState({ loginpin: e.target.value })}}
                    type="number"
                   
                    className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  />
                </div>
      
                <div className="flex items-center">
                  <input type="checkbox" id="agree" />
                  <label  className="ml-2 text-gray-700 text-sm">
                    I agree to the terms and privacy.
                  </label>
                </div>
                <button   className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300 mt-5">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        )
    }
}
