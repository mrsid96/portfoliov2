import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    pane: {
        marginTop: "inherit"
    },
}));

const Shimmers = () => {
    const classes = useStyles();

    return (
        <div className={classes.pane}>
            <Skeleton animation="wave" variant="text" height={40} width={"30%"} />
            <Skeleton animation="wave" variant="text" height={40} width={"45%"} />
            <Skeleton animation="wave" variant="text" height={20} width={"95%"} />
            <Skeleton animation="wave" variant="text" height={20} width={"95%"} />
            <Skeleton animation="wave" variant="text" height={20} width={"95%"} />

            <div className={classes.pane}>
                <Skeleton animation="wave" variant="text" height={40} width={"45%"} />
                <Skeleton animation="wave" variant="text" height={30} width={"95%"} />
                <Skeleton animation="wave" variant="text" height={30} width={"95%"} />
                <Skeleton animation="wave" variant="text" height={30} width={"95%"} />
                <Skeleton animation="wave" variant="text" height={30} width={"95%"} />
                <Skeleton animation="wave" variant="text" height={30} width={"95%"} />
            </div>

            <div className={classes.pane}>
                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={12} sm={6} md={4} elevation={3}>
                        <Paper elevation={3}>
                            <div style={{ padding: "10px" }}>
                                <Skeleton animation="wave" variant="text" height={40} width={"50%"} />
                                <Skeleton animation="wave" variant="text" height={30} width={"90%"} />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} elevation={3}>
                        <Paper elevation={3}>
                            <div style={{ padding: "10px" }}>
                                <Skeleton animation="wave" variant="text" height={40} width={"50%"} />
                                <Skeleton animation="wave" variant="text" height={30} width={"90%"} />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} elevation={3}>
                        <Paper elevation={3}>
                            <div style={{ padding: "10px" }}>
                                <Skeleton animation="wave" variant="text" height={40} width={"50%"} />
                                <Skeleton animation="wave" variant="text" height={30} width={"90%"} />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div className="shimmerDiv">
                <span class="fatLines shine"></span>
                <span class="fatLines shine"></span>
            </div>

            <div className="shimmerDiv">
                <span class="lines shine"></span>
                <span class="lines shine"></span>
                <span class="lines shine"></span>
            </div>

            <div style={{ marginTop: "50px" }} className="shimmerDiv">
                <span class="fatLines shine"></span>
            </div>

            <div className="shimmerDiv">
                <span class="shortLines shine"></span>
                <span class="shortLines shine"></span>
                <span class="shortLines shine"></span>
                <span class="shortLines shine"></span>
                <span class="shortLines shine"></span>
            </div>


        </div>
    )
}

export default Shimmers;