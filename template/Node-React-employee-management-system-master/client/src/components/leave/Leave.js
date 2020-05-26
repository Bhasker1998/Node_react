import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDatetime from "react-datetime";
import Select from 'react-select'
// import Instructions from './Instructions';
import { leave } from '../../Actions/UserAction'
import MyComponent from './select/select';
import {
  Button,
  Label,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";



class Leave extends Component {
	
	constructor() {
        super();
         this.state = {
                type: "Select",
                from:"",
                to:"",
                reason:""
        };
        this.submitValue = this.submitValue.bind(this); 
    }

    submitValue(event){
		// event.preventDefault();  
		var registerObj = {
            type: this.state.type,
            from:this.state.startDate.format('L'),
            to:this.state.endDate.format('L'),
            reason: this.state.reason
		}
		console.log("saving........",registerObj)
		this.props.leave(registerObj);
    }

    render() {
     return (
		   <section className="section section-shaped pb-250">
	            <div className="shape shape-style-1 shape-default">
	              <span />
	              <span />
	              <span />
	              <span />
	              <span />
	              <span />
	              <span />
	              <span />
	            </div>
	            <Container className="lg-md pt-lg-md">
	              <Row className="justify-content-center">
	                <Col lg="5">
	                  <Card className="bg-secondary shadow border-0">
	                    <CardBody className="px-lg-5 py-lg-5">

	                      <div className="text-center text-muted mb-4">
	                        <large>Apply Leave </large>
	                      </div>
	                      <Form role="form" onSubmit={this.submitValue}>
                       <FormGroup row>
                      <Label   for="exampleSelect" sm={4}>Type</Label>
                      <Col sm={8}>
                        <Input   name="select" type="select" onChange={(e)=>{this.setState({type:e.target.value})}}>
                          <option>Select</option>
                          <option>CL</option>
                          <option>EL</option>
                          <option>LWP</option>
                          <option>SL</option>
                        </Input>
                      </Col>
                    </FormGroup> 
 

                            {/* <FormGroup>
                            <center>
                                <label style={{marginRight:"20px",fontSize:"20px"}}> Type </label>
                                <select  style={{fontSize:'17px'}} type={this.state.type} onChange={(e)=>{this.setState({type:e.target.value})}}>
                                <option value="CL">CL</option>
                                <option value="EL">EL</option>
                                <option value="SL">SL</option>
                                <option value="LWP">LWP</option>
                            </select>
                            </center></FormGroup> 
 */}

                            <FormGroup>
                                      <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText>
                                            <i className="ni ni-calendar-grid-58" />
                                          </InputGroupText>
                                        </InputGroupAddon>
                                        <ReactDatetime
                                          inputProps={{
                                            placeholder: "Date Picker Here"
                                          }}
                                          timeFormat={false}
                                        />
                                      </InputGroup>
                                    </FormGroup>

	                        <FormGroup>
                            <Row>
                                <Col xs={6}>
                                    <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-calendar-grid-58" />
                                        </InputGroupText>
                                        </InputGroupAddon>
                                        <ReactDatetime
                                        inputProps={{
                                            placeholder: "From"
                                        }}
                                        timeFormat={false}
                                        renderDay={(props, currentDate, selectedDate) => {
                                            let classes = props.className;
                                            if (
                                            this.state.startDate &&
                                            this.state.endDate &&
                                            this.state.startDate._d + "" === currentDate._d + ""
                                            ) {
                                            classes += " start-date";
                                            } else if (
                                            this.state.startDate &&
                                            this.state.endDate &&
                                            new Date(this.state.startDate._d + "") <
                                                new Date(currentDate._d + "") &&
                                            new Date(this.state.endDate._d + "") >
                                                new Date(currentDate._d + "")
                                            ) {
                                            classes += " middle-date";
                                            } else if (
                                            this.state.endDate &&
                                            this.state.endDate._d + "" === currentDate._d + ""
                                            ) {
                                            classes += " end-date";
                                            }
                                            return (
                                            <td {...props} className={classes}>
                                                {currentDate.date()}
                                            </td>
                                            );
                                        }}
                                        onChange={e => this.setState({ startDate: e })}
                                        />
                                    </InputGroup>
                                    </FormGroup>
                                </Col>
                                <Col xs={6}>
                                    <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-calendar-grid-58" />
                                        </InputGroupText>
                                        </InputGroupAddon>
                                        <ReactDatetime
                                        inputProps={{
                                            placeholder: "To"
                                        }}
                                        timeFormat={false}
                                        renderDay={(props, currentDate, selectedDate) => {
                                            let classes = props.className;
                                            if (
                                            this.state.startDate &&
                                            this.state.endDate &&
                                            this.state.startDate._d + "" === currentDate._d + ""
                                            ) {
                                            classes += " start-date";
                                            } else if (
                                            this.state.startDate &&
                                            this.state.endDate &&
                                            new Date(this.state.startDate._d + "") <
                                                new Date(currentDate._d + "") &&
                                            new Date(this.state.endDate._d + "") >
                                                new Date(currentDate._d + "")
                                            ) {
                                            classes += " middle-date";
                                            } else if (
                                            this.state.endDate &&
                                            this.state.endDate._d + "" === currentDate._d + ""
                                            ) {
                                            classes += " end-date";
                                            }
                                            return (
                                            <td {...props} className={classes}>
                                                {currentDate.date()}
                                            </td>
                                            );
                                        }}
                                        onChange={e => this.setState({ endDate: e })}
                                        />
                                    </InputGroup>
                                    </FormGroup>
                                </Col>
                                </Row>
	                        </FormGroup>
    
	                        <FormGroup>
	                        <Input
                                    id="exampleFormControlTextarea1"
                                    placeholder="reason"
                                    rows="3"
                                    type="textarea"
                                    onChange={(e)=>{this.setState({reason:e.target.value})}}
                                />
	                        </FormGroup>
	                        
	                        <div className="text-center">
	                          <Button
	                            className="mt-4"
	                            color="primary"
	                            type="submit"
	                          >
                                  Submit
	                          </Button>
	                        </div>
	                      </Form>
	                    </CardBody>
	                  </Card>
	                </Col>
	              </Row>
            </Container>
		</section>
  		)
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    leave: (data) => dispatch(leave(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Leave);


