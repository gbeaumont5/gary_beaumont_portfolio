import React from "react";
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../App.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div>
            <Jumbotron>
                {/* <h2 className="formTitle">Send a Message!</h2> */}
                <Form className='form'
                onSubmit={this.submitForm}
                action="https://formspree.io/xarnjkbm"
                method="POST"
                >
                    <FormGroup>
                        <Label classname="formSubheading"for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleNameChange} placeholder="Enter name here" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange}placeholder="Enter email here" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="tel" name="phone" id="phone" value={this.state.phone} onChange={this.handlePhoneChange}placeholder="Enter phone number here" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="text">Message</Label>
                        <Input type="textarea" id="text" name="message" value={this.state.message} onChange={this.handleMessageChange}placeholder="Enter message here" required></Input>
                        {status === "SUCCESS" ? <p>Thanks!</p> : 
                        <div className="formButton"><Button>Submit</Button></div>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </FormGroup>
                </Form>
                </Jumbotron>
                </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}