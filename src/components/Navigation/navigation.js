import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'

const navigation = () => {

    return(
        <nav className="gtco-nav" role="navigation">
            <div className="gtco-container">
                
                <div className="row">
                    <div className="col-sm-4 col-xs-12">
                        <div id="gtco-logo"><Link to="/home">Afican Kitchen<em>.</em></Link></div>
                    </div>
                    <div className="col-xs-8 text-right menu-1">
                        <ul>
                            <li><Link to="/menu">Menu</Link></li>
                            <li className="has-dropdown">
                                <Link to="/services">Services</Link>
                                <ul className="dropdown">
                                    <li><Link to="#">Food Catering</Link></li>
                                    <li><Link to="#">Wedding Celebration</Link></li>
                                    <li><Link  to="#">Birthday's Celebration</Link></li>
                                </ul>
                            </li>
                            <li><Link to="contact.html">Contact</Link></li>
                            <li className="btn-cta"><Link to="reservation.html"><span>Reservation</span></Link></li>
                        </ul>	
                    </div>
                </div>
                
            </div>
	</nav>
    )
}

export default navigation;




