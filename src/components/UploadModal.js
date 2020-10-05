import React from 'react';
import UploadForm from './UploadForm';

class UploadModal extends React.Component {
    render() {
        return(
            <div className="modal fade" id="exampleModalCenterUpload" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterUploadTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterUplodTitle">Upload your media</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                    <UploadForm></UploadForm>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Upload</button>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default UploadModal;