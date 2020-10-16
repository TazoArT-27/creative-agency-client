import React, { useEffect, useState } from 'react';

import FeedPerson from '../FeedPerson/FeedPerson';



const Feedback = () => {
    const [feed, setFeed] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/feeds')
        .then(res => res.json())
        .then(data => setFeed(data))
    }, [])
    return (
        <div>
            <h1 className='text-center mt-5 pt-5'>Clients <span style={{color: '#7AB259'}}>Feedback</span></h1>
            <section className="d-flex justify-content-center">
            <div className="w-75 row">
            <div id="feed" class="card-deck py-5">
            {
                feed.map(feed => <FeedPerson feed={feed}></FeedPerson>)
            }
            </div>
            </div>
        </section>
        </div>
    );
};

export default Feedback;