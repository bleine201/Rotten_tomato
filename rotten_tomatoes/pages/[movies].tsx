import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Favorite from '@material-ui/icons/Favorite';


const Movieid = () => {
    const router = useRouter();

    return (
        <Layout>  
            <a href="/"><button className='back'>Back</button></a>
            <div className="movie">
                <div className='main'>
                    <h2>Title{router.query.movie} <span>Rating</span> </h2>
                    <div className='fav'><Favorite /></div>
                    <img src="https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg" alt="movie-poster"/>
                </div>
                <div className='plot'>
                     
                    <p className='sum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                    Donec scelerisque sollicitudin enim eu venenatis.</p>
                    <p><span>Genre:</span> Lorem</p>
                    <p><span>Producer:</span> Lorem ipsum Ltd </p>
                    <p><span>Release:</span> 2019</p>
                </div>
            </div>
            <section className="comment">
                <h4>Review</h4>
                <div className="display-comment">
                    <p>Author</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. </p>
                </div>
                <div className="add-comment">
                    <form action="#" method="post">
                        <textarea name="" id="" cols="100" rows="10"></textarea>
                        <input type="submit" value="Comment" className='btn-cmt' />
                    </form>
                    

                </div>

            </section>
            <style jsx>
                {`

                    .back {
                        margin-top: 3%;
                        margin-left:3%;
                        border: none;
                        padding : 1%;
                        border-radius: 5px;
                        background: black;
                        color: white;
                    }

                    .back:hover {
                        background:#0093E9;
                        color:white;
                    }

                    .movie {
                        color:white;
                        display: flex;
                        width: 100%;
                        max-width: 960px;
                        margin: 0 auto;  
                    }
                    .sum {
                        padding-right: 5em;
                    }
                    .comment {
                        display: block;
                        width: 100%;
                        max-width: 960px;
                        margin: 0 auto;
                        margin-top:3%;

                    }

                    .display-comment {
                        padding: 3%;
                        border-radius: 15px;
                        background: ghostwhite;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                        margin-bottom:3%; 
                    }

                    h4 {
                        text-align: center;
                        font-size: 20px;
                        border-top: 1px solid;
                        margin-bottom: 3%;
                        font-weight: bold;
                        color: white;
                    }

                    textarea {
                        border-radius: 15px;
                        background: ghostwhite;
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                        margin-bottom: 3%;
                        border: none;
                    }

                    .btn-cmt {
                        float: right;
                        border: none;
                        padding: 1%;
                        border-radius: 5px;
                        background: black;
                        color: white;
                        margin-bottom:3%;
                    }

                    span {
                        font-size: 20px;
                    }

                    .fav {
                        float: right;
                        margin-right: 10%;
                    } 
                    img {
                        width:80%;
                    }
                    .plot {
                        margin-top: 20%;
                       
                    }
                 
                    `
                    
                }

            </style>
        </Layout>
    );
};

export default Movieid;