import React from 'react';
import Layout from '../../../components/Layout';

const add = () => {
    return (
        <Layout>
            <a href="/admin/movies"><button className='back'>Back</button></a>
             <div className="edit-movie">
                    <h2>Add a Movie</h2>
                    <form action="#">
                        <p>Title:</p>
                        <input type="text" name="title" placeholder="title" /><br/>
                        <p>Summary:</p>
                        <input type="text" name="summary" placeholder="summary" className='sum' /><br/>
                        <p>Genre:</p>
                        <input type="text" placeholder="genre"/><br/>
                        <p>Producer:</p>
                        <input type="text" name="producer" placeholder="producer"/><br/>
                        <p>Date:</p>
                        <input type="text" name="release" placeholder="release"/><br/>
                        <p>Poster:</p>
                        <input type="file" name="image"/><br/>
                        <input type="submit" name="genre" value="Edit" className='smb'/><br/>
                    </form>
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
                    h2 {
                        text-align:center;
                        margin-top: 5%;
                        color: #0093E9;
                    }
                    .edit-movie {
                        color: #0A0924;
                        display: block;
                        margin: auto;
                        width:30%;
                        max-width: 80%; 
                        border: 1px solid white;
                        margin-top: 2%;
                        border-radius: 8px;
                        background: white;
                        margin-bottom:3%;
                    }
                    .sum {
                        height:100px;
                    }
                    p {
                        text-align:center;
                    }

                    input {
                        display: block;
                        margin: auto;
                        
                    }
                    .admin {
                        display: block;
                        margin: auto;
                    }
                }
                .smb{
                    border: none;
                    border-radius: 5px;
                    padding: 15px;
                    background: black;
                    color: white;
                    margin-bottom: 5%;
                }
                .smb:hover{
                    background:#0093E9;
                    color:black;
                }

                `}</style>
        </Layout>
    );
};

export default add;