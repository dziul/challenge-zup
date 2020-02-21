import React, { useEffect } from "react";
import { Route as RouterRoute } from "react-router-dom";

const Route  = ({title, component:Component, path, ...rest}) => {

    useEffect(()=>{
        document.title = title;
    },[title]);
    return(
        <RouterRoute path={path} {...rest} render={props =>{
            
            return(
                <>
                    <Component {...props}/>
                </>
            );
        }} />
    );

};

export default Route;