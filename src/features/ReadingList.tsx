import React from 'react'
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import moment from 'moment'
import AddReadingDialog from './AddReadingDialog';
import { openAddDialog } from './readingsSlice';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../app/Firebase'

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
    const [readingsList, loading, error] = useCollection(firestore.collection(type).orderBy('timestamp', 'desc'));
    const dispatch = useDispatch();

    return (
        <div>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection: Loading...</span>}
            {readingsList && 
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
                            {readingsList.docs.map((doc: { id: string; data: () => { timestamp: number; value: number; }; }) => (
                                <TableRow key={doc.id}>
                                    <TableCell align="center">{moment(doc.data().timestamp).format('L')}</TableCell>
                                    <TableCell align="right">{doc.data().value}</TableCell>
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
            }
        </div>
    )
}

export default ReadingList
