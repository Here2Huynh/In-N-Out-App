import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
        {/* {console.log('props.open', props.open)} */}
        <BackDrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')} >
            <div className={classes.Logo} >
                <Logo />
            </div>
            <nav>
                <Navigationitems />
            </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer;


// either make logo accept props.height and adjust it in the inline style
// eslint-disable-next-line
{/* <Logo height='11%' /> */}