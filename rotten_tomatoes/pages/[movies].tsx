import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Movieid = () => {
    const router = useRouter();
    return (
        <Layout>   
            <div className="movie">
            <button><a href="/admin/movies">Back</a></button>
                    <h2>{router.query.movie} <span>Rating:</span> </h2>
                    <h3>Poster:</h3>
                    <img src="#" alt="movie-poster"/>
                    <h3>Summary:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                    Donec scelerisque sollicitudin enim eu venenatis.</p>
                    <h3>Genre:</h3>
                    <p>Lorem</p>
                    <h3>Producer:</h3>
                    <p>Lorem ipsum Ltd </p>
                    <h3>Release:</h3>
                    <p>2019</p>
                    
                <div className="rating">Rating:</div>
            </div>
        </Layout>
    );
};

export default Movieid;