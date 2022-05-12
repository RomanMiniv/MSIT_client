import React from 'react';

import './TeacherInfo.scss';

const TeacherInfo = ({name, description, avatar}) => {
    return (
        <div
            className='teacher-info'
            data-aos='fade-down'
            data-aos-easing='ease-out-cubic'
        >
            <img src={`${process.env.REACT_APP_STATIC_URL}/${avatar}`} />
            <div className='content'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default TeacherInfo;
