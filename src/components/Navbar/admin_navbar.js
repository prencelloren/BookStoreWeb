import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import fire from '../../files/firebase';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../combine_action_creator';
import { useDispatch } from 'react-redux';

export const Adminnavbar = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const [category, setcategory] = useState('');
    const { categoryData } = bindActionCreators(actionCreators, dispatch);
    const categoryFunction = () => {
        categoryData(category);
    }
    console.log(category);


    const handleLogout = () => {
        history.push({ pathname: "/" });
        localStorage.clear();
    }

    return (
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Book Store Website</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav navbar-right">
                        <li> 
                            <input list="category" value={category} onChange={(e) => setcategory(e.target.value)} name="browser" id="browser" placeholder="select category" style={{ marginTop: "12px" }} />
                            <datalist id="category">
                                <option value="EDUCATION"><option value="COMICS">
                                    </option></option></datalist>
                                    </li>
                        <li>
                            <i className="fa fa-search" style={{ color: "white", marginTop: "17px", fontSize: "17px", paddingLeft: "10px" }} onClick={categoryFunction}></i></li>
                            <li className="active"><Link to="/adminpage">HOME</Link>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">REQUEST<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/todaybookrequest">BOOK REQUESTS</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">ISSUE<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/issuebook">BOOK ISSUES</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">ADD<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/addbooks">ADD BOOKS</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">DELETE<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/deletebooks">DELETE BOOKS</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/adminprofile">PROFILE</Link></li>
                            <li><Link onClick={handleLogout}><span class="glyphicon glyphicon-log-in"></span> Logout</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
