import React from 'react';

const ProjectByDate = ({projects}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Project</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  projects.map((project, index) => 
                        
                    <tr>
                        <td>{project.name}</td>
                        <td>{project.project}</td>
                        <td>{project.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ProjectByDate;