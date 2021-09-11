import React from 'react';

const Body = (props) => {
    return(
        <div className="content">
            <div>
                <h2 className="content_title">{props.title}</h2>
            </div>
            <div>
                <p className="content_overview">{props.content}</p>
            </div>
            <div>
                <a href="aaa">Learn more...</a>
            </div>
        </div>
    )
}

export default Body;