import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to home after 3 seconds
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Redirecting to the home page in 3 seconds...</p>
        </div>
    );
};

export default Page404;