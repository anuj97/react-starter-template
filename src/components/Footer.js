import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
            <div className="container-fluid">
                <div className="row mx-md-n5">
                    <div className="col px-md-12"><div className="p-3 border bg-light">
                        <div className="mx-auto" style={{'width': '12em'}}>
                            <span className="text-muted">&copy; The Food Fighters</span>
                        </div>
                    </div></div>
                  </div>
            </div>
          </footer>
        );
    }
}

export default Footer;