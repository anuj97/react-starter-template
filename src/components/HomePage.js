import React from 'react';
import Carousel from './Carousel';
import UploadModal from './UploadModal';
import TermsModal from './TermsModal';
import { Switch } from 'react-router-dom';

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            urls: []
        }
    }
  
    componentDidMount() {
        fetch('http://localhost:4000/images', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => res.json())
        .then((data) => {
           this.setState({
              urls: data
           })
           console.log('hi')
        })
        .catch(console.log)
    }

    render() {
        return (
            <>
                <Carousel urls={this.state.urls}></Carousel>
                <div className="row mx-md-n5">
                    <div className="col px-md-12">
                        <div className="p-3 border bg-light"></div>
                    </div>
                </div>
                <br></br>
                <div className="mx-auto" style={{'width': '400px'}}>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" style={{'width': 'inherit'}}>Enter the Dojo!</button>
                </div>
                <br></br>
                <UploadModal/>
                <TermsModal/>
            </>
        )
    }
}

export default HomePage;