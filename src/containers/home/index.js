import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import { Link } from 'react-router-dom';

 class Home extends React.Component{
  login = () => {
    this.props.history.push('/login')
  }
  render(){
    return(
        <div className='container' style={{marginTop: "10px"}}>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Task Manager</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} onClick={() => this.props.changePage()}>
                  Task List
                </NavItem>
                {/* <NavItem eventKey={2} href="#">
                  Link
                </NavItem> */}
                {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown> */}
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} onClick={this.login} style={{paddingRight: "20px"}}>
                  Logout
                </NavItem>
                {/* <NavItem eventKey={2} href="#">
                  Link Right
                </NavItem> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <p>Count: {this.props.count}</p>

          <p>
            <button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button>
            <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</button>
          </p>

          <p>
            <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrementing</button>
            <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrement Async</button>
          </p>

          <p><button onClick={() => this.props.changePage()}>Go to about page via redux</button></p>
           <p><button onClick={this.login}>Logout</button></p>
        </div>
      )
  }
 } 

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
