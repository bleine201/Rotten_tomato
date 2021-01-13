import React from 'react';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';

const Movieid = () => {
    const router = useRouter();
    return (
        <Layout> 
            <a href="/admin/movies"><button className='back'>Back</button></a>
            <a href="/admin/movies/edit"><button className='edit'>Edit</button></a>
            <div className="see-movie">
                <div className='content'>
                    <div className='main'>
                        <h2>{router.query.movie}</h2>
                        <img src="https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg" alt="movie-poster"/>
                    </div> 
                    <div className='plot'>
                        <p className='sum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                        Donec scelerisque sollicitudin enim eu venenatis.</p>
                        <h3>Genre:</h3>
                        <p>Lorem</p>
                        <h3>Producer:</h3>
                        <p>Lorem ipsum Ltd</p>
                        <h3>Release:</h3>
                        <p>2019</p>
                    </div>
                </div>
                <div className="rating">
                    <h3>Rating:</h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Line_graph.png" alt="rating-graph"/>
                </div>
            </div>
            <style jsx>{`

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

                .edit {
                    margin-top: 3%;
                    margin-left:3%;
                    border: none;
                    padding : 1%;
                    border-radius: 5px;
                    background: green;
                    color: white;
                }

                .edit:hover {
                    background:#00C716;
                    color:white;
                }

                .see-movie {
                    display: flex;
                    margin-left: 3%;
                    margin-top:3%;
                    margin-bottom:3%;
                    color:white;
                }
                .sum {
                    width:80%;
                }
                .content {
                    display:flex;
                    width: 50%;
                }
                .content img {
                    width:80%;
                }
                .plot {
                    margin-top:10%;
                    margin-right:5%;
                }
                .rating img {
                    width: 50%;
                }

            `}</style>
        </Layout>
    );
};

export default Movieid;