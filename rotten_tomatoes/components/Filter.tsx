import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';

const Filter = () => {
    return (
        <div className='filter'>
            <div className='flex'>
                <p><TuneIcon/> Filter</p>
                <select name="genre" id="genre" className="genre">
                    <option value="">Genre</option>
                    <option value="gr">Lorem</option>
                    <option value="gr">Lorem</option>
                </select>
                <select name="producer" id="producer" className="producer">
                    <option value="">Producer</option>
                    <option value="pdc">Lorem</option>
                    <option value="pdc">Lorem</option>
                </select>
                <select name="date" id="date" className="date">
                    <option value="">Date</option>
                    <option value="dt">Lorem</option>
                    <option value="dt">Lorem</option>
                </select>
            </div>
            <style jsx>{`
            
                .filter {
                    width: 50%;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    background:ghostwhite;
                    margin-bottom:3%;
                    margin-top:3%;
                    padding-bottom:1%;
                    padding-top:1%;
                    border-radius:10px;
                }
                .flex {
                    display:flex;
                    justify-content:space-between;
                }
                p {
                    color:white;
                    margin-top: 1rem;
                    margin-left: 2rem;
                    font-size:20px;
                    color:#000000;
                }
                .date {
                    margin-right:2rem;
                }
                select {
                    text-align:center;
                    padding: 1%;
                    border: none;
                    border-radius: 7px;
                    appearance: none;
                    background:#80D0C7;
                }
                select:after {
                    text-align:center;
                    padding: 1%;
                    border: none;
                    border-radius: 7px;
                    appearance: none;
                    background:#80D0C7;
                }
                
                
                `}  
            </style>
        </div>
    );
};

export default Filter;