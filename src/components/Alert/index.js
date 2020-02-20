import React, {useState, useEffect, memo} from 'react';
import {Snackbar , IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = ({visible=false, type, timeout=5000, message, children}) => {

    const [open, setOpen] = useState(false);
    const onCloseHandling = ()=>setOpen(false);

    useEffect(()=>{
        setOpen(visible);
    }, [visible]);

    const ButtonClose = <IconButton size="small" onClick={onCloseHandling}><ClearIcon aria-label="close alert"/></IconButton>;
    
    return(
        <Snackbar open={open} autoHideDuration={timeout} onClose={onCloseHandling} anchorOrigin={{ vertical:"top", horizontal: "center"  }} >
            <MuiAlert elevation={6} variant="filled" onClose={onCloseHandling} severity={type} action={ButtonClose}>
                {message||children}
            </MuiAlert>
        </Snackbar>
    );
};


export default memo(Alert);