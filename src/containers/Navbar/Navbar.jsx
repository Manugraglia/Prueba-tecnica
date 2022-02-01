import React, {useState} from "react";


const Navbar = () => {


    const [active, setActive] = useState(false);


    return (
<>
    <div className={`header ${active ? "active" : ""}`}>
        <div className="text">
            <h1>Mater</h1>
        </div>
    <div className="header-menu" onClick={() => setActive(!active)}>
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
    </div>
      </div>
    <div className={`navbar ${active ? "active" : ""}`}>
    </div>
</>
    );


}

export default Navbar;