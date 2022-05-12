import React from 'react';
import Typed from 'react-typed';

import './Introduction.scss';

const Introduction = ({ title, description }) => {
    return (
        <section className='introduction'>
            <div className='content'>
                <h1>{title}</h1>
                <p>
                    <Typed
                        strings={[description]}
                        typeSpeed={1}
                    />
                </p>
            </div>
        </section>
    );
}

export default Introduction;
