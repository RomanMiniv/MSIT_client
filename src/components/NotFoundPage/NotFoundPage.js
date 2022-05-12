import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            Not Found<br />
            <Link to='/'>Return to root page.</Link>
        </div>
    );
}

export default NotFoundPage;
