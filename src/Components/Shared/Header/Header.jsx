import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {name} = useContext(AuthContext);
    return (
        <div>
            {name}
        </div>
    );
};

export default Header;