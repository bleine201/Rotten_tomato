import React from 'react';
import Head from 'next/head';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

const Menu = () => {
    return (
        <div className="Menu">
            <Head>
                <nav>
                    <ul>
                        <li><a href="/"><img src="#" alt="logo"/></a></li>
                        <li><a href="#">Bookmark</a></li>
                        <section className="login">
                            
                            <button className='signin'><a href='/login'>Login</a></button>
                            <button className='signup'><a href='/signup'>Join</a></button>
                    </section>
                    </ul> 
                </nav>
                <div className='line'></div>
            </Head>
            <style jsx>{`
                nav {
                    width:100%;
                    margin-top: 4%;
                    margin-bottom: 3%;
                }
                ul {
                    display: flex; 
                    list-style-type: none;
                    float: center;
                    color: white;
                    font-size: 20px;
                    justify-content: space-between;
                }

                ul a {
                    color: white;
                    text-decoration: none;
                }

                li {
                    margin-right: 20%;
                }

                li:hover {
                    color:#F21B42;
                    text-decoration: underline;
                }

                .login {
                    display: flex;
                    margin-right: 10%;
        
                }
                .signin {
                    background:transparent;
                    border-radius:15px;
                    border:3px solid #F21B42;
                    cursor:pointer;
                    padding: 15%;
                    color:#ffffff;
                    font-size:20px;
                    text-decoration:none;
                    margin-right: 8%;
                    
                }
                .signin:hover {
                    background-color:#F21B42;
                    color:black
                }
                .signup {
                    background:transparent;
                    border-radius:15px;
                    border:3px solid black;
                    padding: 15%;
                    cursor:pointer;
                    color:#ffffff;
                    font-size:20px;
                    text-decoration:none;
                }
                .signup:hover {
                    background-color:black;
                    color:#F21B42;
                }
                .line {
                    border-top: 1px solid white;
                    width: 100px;
                    float: center;
                }
             `}    
            </style>
        </div>
    );
};

export default Menu;