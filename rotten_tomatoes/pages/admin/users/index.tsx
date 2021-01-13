import React from 'react';
import Layout from '../../../components/Layout';
import Table from 'react-bootstrap/Table';

const index = () => {
    return (
        <Layout>
            <div className='tbuser'>
            <a href="/admin"><button className='back'>Back</button></a>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Lorem ipsum</td>
                        <td>Lorem@ipsum.dolor</td>
                        <td>User</td>
                        <td><a href="/admin/users/edit"><button className='edit'>Edit</button></a> <a href="#"><button className='del'>X</button></a></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <style jsx>{`
                    .edit {
                        border-radius: 60px;
                        padding: 7%;
                        font-weight: bold;
                        border: none;
                        background: green;
                        color: white;
                    }

                    .edit:hover {
                        background:#00C716;
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
                    .tbuser {
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