import React from 'react';
import Head from 'next/head';
import logo from '../public/logo.png';


const Menu = () => {
    return (
        <div className="Menu">
            <Head>
                <nav>
                    <ul>
                        <li><a href="/"><img src={logo} alt="logo"/></a></li>
                        {/* <li><a href="/favorite">Favorites</a></li> */}
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
                    border: none;
                    border-radius: 5px;
                    background: black;
                    padding: 15%;
                    color:#ffffff;
                    font-size:20px;
                    text-decoration:none;
                    margin-right: 8%;
                    
                }
                .signin:hover {
                    background-color:#F21B42;
                    color:black;
                }
                .signup {
                    border: none;
                    border-radius: 5px;
                    background: black;
                    color: white;
                    padding: 15%;
                    cursor:pointer;
                    font-size:20px;
                    text-decoration:none;
                }
                .signup:hover {
                    background:#022859;
                    color:black;
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