import React, { useState } from 'react';

const MobileNavFoot = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () =>{
        setShowMenu(prev => !prev)
    }
    return (
        <div>
            
        </div>
    );
};

export default MobileNavFoot;