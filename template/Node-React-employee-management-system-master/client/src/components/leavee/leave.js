import React, { Component } from 'react';
import { connect } from 'react-redux';
import './status.css';
 import Table from './tryleave.js'

//import Instructions from './Instructions';
import {Leave } from '../../Actions/UserAction';

import {
  Button,
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
  Col
} from "reactstrap";


class leave extends Component {

	constructor(props) {
		super(props)
		this.state ={
			DataArr:[{'S.no':'1.','Type Of Leave':'SL','Applied Date':'18/01/20','From':'20/01/20','To':'22/01/20','Status':''},
			{'S.no':'2.','Type Of Leave':'SL','Applied Date':'18/01/20','From':'20/01/20','To':'22/01/20'}]
		}
	}
	
	/*() {
        super();
         this.state = {
        };
      	//   this.submitValue = this.submitValue.bind(this); 
    }*/

   /* submitValue(event){
		event.preventDefault();
		var leaveObj = {
		}
		console.log("saving........",leaveObj)
		this.props.leave(leaveObj);
    }*/

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
	                <Col lg="12">
	                  <Card className="bg-secondary shadow border-0">
	                    <CardBody className="px-lg-12 py-lg-12">

	                      <div className="text-center mb-4">
	                        <big>Approval Status</big>
	                      </div>
	                        <div className="text-center">
									{ <Table data={this.state.DataArr}/> }</div>
	                    </CardBody>
	                  </Card>
	                </Col>
	              </Row>
           		</Container>
		</section>
  		)
    }
}

// const mapStateToProps = (state) => ({
// })

// const mapDispatchToProps = (dispatch) => ({
//     leave: (data) => dispatch(leave(data))
// })

export default  leave;

