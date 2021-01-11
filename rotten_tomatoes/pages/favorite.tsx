import React from 'react';
import Layout from '../components/Layout';
import { Table } from 'react-bootstrap';

const favorite = () => {
    return (
        <Layout>
            <div className='favorite'>
                <h2>Your favorites movies</h2>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan='3'>Movies</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="#" alt="poster-movies"/>
                            <h3>Title <span>Rating:</span></h3>
                            <p>Year</p>
                            <p>Genre</p>
                        </td>
                        <td><button>X</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <img src="#" alt="poster-movies"/>
                            <h3>Title <span>Rating:</span></h3>
                            <p>Year</p>
                            <p>Genre</p>
                        </td>
                        <td><button>X</button></td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </Layout>
    );
};

export default favorite;