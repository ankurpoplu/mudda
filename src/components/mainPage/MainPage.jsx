import React from 'react';
import LeftBoxOnPage from './LeftBoxOnPage';
import MidBoxOnPage from './MidBoxOnPage';
import RightBoxOnPage from './RightBoxOnPage';

function MainPage(props) {
    return (
        <div style={{display:"flex",flexDirection:"row"}}>
            <LeftBoxOnPage />
            <MidBoxOnPage />
            <RightBoxOnPage />
        </div>
    );
}

export default MainPage;