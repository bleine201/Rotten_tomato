import React from 'react';
import Layout from '../../../components/Layout';

const edit = () => {
    return (
        <Layout>
             <div className="edit-movie">
             <button><a href="/admin/movies">Back</a></button>
                    <h2>Edit Movie</h2>
                    <form action="#">
                        <label>Title:</label>
                        <input type="text" name="title" placeholder="title" />
                        <label>Summary:</label>
                        <input type="text" name="summary" placeholder="summary" />
                        <label>Genre:</label>
                        <input type="text" placeholder="genre"/>
                        <label>Producer:</label>
                        <input type="text" name="producer" placeholder="producer"/>
                        <label>Release:</label>
                        <input type="text" name="release" placeholder="release"/>
                        <label>Poster:</label>
                        <input type="file" name="image"/>
                        <input type="submit" name="genre" value="Edit"/>
                    </form>
                    <div className="rating">Rating:</div>
                </div>
        </Layout>
    );
};

export default edit;