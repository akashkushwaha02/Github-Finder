import React, { Fragment,Component } from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

export class UserSingle extends Component {
    

    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes ={
        loading: PropTypes.bool,
        userSingle: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    };

    render(){
        const { name,login,bio,blog,html_url,followers,following,public_repos,public_gists,hireable,avatar_url,location } = this.props.userSingle;
        console.log(this.props.userSingle);
        const { loading } = this.props;
        
        if(loading) return <Spinner />

        return <Fragment>
                <Link to='/' className='btn btn-light'> Back to search </Link>
                hireable:{' '}
                {hireable ? ( 'Yes' ) : ('No') }

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt="" style={{width: '150px'}}/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        { bio && (
                            <Fragment>
                                Bio: {bio}
                            </Fragment>
                            )   
                        }
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github profile</a>
                        <ul>
                        <li>                            
                            { blog && (
                                <Fragment>
                                    Blog: {blog}             
                                </Fragment>
                            ) }
                            
                        </li>
                    </ul>
                    </div>
                    
                            <div className="card text-center">
                                <div className="badge badge-primary">Followers: {followers}</div>
                                <div className="badge badge-light">Following: {following}</div>
                                <div className="badge badge-danger">Public Repo: {public_repos}</div>
                                <div className="badge badge-dark">Public Gits: {public_gists}</div>
                            </div>
                </div>

            </Fragment>;
        
    }
}

export default UserSingle