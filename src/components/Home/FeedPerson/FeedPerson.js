import React from 'react';

const FeedPerson = ({feed}) => {
    return (
        <div className='person-container card p-4'>
            <div className="upper">
                    <div className="row">
                        <div className="col-md-4">
                            {
                                feed.image ? <img alt='' style={{height: '50px', width: '50px'}} src={`data:image/png;base64,${feed.image.img}`}/>
                            :
                                <img style={{height: '50px', width: '50px'}} src={`http://localhost:5000/${feed.file.name}`} alt=""/>
                            }
                        </div>
                        <div className="col-md-8">
                            <h5>{feed.name}</h5>
                            <p>{feed.designation}</p>
                        </div>
                    </div>
            </div>
            <div className="lower">
                <p className="card-text text-secondary mt-2">{feed.description}</p>
            </div>
        </div>
    );
};

export default FeedPerson;