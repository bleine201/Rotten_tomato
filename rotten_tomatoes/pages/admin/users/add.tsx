import React from 'react';
import Layout from '../../../components/Layout';
import axios from 'axios';


axios.post('http://localhost:3000/api/allUsers').then(response => {
  console.log(response);
});




const add = () => {

  



 
   


    const onSubmit = (async () => {

         alert('dsfdsf')
         var inputValue = (<HTMLInputElement>document.getElementById(elementId)).value;
      });

    return (
        <Layout>
            <a href="/admin/users"><button className='back'>Back</button></a>
             <div className="edit-user">
                    <h2>Add a User</h2>
                    <form action="#" onSubmit={onSubmit}>
                        <p>Username:</p>
                        <input type="text" placeholder="Username" disabled="disabled"/><br/>
                        <p>Email:</p>
                        <input type="text" placeholder="Email" disabled="disabled"/><br/>
                        <div className='admin'>
                            <p>Admin:</p>
                            <input type="checkbox" name="Admin" id="admin"/><br/>
                        </div>
                        <input type="submit" value="Edit" className='smb'/>
                    </form>
                </div>
                <style jsx>{`

                    .back {
                        margin-top: 3%;
                        margin-left:3%;
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
                    h2 {
                        text-align:center;
                        margin-top: 5%;
                        color: #0093E9;
                    }
                    .edit-user {
                        color: #0A0924;
                        display: block;
                        margin: auto;
                        width:30%;
                        max-width: 80%; 
                        border: 1px solid white;
                        margin-top: 2%;
                        border-radius: 8px;
                        background: white;
                    }
                    th {
                        color:white;
                    }
                    td {
                        color:white;
                    }
                    p {
                        text-align:center;
                    }

                    input {
                        display: block;
                        margin: auto;
                        
                    }
                    .admin {
                        display: block;
                        margin: auto;
                    }
                }
                .smb{
                    border: none;
                    border-radius: 5px;
                    padding: 15px;
                    background: black;
                    color: white;
                    margin-bottom: 5%;
                }
                .smb:hover{
                    background:#0093E9;
                    color:black;
                }

                `}</style>
        </Layout>
    );
};

export default add;