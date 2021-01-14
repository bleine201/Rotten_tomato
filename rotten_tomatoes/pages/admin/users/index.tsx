import axios from 'axios';

axios.get('http://localhost:3000/movie').then(response => {
  console.log(response);
});




import React from "react";
import Layout from "../../../components/Layout";
import Table from "react-bootstrap/Table";
import Edit from "@material-ui/icons/Edit";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const index = () => {
  return (
    <Layout>
      <div className="tbuser">
        <a href="/admin">
          <button className="back">Back</button>
        </a>
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
              <td>
              <a href="/admin/movies/add">
                  <button className="add">
                    <AddCircleIcon/>
                  </button>
                </a>{" "}
                <a href="/admin/users/edit">
                  <button className="edit">
                    <Edit />
                  </button>
                </a>{" "}
                <a href="#">
                  <button className="del">X</button>
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <style jsx>{`
        .edit {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          font-weight: bold;
          border: none;
          background: green;
          color: white;
        }

        .edit:hover {
          background: #00c716;
        }

        .add {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            font-weight: bold;
            border: none;
            background: blue;
            color: white;
          }

          .add:hover {
            background: #00c716;
          }

        .del {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          font-weight: bold;
          border: none;
          background: #e13900;
          color: white;
        }

        .del:hover {
          background: #ad1800;
        }

        .back {
          margin-top: 1%;
          margin-left: 3%;
          margin-bottom: 3%;
          border: none;
          padding: 1%;
          border-radius: 5px;
          background: black;
          color: white;
        }

        .back:hover {
          background: #0093e9;
          color: white;
        }
        .tbuser {
          margin-top: 2%;
        }
        th {
          color: white;
        }
        td {
          color: white;
        }
      `}</style>
    </Layout>
  );
};

export default index;
