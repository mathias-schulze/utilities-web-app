import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import moment from 'moment'
import AddReadingDialog from './AddReadingDialog';
import { openAddDialog, getPowerList, getGasList } from './readingsSlice';
import { POWER } from '../App'

interface ReadingListProps {
  type: string;
}

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(5),
    },
}));

const ReadingList = ({ type }: ReadingListProps) => {

    const classes = useStyles();
    const readingsList = useSelector(type === POWER ? getPowerList : getGasList);
    const dispatch = useDispatch();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Datum</TableCell>
                            <TableCell>Zählerstand</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {readingsList.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="center">{moment(row.date).format('L')}</TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Fab color="primary" className={classes.fab} onClick={e => dispatch(openAddDialog())}>
                <Add/>
            </Fab>
            <AddReadingDialog type={type}/>
        </div>
    )
}

export default ReadingList
