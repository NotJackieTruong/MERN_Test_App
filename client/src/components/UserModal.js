import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import for tab inside the modal
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NavBar from './NavBar'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));
// tabs inside the modal
const TabPanel = (props) => {
  const { children, value, index, ...other } = props
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.prototype = {
  children: PropTypes.node,
  // index: PropTypes.any.isRequired,
  // value: PropTypes.any.isRequired
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function ModalTabs(props) {
  const classes = useStyles();
  const {piority} = props
  const iniPiority = parseInt(piority,10)
  console.log("new value: ", iniPiority)
  const [value, setValue] = useState(piority)
  const handleChange = (event, newValue) => {
    setValue(newValue)
    event.target.value = newValue
    console.log("the handleChange function worked: ", event.target.value)
  }

  // console.log("piority from user modal: ", piority)
  console.log("value: ", value, ", setValue: ", setValue)
  // console.log("type of piority: ", typeof piority, ", type of value: ", typeof value)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={iniPiority} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  )
}

// modal when clicking
function UserModal(props) {
  const classes = useStyles();
  console.log("useState: ", React.useState(props))
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        {ModalTabs(props)}
      </Fade>
    </Modal>
  )

}

export default UserModal