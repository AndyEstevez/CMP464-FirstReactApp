import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'

class ContactPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            isVisible: false,
        }
    }

    handleChange = (event) => {
        console.log(this.state.email)
        //console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
            isVisible: false
        })
    }

    handleSubmit = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    
    render() {
       const formIsFilled = this.state.name.length > 0 && this.state.email.length > 0 && this.state.message.length > 0 
        return (
            <div>
                <div>
                    <h2>Contact Info:</h2>
                    <h4>Email: andyestevez27@gmail.com </h4>
                    <h4>Phone #: 347-833-7564 </h4>
                </div>

                <br></br>

                <div>
                    <h2>Send a Message to Me</h2>
                    <h4>Name: <input className="form-name" value={this.state.name} name="name" onChange={event => this.handleChange(event)}></input> </h4>
                    <h4>Email: <input className="form-email" name="email" onChange={event => this.handleChange(event)}></input> </h4>
                    <h4>Message:  </h4><textarea className="form-message" name="message" onChange={event => this.handleChange(event)}></textarea>
                    <br></br>
                    <button type="submit" onClick={this.handleSubmit} >Submit</button>
                    {formIsFilled 
                        ? <Alert variant="success" show={this.state.isVisible}>Hey, {this.state.name}, your message sent successfully!
                        <div><Button variant="outline-success" onClick={this.handleSubmit}>Close</Button></div>
                        </Alert>
                        : <Alert variant="danger" show={this.state.isVisible} >Hey, your message is not done
                        <div><Button variant="outline-danger" onClick={this.handleSubmit}>Close</Button></div>
                        </Alert>
                        
                    }
                    
                </div>
            </div>
        )
    }
}

export default ContactPage;