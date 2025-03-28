import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeClient({auth}) {

    const navigate = useNavigate();



    useEffect(() => {
        if (!auth) {
        navigate("/Login");
        }
    }, [navigate])

    return (
        <div>
            salut
        </div>
    );
}

export default HomeClient;