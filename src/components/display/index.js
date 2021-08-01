import React from "react";

const Display =(props) => {
    return(
        <div style={props.containerStyle}>
            <p>{props.value}</p>
        </div>

    );
};

export default Display;