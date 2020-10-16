import React, { useEffect, useState } from 'react';
import ListTable from '../ListTable/ListTable';

const ServicesList = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allProjects')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    return (
        <div>
            <ListTable list={list}></ListTable>
        </div>
    );
};

export default ServicesList;