import React from 'react';
import Layout from '../components/Layout';

const passwordforget = () => {
    return (
       <Layout>
           <div className="pwdfgt">
               <h2>Password forgotten? Find your Account</h2>
               <form action="" method="post">
                   <label>Please enter your email:</label>
                   <input type="text" name="email" placeholder="Email"/>
                   <input type="submit" value="Send"/>
               </form>

           </div>
       </Layout>
    );
};

export default passwordforget;