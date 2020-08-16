import React from 'react';

export default function Title ({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 mb-2 text-center title">
                <h1 className="text-capitalize font-weight-bold">
                    <strong className="text-blue">{name} 
                    </strong>
                    <strong className="text-white">
                    {title}
                    </strong>
                    
                </h1>
            </div>
            
        </div>
        
    );
}
