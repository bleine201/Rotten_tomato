import React from 'react';
import Layout from '../components/Layout';

const login = () => {
    return (
            <Layout>
                <div className='form-login'>
                    <h2>Login</h2>
                    <br/>
                        <form>
                            <p>Email:</p>
                            <input type="text" placeholder='email'/>
                            <br/>
                            <p>Password:</p>
                            <input type="password"/>
                            <br/>
                            <input className='btn' type="submit" value="Sign in"/>
                            <br/>
                            <p>Aren't register yet? <a href='/signup'>Please join us here</a></p>
                            <p> <a href="/passwordforget">Forgotten password?</a></p>
                        </form>

                </div>
                <style jsx>{ `
                 .form-login {
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
                        padding: 15px;
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
            </Layout>
    );
};

export default login;