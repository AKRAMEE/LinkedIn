import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRifht">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )


    return (
        <div className="widgets">
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("AKRAM DONE THIS BY HIM SELF", "Top news - +99 readers")}
            {newsArticle("Coronavirus get a mind", "Top news - +99 readers")}
            {newsArticle("Vaccin is not important if u wanna kill your self and other", "Top news - +99 readers")}
            {newsArticle("Algeria is done for it in Rugby", "Top news - +99 readers")}
        </div>


    )
}

export default Widgets
