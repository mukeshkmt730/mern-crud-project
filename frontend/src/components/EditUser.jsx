import { Box, makeStyles } from "@material-ui/core";
import { FormGroup, FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { editUser, getUsers } from "../Service/api";
import { useHistory, useParams } from "react-router";

const initialValues={
    name:'',
    username:'',
    email:'',
    phone:''
}

const usestyle = makeStyles({
    box1: {
        margin: '3vh',
        fontWeight: "bold",
        fontSize: '3vw',
        textAlign: 'center'
    },
    box2:{
          display:'flex',
          justifyContent:'center'
    },
    container:{
        width:'50vw',
        '&>*':{
            marginTop:'2vh'
        }
    },
    button:{
        position:'relative',
        left:'25vw',
        top:'5vh',
        transform: 'translate(-50%, -50%)',
        background:'blue',
        width:'10vw',
        '&:hover': {
            background :'red',
            color:'white',
        }
    }
})



const EditUser = () => {
    const [user, setuser] = useState(initialValues);
    const {name, username, email, phone}=user;
    const {id}=useParams();
    const onValueChange=(e)=>{
        console.log(e.target.value);
        setuser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }
    

    const history=useHistory();

    useEffect(() => {
       loadUserData();
    }, [])

    const loadUserData=async()=>{
        const response=await getUsers(id);
        setuser(response.data);
    }

    const editUserDetails=async()=>{
        await editUser(id,user);
        history.push('../all');
    }

    const classes = usestyle();



    return (
        <>
            <Box className={classes.box1}>
                <typography >Edit User Details</typography>
            </Box>
            <Box className={classes.box2}>
                <FormGroup className={classes.container}> 
                    <FormControl>
                        <InputLabel >Name</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="name"  value={name} />
                    </FormControl>
                    <FormControl>
                        <InputLabel >User Name</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="username" value={username} />
                    </FormControl>
                    <FormControl>
                        <InputLabel >Email</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="email"  value={email} />
                    </FormControl>
                    <FormControl>
                        <InputLabel >Phone</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="phone" value={phone} />
                    </FormControl>
                    <Button className={classes.button} onClick={()=>editUserDetails()}>Edit User</Button>
                </FormGroup>
                

            </Box>
        </>
    )
}

export default EditUser;