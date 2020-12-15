import React from 'react'
import {Dialog,DialogTitle,DialogContent,makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    dialogWrapper :{
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    } 
}))

export default function Modal(props) {
 
    const {title,children,openModal,setOpenModal} = props
    const classes = useStyles();
    return (
        <Dialog open={openModal} maxWidth="md" classes={{paper :classes.dialogWrapper}}>
            <DialogTitle>
               <Typography variant="h5" component="div">
                    {title}
               </Typography>
            </DialogTitle>
            <DialogContent dividers>{children}</DialogContent>
        </Dialog>
    )
}
