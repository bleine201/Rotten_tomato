import React from 'react';
import Layout from '../components/Layout';

const passwordforget = () => {
    return (
       <Layout>
           <div className="pwdfgt">
               <h2>Password forgotten?</h2>
               <br/>
               <form action="" method="post">
                   <p>Please enter your email:</p>
                   <input type="text" name="email" placeholder="Email"/>
                   <br/>
                   <input className='btn' type="submit" value="Send"/>
               </form>
               <style jsx>{ `
                 .pwdfgt {
                        color: #0A0924;
                        display: block;
                        margin: auto;
                        width:30%;
                        max-width: 80%; 
                        border: 1px solid white;
                        margin-top: 5%;
                        border-radius: 5px;
                        background: white;
                        opacity: 0.5; 

                    }
                    h2 {
                        text-align: center;
                        margin-top: 5%;
                    }

                    form {
                        margin-left: 3%
                    }
                    input {
                        display: block;
                        margin: auto;
                        
                    }
                    p {
                        text-align: center;
                        
                    }
                    .btn{
                        border: none;
                        border-radius: 5px;
                        padding: 10px;
                        background: black;
                        color: white;
                        margin-bottom: 5%;
                    }
                    .btn:hover{
                        background:white;
                        color:black;
                    }
                    input {
                        background:black;
                        border-radius: 5px;
                        color:white;
                    }
                    `}

                </style>

           </div>
       </Layout>
    );
};

export default passwordforget;