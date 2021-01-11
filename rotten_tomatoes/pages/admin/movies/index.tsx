import React from 'react';
import Layout from '../../../components/Layout';
import Table from 'react-bootstrap/Table';

const index = () => {
    return (
        <Layout>
            <div className='tbmovie'>
            <div className='back'>
                    <button><a href="/admin">Back</a></button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Producer</th>
                        <th>Release</th>
                        <th colSpan="3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Lorem ipsum</td>
                        <td>Lorem ipsum Ltd</td>
                        <td>2019</td>
                        <td><button><a href="/admin/movies/Lorem ipsum">See</a></button> <button><a href="/admin/movies/edit">Edit</a></button> <button><a href="#">X</a></button></td>
                        </tr>
                    </tbody>
                </Table>
                <style jsx>{`
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
            </div>
        </Layout>
    );
};

export default index;