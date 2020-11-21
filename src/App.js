import { render } from '@testing-library/react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import React,{ Fragment,Component } from 'react';
import NavBar from './components/layout/NavBar';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';
import UserSingle from './components/users/UserSingle';


class App extends Component {
  state ={
    users: [],
    userSingle: {},
    alert: null,
    loading: false
    
  };
  
  //async componentDidMount(){ 
  //  this.setState({ loading:true });
  //  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //  this.setState({  users: res.data, loading: false});
  //}  


  //Github search 
  searchUsers = async text =>{
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false});
  };

  getUser = async (username) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ userSingle: res.data, loading: false});
  }

  //Clear users 
  clearUsers = () => {
    this.setState({ users: [], loading: false})
  };

  // alert msg
  setAlert = (msg, type) => {
    this.setState({ alert: {msg,type} });

    setTimeout(() =>  this.setState({alert: null}),2000);
  }
  
  render(){
    const {users,userSingle, loading} = this.state;
    return (
      <Router>
      <div className='App'>
          <NavBar tittle='Github-Finder' icon='fab fab-github'/>          
          <div className='container'> 
            <Alert alert={this.state.alert} />           
            <switch>
              <Route exact path='/' render={props => (
                <Fragment>
                    <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} 
                  showClear={users.length > 0?  true: false} setAlert={this.setAlert}
                  />
                  <User users={users} loading={loading}/>
                </Fragment>
              )} />              

              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props =>(
                <UserSingle userSingle={userSingle} { ...props } getUser={this.getUser} loading={loading} />

              )} />                
            </switch>
            
        </div>
        </div>
        </Router>
    );
    }

}

export default App;
