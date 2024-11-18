import React from "react";

function Some() {
    var date = new Date().getFullYear();
    const name = "new world";
    return (
    <div>
        <h1 className="heading">Hello {name}</h1>
        <Heading />
        <p>Copy right {date}  </p>
        <div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-LaTjueyW6mzcvZu0GFbzgHaHa%26pid%3DApi&f=1&ipt=410c09dc228cb1297720a7b235cea82037357b430302cee29855c035dbba70e9&ipo=images" alt="" />
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.C3Ep0grJrP7VQASs-3ocnwHaFY%26pid%3DApi&f=1&ipt=8467365db0afaf51fd6d7b7f215b94bbac3bdd3169bf183ea23200efbcd722b6&ipo=images" alt="" />
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.kr1q6ipbwcdRqLvwlvyVnwHaFY%26pid%3DApi&f=1&ipt=08778dfa6d9ad72bb013efea4805edbb818f7f2bb3d2f4616149e35b70766286&ipo=images" alt="" />
        </div>
    </div>
    );
}