import React from 'react';
import './menu-item.styles.scss';
import { withRouter }from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div style={
        {
            backgroundImage: `url(${imageUrl})`,

        }
    }className="background-image"></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="sub-title">Shop Now</span>
        </div>
    </div>
);
export default withRouter(MenuItem);