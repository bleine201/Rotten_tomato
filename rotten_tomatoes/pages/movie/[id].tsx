import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Favorite from '@material-ui/icons/Favorite';
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { InferGetStaticPropsType } from 'next';

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/allMovies')
    const movies = await res.json()

    const paths = movies.map((movie) => ({
        params: { id: movie.id.toString() },
        
      }))
    
      return { paths, fallback:false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  
    const res = await fetch(`http://localhost:3000/api/movie/${params.id}`);
    const movie = await res.json();

    return {
      props: {
        movie,
      },
    }
}

const Movieid = ({ movie }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();

    return (
        <Layout>  
            <a href="/"><button className='back'>Back</button></a>
            <div className="movie">
                <div className='main'>
                    <h2>{movie.title} <span>{movie.rating}</span> </h2>
                    <div className='fav'><Favorite /></div>
                    <img src={`https://image.tmdb.org/t/p/original${movie.image}`} alt="movie-poster"/>
                </div>
                <div className='plot'>
                     
                    <p className='sum'>{movie.summary}</p>
                    <p><span>Genre:</span> {movie.genre}</p>
                    <p><span>Producer:</span> {movie.producer} </p>
                    <p><span>Release:</span> {movie.date}</p>
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