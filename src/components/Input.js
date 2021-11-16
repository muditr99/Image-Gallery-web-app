import React from 'react'
import TextField  from '@material-ui/core/TextField';


const Input = (props) => {
    return (
       <form onSubmit={props.submit} style={{margin:"1.8rem 0"}}>
           <TextField onChange={props.change} fullWidth label="Search" />
       </form>
    )
}

export default Input
