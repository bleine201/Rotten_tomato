import React from 'react';
import Layout from '../../components/Layout';

const index = () => {
    return (
        <Layout>
            <a href="admin/users">Users</a>
            <a href="admin/movies">Movies</a>
        </Layout>
    );
};

export default index;