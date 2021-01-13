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
                            <h4>Title <span>Rating:</span></h4>
                            <p>Year</p>
                            <p>Genre</p>
                            <p>Summary</p>
                        </td>
                        <td><button className='del'>X</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <h4>Title <span>Rating:</span></h4>
                            <p>Year</p>
                            <p>Genre</p>
                            <p>Summary</p>
                        </td>
                        <td><button className='del'>X</button></td>
                    </tr>
                </tbody>
                </Table>
            </div>
            <style jsx>{`

                h2 {
                    margin-top:3%;
                    margin-bottom:3%;
                    text-align:center;
                    color:white;
                }

                td {
                    color:white;
                }
                th {
                    color:white;
                }
                .del {
                    border-radius: 60px;
                    padding: 7%;
                    padding-right: 10%;
                    padding-left: 10%;
                    font-weight: bold;
                    border: none;
                    background: #E13900;
                    color: white;
                }

                .del:hover {
                    background:#AD1800;
                }
                span {
                    font-size:20px;
                }

            `}</style>
        </Layout>
    );
};

export default favorite;