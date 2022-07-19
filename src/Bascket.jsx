import {useSelector} from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material'
import Countercar from './Countercar'


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function Bascket({handelforec }) {
    const rows = [];


    const state = useSelector(state => state)
    const b =state.filter(i=>i.count>0)
    const car=state.filter(i=>i.count>0)
   car.map(i=> 
 rows.push(createData(i.title,i.price, i.count, (i.count)*(i.price) ,<Countercar handelforec={handelforec} postitem={i}/>)) 
    
   )
   console.log(b);
   if (b.length>0) {
     

return (
 <Grid container 
         justifyContent="center"
        alignItems="center" > 
        <Grid item xs={12} ma={8}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">count</TableCell>
            <TableCell align="right">total price</TableCell>
            <TableCell align="right">actioin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
       

)
   }
   else {
       return (
           <h4>
           سبد خرید شما خالی میباشد
           </h4>
       )
   }
    
}
