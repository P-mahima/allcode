import React from 'react';


const Genericcompo = (heading, imgurl, description) => {
    return (

        <div style={{ display: 'flex', flexDirection: 'column', padding: 10, height: 300, width: 200, background: 'grey', justifyContect: 'center', }}>
            <div>
                <h1>{heading}</h1>
                {/* <h1>Genericcompo</h1> */}
                <div>
                    <img alt='photo' src={imgurl} style={{ width: 120, height: 160 }} />
                </div>
                <div>
                    <h1>{description}</h1>
                </div>
            </div>
        </div>

    )
}

export default Genericcompo