import React from 'react';
import Layout from '../../../components/Layout';
import Table from 'react-bootstrap/Table';
import Edit from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';


export const getStaticProps: GetStaticProps = async (context) => {
  
    const res = await fetch('http://localhost:3000/api/allMovies');
    const movies = await res.json();

    return {
      props: {
        movies,
      },
    }
}

const index = ({ movies }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout>
            <a href="/admin"><button className='back'>Back</button></a>
            <div className='tbmovie'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Producer</th>
                        <th>Release</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {movies.map((movie: { id: React.ReactNode; title: React.ReactNode; producer: React.ReactNode; date: React.ReactNode; }) => (
                        <tr>
                        <td>{movie.id}</td>
                        <td>{movie.title}</td>
                        <td>{movie.producer}</td>
                        <td>{movie.date}</td>
                        <td><a href={`movies/${movie.id}`}><button className='see'><VisibilityIcon/></button></a> <a href="/admin/movies/edit"><button className='edit'><Edit/></button></a> <a href="#"><button className='del'>X</button></a></td>
                        </tr>
                        ))} 
                    </tbody>
                </Table>

                
        
      
            </div>
            <style jsx>{`
                    .see {
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                        font-weight: bold;
                        border: none;
                        background: #EBD807;
                        color: white;
                        
                    }
                    .see:hover {
                        background:#E5F507;
                    }
                    .edit {
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                        font-weight: bold;
                        border: none;
                        background: green;
                        color: white;
                    }

                    .edit:hover {
                        background:#00C716;
                    }

                    .del {
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                        font-weight: bold;
                        border: none;
                        background: #E13900;
                        color: white;
                    }

                    .del:hover {
                        background:#AD1800;
                    }

                    .back {
                        margin-top: 1%;
                        margin-left:3%;
                        margin-bottom:3%;
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
                    .tbmovie {
                        margin-top: 2%;
                    }
                    th {
                        color:white;
                    }
                    td {
                        color:white;
                    }

                `}</style>
        </Layout>
    );
};

export default index;