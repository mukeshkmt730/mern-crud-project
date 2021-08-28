import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";


const useStyle = makeStyles({
    header: {
        background: 'red'
        },
    tabs: {
        margin:'4vh',
        color: 'white',
        textDecoration: 'none',
        fontSize: '2vw',
        '&:hover': {
            // textDecoration: 'underline',
            background :'white',
            color:'black'
        }
    }
})


const NavBar = () => {
    const classStyle = useStyle();
    return (
        <AppBar className={classStyle.header} position="static">
            <Toolbar >
                <NavLink className={classStyle.tabs} to='/'>Code by mukesh</NavLink>
                <NavLink className={classStyle.tabs} to='/All' >All Users</NavLink>
                <NavLink className={classStyle.tabs} to='/Add' >Add Users</NavLink>
            </Toolbar>
        </AppBar >
    )
}
export default NavBar;