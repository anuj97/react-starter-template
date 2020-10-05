import React from 'react';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Submitted");
    }

    render() {
        return(
            <>
                <form id="form1">
                    <input type='file' id="imgInp" />
                    <br></br>
                    <div className="mx-auto" style={{'width': '150px'}}>            
                    <img id="blah" src="#" alt="your image" style={{'height': '200px', 'width': 'auto'}} />
                    </div>
                </form>
            </>
        );

    }
}

export default UploadForm;