import React, { Component } from 'react';
import { getdata } from '../../Actions/UserAction';
import './status.css';
// import Table from './tryleave'  
import { connect } from 'react-redux';
import {
  Table,
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
} from "reactstrap";


class Leavelist extends Component {
  constructor() {
      super();
      this.state = {
        userList : [],
      };
  }
  


  componentDidMount() {
    this.props.getdata();
  }

  render() {
      // var userInfo = this.props.user && this.props.user.userInfo;
      // console.log(userInfo.type)

      this.state.userList =  this.props.user.userList;
      let data = this.state.userList
      console.log(data)
     return (
          <section className="section section-shaped  pb-250">
           <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            <Container className="lg-md mt-lg-md">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-12 py-lg-12">
                      <div className="text-center mb-4">
                        <big>Approval Status</big>
                      </div>
                    
          
                      <div style={{backgroundColor:"white"}}>
                      
                        
                              <Table striped bordered hover>
                                  <thead>
                                  <tr>
                                  <th>S.NO</th>                            
                                    <th>TYPE</th>
                                    <th>FROM</th>
                                    <th>TO</th>
                                    <th>STATUS</th>
                                  </tr>
                                </thead>
                                <tbody>
                                { this.state.userList.map((item,index)=>(
                                  <tr>
                                    <td></td>
                                    <td>{item.type}</td>
                                    <td>{item.from}</td>
                                    <td>{item.to}</td>
                                    <td></td>
                                  </tr>
                                  ))}
                                </tbody>
                              </Table>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

            </Container> 
          </section>
     )
    }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
    getdata: () => dispatch(getdata())    
})

export default connect(mapStateToProps, mapDispatchToProps)(Leavelist);




