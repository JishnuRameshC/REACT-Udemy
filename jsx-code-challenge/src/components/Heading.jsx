import React from "react";


function Heading() {
    var time = new Date().getHours();
    var action = "";
    const customStyle = {
        color: ""
    }

    if (time < 12) {
        action = "Good Morning";
        customStyle.color = "red";
    } else if (time > 12 && time < 18) {
        action = "Good Afternoon";
        customStyle.color = "green";
    } else {
        action = "Good Evening";
        customStyle.color = "blue";
    }
    return (
        <div>
            <h1 className="heading" style={customStyle}>{action}</h1>
        </div>
    );
}

export default Heading;