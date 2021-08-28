import { Box, makeStyles} from "@material-ui/core";
// import { border, typography } from "@material-ui/system";
import coderIMg from '../assets/images/coderImg.jpg'
import mukeshIMg from '../assets/images/mukeshImg.jpg'

const usestyle = makeStyles({
    box1:{
        margin:'3vh',
        fontWeight:"bold",
        fontSize:'3vw',
        textAlign:'center'
    },
    box2:{
        display: 'flex',
        border:'5px solid black'
    }
})

const CodeByMukesh = () => {
    const classes = usestyle();
    return (
        <>
            <Box className={classes.box1}>
                <typography >Code By Mukesh</typography>
            </Box>
            <Box  className={classes.box2}>
                <img src={mukeshIMg} style={{ width: '60vw' }} alt="" />
                <img src={coderIMg} style={{ width: '40vw' }} alt="" />
            </Box>
        </>

    )
}

export default CodeByMukesh;