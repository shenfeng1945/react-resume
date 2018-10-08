import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Project from './components/Project'
import Skill from './components/Skill'
import Contact from './components/Contact'
import About from './components/About'
import NavLeft from './components/Nav-Left'
import ResumePdf from './components/ResumePdf'

const path = window.location.pathname

const Routes = () => {
    return (
        <Router>
            <Fragment>
                {
                    path !== '/resume-pdf' ?
                        <div className="page">
                            <NavLeft />
                            <Route exact path="/" component={About} />
                            <Route path="/project" component={Project} />
                            <Route path="/skill" component={Skill} />
                            <Route path="/contact" component={Contact} />
                        </div> :
                        <Route path="/resume-pdf" component={ResumePdf} />
                }
            </Fragment>
        </Router>
    )
}

export default Routes;