import React from 'react';
import Layout from '../components/Layout';

const signup = () => {
    return (
        
            <Layout>
                <div className="join">
                    <h2>Sign up</h2>
                    <form action="#">
                        <label>Username:</label>
                        <input type="text" placeholder="username"/>
                        <label>Email:</label>
                        <input type="text" placeholder="email"/>
                        <label>Password:</label>
                        <input type="password"/>
                        <label>Confirm password</label>
                        <input type="password"/>
                        <input type="submit" value="submit"/>
                        <p>You have already an account? <a href='/login'>Sign in here</a></p>
                    </form>
                </div>
                </Layout>
    );
};

export default signup;