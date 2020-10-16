import React, { useEffect, useState } from 'react';
import img from '../../../images/icons/service5.png'
import ProjectByDate from '../ProjectByDate/ProjectByDate';

const UsersProject = ({projects}) => {
    return (
        <div>
            <div>
            <h2 className="text-brand text-center">Projects</h2>
            {
                projects.length ?
                 <ProjectByDate projects={projects} ></ProjectByDate>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Projects for this Date</h4>
                </div>
            }
        </div>
        </div>
    );
};

export default UsersProject;