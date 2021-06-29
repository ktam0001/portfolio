import React from 'react';

const Header = () => {
    //const [active, setActive] = useState();
    //target.attributes[1].nodeValue
    return (
        <div className="ui inverted segment" style = {{'border-radius' : '0', 'margin' : 0,'width' : '100vw'}}>
            <div className="ui inverted secondary pointing menu">
                <a className="item active" id = '0'>
                    Home
                </a>
                <a className="item" id = '1'>
                    About
                </a>
                <a className="item" id = '2'>
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Header;
