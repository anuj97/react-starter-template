import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import ChallengeModal from './ChallengeModal';

class Submissions extends React.Component {
    render() {
        return(
            <>
                <br></br>
                <div className="mx-auto" style={{'width': 80+'vw'}}>
                <h2 style={{'float': 'left'}}>You just got featured!</h2>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenterRunner" style={{'float': 'right', 'width': 20+'vw'}}>Challenge your friends</button>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row mx-sm-n5">
                    <div className="col-sm-4">
                        <div className="card" style={{'width': '90%'}}>
                            <img src="./images/elaicheesecake.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Elaicheese Cake</h5>
                            <p className="card-text">A delictious recipie by @superawesomecook</p>
                            <a href="#" className="btn btn-light">Upvote</a>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        <div className="card" style={{'width': '90%'}}>
                            <img src="./images/elaicheesecake.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Elaicheese Cake</h5>
                            <p className="card-text">A delictious recipie by @superawesomecook</p>
                            <a href="#" className="btn btn-light">Upvote</a>
                            </div>
                        </div>
                        </div>

                        <div className="col-sm-4">
                        <div className="card" style={{'width': '90%'}}>
                            <img src="./images/elaicheesecake.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Elaicheese Cake</h5>
                            <p className="card-text">A delictious recipie by @superawesomecook</p>
                            <a href="#" className="btn btn-light">Upvote</a>
                            </div>
                        </div>
                        </div>
                </div>

                </div>

                <br></br>

                <ChallengeModal></ChallengeModal>

                <h2><Link to="submissions/1">Hello</Link></h2>
                <Route path="/submissions/1" render={() => {
                                    return (
                                        <h2>!dgsjtut</h2>
                                    )
                                }}>
                </Route>
            </>
        )
    }
}

export default Submissions;