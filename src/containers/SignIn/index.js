import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {withRouter} from 'react-router'

import {  Col, FormControl, FormGroup, Button, Checkbox } from 'react-bootstrap'
 class SignIn extends React.Component{
	constructor(props){
		super(props);

		this.state={
			form: {
		        email: '',
		        password: '',
		    },
		}
	}


	onChange = (key,e) => {
		let {form} = this.state;
		form[key] = e.target.value;
		this.setState({ form });
	}

	onSubmit = (evt) => {
	  evt.preventDefault();
	  console.log("Hit are comming from user", this.state.form);
	  axios.post(`http://localhost:3003/api/login`, this.state.form)
  		.then(res => {
  			sessionStorage.setItem('token',res.data.token);
				this.props.history.push('/');
			})

	  .catch(function (error) {
	    console.log(error);
	  });
    }

	render(){
		console.log(this.state.form);
		return(
			<Col sm={4} smOffset={4} style={{marginTop:'140px'}}>
				<Col>
				<form className="well" onSubmit={this.onSubmit}>
					<h1 style={{textAlign:'center', marginBottom:'20px'}}>Login</h1>
				    <FormGroup>
				      <FormControl type="text" placeholder="Email" onChange={this.onChange.bind(this,'email')} style={{height:'40px'}}/>
				    </FormGroup>
				    <FormGroup>
				      <FormControl type="password" placeholder="Password" onChange={this.onChange.bind(this,'password')} style={{height:'40px'}}/>
				    </FormGroup>
				    <FormGroup>
				    <Col>
				      <Checkbox style={{float:'left',marginTop:'0px'}}>Check me out</Checkbox>
				      <Link className="pull-right" to="/Signup">signup ?</Link>
				      </Col>
				    </FormGroup>
				    <FormGroup>
				      <Button bsStyle="primary" style={{width:'100%', height:'40px',marginBottom:'10px'}} onClick={this.onSubmit} type="submit">submit</Button>
				    </FormGroup>
				 </form>
				 </Col>
			</Col>
		)
	}
}
export default withRouter(SignIn);