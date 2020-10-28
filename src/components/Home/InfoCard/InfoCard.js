import React from 'react';
import '../BusinessInfo/BusinessInfo.css';
import './InfoCard.css';

const InfoCard = ({service}) => {
    return (
				<div className="card align-items-center card1">
					<div className="img-section">
                        {service.image ? <img alt='' style={{height: '60px', width: '60px'}} src={`data:image/png;base64,${service.image.img}`}/>
                            :<img
                            src={`https://infinite-waters-86827.herokuapp.com/${service.file.name}`}
                            alt={service.title}
                            className="img-fluid mt-4 image-body" 
                            style={{height: '60px', width: '60px'}}
                        />
                        }
                    </div>
					<div className="card-body">
                    <h3 className="card-h3 mb-3 text-center mt-2 card-title pt-4">{service.title}</h3>
					<p className="card-para mt-2">{service.description}</p>
                    <div class="go-corner" href="#">
                    <div class="go-arrow">
                        →
                    </div>
                    </div>
                    </div>
                    
				</div>
			
		// </div>
            
        
        
    );
};

export default InfoCard;