import React from 'react';
import Layout from '../../../components/Layout';

const edit = () => {
    return (
        <Layout>
             <div className="edit-user">
             <button><a href="/admin/users">Back</a></button>
                    <h2>Edit User</h2>
                    <form action="#">
                        <label>Username:</label>
                        <input type="text" placeholder="username" disabled="disabled"/>
                        <label>Email:</label>
                        <input type="text" placeholder="email" disabled="disabled"/>
                        <label>Admin:</label>
                        <input type="checkbox" name="Admin" id="admin"/>
                        <input type="submit" value="Edit"/>
                    </form>
                </div>
        </Layout>
    );
};

export default edit;