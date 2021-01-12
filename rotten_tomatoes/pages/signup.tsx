import React from 'react';
import Layout from '../components/Layout';

const signup = () => {
    return (
        
            <Layout>
                <div className="join">
                    <h2>Sign up</h2>
                    <br/>
                    <form action="#">
                        <p>Username:</p>
                        <input type="text" placeholder="username"/><br/>
                        <p>Email:</p>
                        <input type="text" placeholder="email"/><br/>
                        <p>Password:</p>
                        <input type="password"/><br/>
                        <p>Confirm password</p>
                        <input type="password"/><br/>
                        <input className='btn' type="submit" value="Sign up"/><br/>
                        <p>You have already an account? <a href='/login'>Sign in here</a></p>
                    </form>
                    <style jsx>{ `
                 .join {
                        color: #0A0924;
                        display: block;
                        margin: auto;
                        width:30%;
                        max-width: 80%; 
                        border: 1px solid white;
                        margin-top: 3%;
                        border-radius: 5px;
                        background: white;
                        opacity: 0.5; 
                        margin-bottom: 5%;

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

export default signup;