import { getUsers } from "../Service/api";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { deleteUser } from "../Service/api";

const useStyle = makeStyles({
    box1: {
        margin: '3vh',
        fontWeight: "bold",
        fontSize: '3vw',
        textAlign: 'center'
    },
    box2: {
        display: 'flex',
        justifyContent:'center'
    },
    table:{
        width:'90vw',
        border:'2px solid black'
    },
    tableHead:{
        '&>*':{
            background:'black',
            // opacity:'.5',
            color:'white',
            fontWeight:'bold',
            fontSize: '1.5vw',
        }
    },
    row:{
        '&>*':{                        
            fontWeight:'bold',
            fontSize:'1vw'
        }
    },
    button:{
        position:'relative',
        left:'50vw',
        top:'5vh',
        transform: 'translate(-50%, -50%)',
        background:'blue',
        width:'10vw',
        '&:hover': {
            background :'red',
            color:'white',
        }
    },
    button1:{
        background:'violet',
        '&:hover': {
            background :'green',
            color:'white',
        }
    },
    button2:{
        marginLeft:'3vw',
        background:'red',
        '&:hover': {
            background :'black',
            color:'white',
        }
    }

})


const AllUsers = () => {
    
    const classes = useStyle();

    const history=useHistory();

    const addNewUser=()=>{
        history.push('./Add');
    }

    const [users, setusers] = useState([])

    useEffect(() => {
        getAllusers();
    }, [])

    const getAllusers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setusers(response.data);
    }

    const deleteuser=async(id)=>{
        await deleteUser(id);
        getAllusers();
    }

    return (
        <>
            <Box className={classes.box1}>
                <typography >List of All Users Details</typography>
            </Box>
            <Box className={classes.box2}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.tableHead}>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map((user) => {
                                return (
                                    <TableRow className={classes.row} key={user._id}>
                                        <TableCell>{user._id}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.phone}</TableCell>
                                        <TableCell>
                                            <Button className={classes.button1} component={Link} to={`/Edit/${user._id}`}>Edit</Button>
                                            <Button className={classes.button2} onClick={()=>deleteuser(user._id)}>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </Box>
            <Box>
                <Button className={classes.button} onClick={()=>addNewUser()}>Add a New User</Button>
            </Box>

        </>
    )
}

export default AllUsers;