// import React, { useState, useEffect } from "react";
// import Header from "../admin/HeaderAdmin/Header";
// import Sidebar from "../admin/SideBarAdmin/Sidebar";
// import structure from "../admin/SideBarAdmin/SidebarStructure";
// function ProfileAdmin() {
//   return (
//       <div>
//   <Header/>
//   <Sidebar structure={structure} />

//     <h1>HELLOOO  Admin</h1>  
//     </div>
//   );
// }
 
// export default ProfileAdmin;

import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import classnames from 'classnames'
import Icon from '@mdi/react'
 

// styles
import useStyles from './styles'

// components
 
import Header from "../admin/HeaderAdmin/Header";
import Sidebar from "../admin/SideBarAdmin/Sidebar";
import structure from "../admin/SideBarAdmin/SidebarStructure";
import Inscription from "../admin/InscriptionAdmin/Inscription";
// import Footer from '../Footer'
import { Link } from '../../components/Wrappers'
 

// pages
 
// context
import { useLayoutState } from '../../context/LayoutContext'
import { ProductsProvider } from '../../context/ProductContext'

 

function Layout(props) {
    const classes = useStyles()
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = React.useState(2)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)
    const id = open ? 'add-section-popover' : undefined
    const handleClick = event => {
        setAnchorEl(open ? null : event.currentTarget)
    }

    // global
    const layoutState = useLayoutState();

    // eslint-disable-next-line no-unused-vars
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    // eslint-disable-next-line no-unused-vars
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }

    return (
        <div className={classes.root}>
   <Header/>
    <Sidebar structure={structure} />
            <div
                className={classnames(classes.content, {
                    [classes.contentShift]: layoutState.isSidebarOpened,
                })}
            >
                <div className={classes.fakeToolbar} />
            
                <Switch>
                    <Route path="/admin/Inscription" component={Inscription} />

           
                </Switch>
             
                {/* <Footer>
                   
                </Footer> */}
            </div>
        </div>
    )
}

export default withRouter(Layout)
