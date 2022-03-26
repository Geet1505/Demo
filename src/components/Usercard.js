import React from'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =makeStyles((theme) => ({
    backdrop: {
        zIndex :theme.zIndex.drawer + 1,
        color: 'black',
    },
}));

const Usercard = ({loading,users}) =>{
    const classes =useStyles();
    return loading ? (
        <Backdrop className={classes.backdrop} open>
            <CircularProgress color ="inherit" />
            loading ...
        </Backdrop>
    ) :

(
    <div>
        {users.map(users =><div key ={users.id}>{usercardbox(users.avatar,users.first_name+" "+
        users.last_name,users.email)}</div> 
    
        )
}
</div>
)
}

const usercardbox = (x,y,z) =>{
return (
    <React.Fragment> 
    <div className='navbar navbar-dark cardContainer'>
        <div classname="card">
   <img className="card-img-top" src={x} alt="card_image"/>
   <div classname="card-body">
          <h5 className="card-title">{y}</h5>
          <p className="card-text">{z}</p>
        </div>
    </div></div>
</React.Fragment>

)
}

export default Usercard;