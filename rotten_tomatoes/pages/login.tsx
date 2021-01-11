import React from 'react';
import Layout from '../components/Layout';

const login = () => {
    return (
            <Layout>
                <div className='form-login'>
                    <h2>Login</h2>
                        <form>
                            <label>Email:</label>
                            <input type="text" placeholder='email'/>
                            <label>Password:</label>
                            <input type="password"/>
                            <input type="submit" value="submit"/>
                            <p>Aren't register yet? <a href='/signup'>Please join us here</a></p>
                        </form>

                </div>
            </Layout>
    );
};

export default login;