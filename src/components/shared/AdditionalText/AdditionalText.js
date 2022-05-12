import React from 'react';

import './AdditionalText.scss';

const AdditionalText = ({ text }) => {
    return (
        <div
            className='additional-text'
            dangerouslySetInnerHTML={{ __html: text }}
            data-aos='fade-up'
            data-aos-easing='ease-out-cubic'
        ></div>
    );
}

export default AdditionalText;
