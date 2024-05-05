import React from 'react';
import { useState, useEffect, } from 'react';
import axios from 'axios';
import './MentorsList.css';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function MentorsList() {
    const classes = useStyles();

    const [menterlist, setMenterlist] = useState([]);
    const [itemlength, setItemlength] = useState([]);

    const [data, setData] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3002/employee').then((res) => {
            setMenterlist(res.data.data);
            setData(false);
            setItemlength(res.data.data.length)
        });
        console.log(menterlist);
    }, [data]);
    return (
        <React.Fragment>
            <div>
                <h1> Welcome to PickUp</h1>
                <h5>Your can find your own mentors here!</h5>
                <h6>Number of Mentor available! {itemlength} </h6>
                <div className="listofMentors">
                {menterlist.map((item, index) => {
                    return (
                            <Card className={classes.root +'' + " cards "}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                        </Avatar>
                                    }
                                    title={item.fname + ' ' + item.lname}
                                    subheader={item.technologies}
                                />
                                <CardContent>
                                    <div className="moredetails">
                                        <p>{item.name}</p>
                                        <p>{item.loc} </p>
                                        <p>{item.descr} </p>
                                    </div>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.descr}
                                    </Typography>
                                </CardContent>
                            </Card>
                    );
                })}
                </div>
                

            </div>
        </React.Fragment>
    );
}
export default MentorsList;


