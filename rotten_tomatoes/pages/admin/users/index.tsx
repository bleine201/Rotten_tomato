import React from 'react';
import Layout from '../../../components/Layout';
import Table from 'react-bootstrap/Table';

const index = () => {
    return (
        <Layout>
            <div className='tbuser'>
            <div className='back'>
                    <button><a href="/admin">Back</a></button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Lorem ipsum</td>
                        <td>Lorem@ipsum.dolor</td>
                        <td>User</td>
                        <td><button><a href="/admin/users/edit">Edit</a></button> <button><a href="#">X</a></button></td>
                        </tr>
                    </tbody>
                </Table>
                <style jsx>{`
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
            </div>
        </Layout>
    );
};

export default index;