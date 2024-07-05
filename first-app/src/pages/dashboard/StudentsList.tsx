import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import Icon from "../../shared/components/icon/Icon";
import CardList from "./CardList";
import CardListItem from "./CardListItem";
import { TextField } from "@mui/material";


const Transition = React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
)=> {
  return <Slide direction="down" ref={ref} {...props} />;
});


function Studentslist() {
    const [openModal, setOpenModal] = React.useState(false);
    const [students, setStudetns] = useState([]);

    const getStudetns = () => {
        fetch('http://localhost:3000/students').then((res) => {
            res.json().then((data) => {
                console.log('@@@ students', data);
                setStudetns(data)
            })
            
        }).catch((err) => {
            console.log('@@@ ERR', err);
        })
    };

    
    const handleClickOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        getStudetns();
    }, []);


    return (
        <section className="students-block">
            <div className="section-title-block">
                <h3 className="card-title">Stundets</h3>
                <span className="add-students-icon" onClick={handleClickOpen}>
                    <Icon name="plus"/>
                </span>
            </div>
            <div className="section-list-totle">
                You have 456 students
            </div>
            
            <div className="card-list-wrapper">
                <CardList>
                    {students.map((ele: any) => {
                        return (
                            <CardListItem title={ele.name} subTitle={`Class ${ele.className} ${ele.classSection}`} key={ele.id} renderRihtSide={() => {
                                return (
                                    <div className="email-icon">
                                        <Icon name="email"/>
                                    </div>
                                )
                            }}/>
                        )
                    })}
                </CardList>
                <section>
                    <button className="btn full" type="button">View More</button>
                </section>
            </div>

            <Dialog
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth={true}
                maxWidth="sm"
                
            >
                <DialogTitle>
                    <h4>Add Students</h4>
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <div className="form-block">
                        <div className="form-field-row">
                            <div className="form-group">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    defaultValue=""
                                    sx={{width: '100%'}}
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    defaultValue=""
                                    sx={{width: '100%'}}
                                />
                            </div>
                        </div>

                        <div className="form-field-row">
                            <div className="form-group">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Class Name"
                                    defaultValue=""
                                    sx={{width: '100%'}}
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Classs Section"
                                    defaultValue=""
                                    sx={{width: '100%'}}
                                />
                            </div>
                        </div>
                        
                    </div>
                   
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </section>
    );
}

export default Studentslist;