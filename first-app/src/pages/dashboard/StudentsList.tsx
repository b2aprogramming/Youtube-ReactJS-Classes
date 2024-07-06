import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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

const formFields = {
    name: '',
    className: '',
    avatar: '',
    email: '',
    classSection: '',
    joiningDate: dayjs(new Date()),
    parentName: '',
    phone: '',
    city: '',
};

function Studentslist() {
    const [openModal, setOpenModal] = React.useState(false);
    const [students, setStudetns] = useState<any>([]);
    const [stuendtForm, setStudentForm] = useState(formFields);

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

    const submitForm = () => {
       // setOpenModal(false);
       console.log('@@@ FORM', stuendtForm)
       let id = (+students[students.length-1].id) + 1;
       const payload = {
        ...stuendtForm,
        joiningDate: stuendtForm.joiningDate.format('DD/MM/YYYY'),
        id: id
       };

       fetch('http://localhost:3000/students', {
        method: 'POST',
        body: JSON.stringify(payload)
       }).then((res) => {
        res.json().then((data) => {
            console.log('@@@ save students', data);
            setOpenModal(false);
            setStudentForm(formFields);
        })
        
    }).catch((err) => {
        console.log('@@@ ERR', err);
    })
    };

    const changeInput = (evt: React.ChangeEvent<HTMLInputElement>, formField: string) => {
        setStudentForm((prev: any) => {
            const fields = {
                ...prev
            };
            fields[formField] = evt.target.value;
            return fields;
        })
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
                                    value={stuendtForm.name}
                                    sx={{width: '100%'}}
                                    onChange={(evt: any) => changeInput(evt, 'name')}
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    value={stuendtForm.email}
                                    defaultValue=""
                                    sx={{width: '100%'}}
                                    onChange={(evt: any) => changeInput(evt, 'email')}
                                />
                            </div>
                        </div>

                        <div className="form-field-row">
                            <div className="form-group">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Phone"
                                    value={stuendtForm.phone}
                                    defaultValue=""
                                    sx={{width: '100%'}}
                                    onChange={(evt: any) => changeInput(evt, 'phone')}
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Parent Name"
                                    value={stuendtForm.parentName}
                                    defaultValue=""
                                    sx={{width: '100%'}}
                                    onChange={(evt: any) => changeInput(evt, 'parentName')}
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
                                    value={stuendtForm.className}
                                    sx={{width: '100%'}}
                                    onChange={(evt: any) => changeInput(evt, 'className')}
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Classs Section"
                                    value={stuendtForm.classSection}
                                    defaultValue=""
                                    sx={{width: '100%'}}
                                    onChange={(evt: any) => changeInput(evt, 'classSection')}
                                />
                            </div>
                        </div>
                        <div className="form-field-row">
                            <div className="form-group">

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                                label="Joining Date"
                                sx={{width: '100%'}}
                                value={stuendtForm.joiningDate}
                                onChange={(evt: any) => changeInput(evt, 'joiningDate')}
                            />
                            </LocalizationProvider>
                            </div>
                            <div className="form-group">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="City"
                                    value={stuendtForm.city}
                                    defaultValue=""
                                    sx={{width: '100%'}}
                                    onChange={(evt: any) => changeInput(evt, 'city')}
                                />
                            </div>
                        </div>
                        
                    </div>
                   
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={submitForm}>Submit</Button>
                </DialogActions>
            </Dialog>
        </section>
    );
}

export default Studentslist;