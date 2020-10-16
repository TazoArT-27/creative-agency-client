import React from 'react';
import './ListTable.css';

const ListTable = ({list}) => {
    return (
        
            <table>
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Service</th>
                <th scope="col">Project Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((lists, index) =>
                    <tr>
                    <td scope="row" data-label="Name">{lists.name}</td>
                    <td data-label="Email ID">{lists.email}</td>
                    <td data-label="Service">{lists.project}</td>
                    <td data-label="Project Details">{lists.details}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
       
);
};

export default ListTable;