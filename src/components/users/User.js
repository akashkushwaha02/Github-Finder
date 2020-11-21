import React from 'react'
import UserItem from './UserItem'
import spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'

const User = ({users,loading }) => {
    if(loading ){
        return <Spinner />
    }else{
        return (
            <div style={userStyle}>
              {users.map(users => (
                <UserItem key={users.id} users={users}/>
                ))}  
            </div>
        )
    }
            
}

User.propType ={
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle= {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap : '1rem'
}

export default User
