import React from 'react';

class ChallengeModal extends React.Component {
    render() {
        return(
            <div className="modal fade" id="exampleModalCenterRunner" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterRunnerTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterRunnerTitle">Enter email address</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form id="form1" action="runner.html" method="post">
                        <input type='email' style={{'width': '100%'}}/>
                        <br></br>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" className="btn btn-primary">Invite Now!</button>
                    </div>
                  </div>
                </div>
              </div>
        )
    }
}
export default ChallengeModal;