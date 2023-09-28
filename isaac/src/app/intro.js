import isaac from './imports/isaac.jpg'
import Image from 'next/image'
import Grid2 from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography';



export default function Menu() {
  return (
    <div>
      <Grid2 container>
        <Grid2 container xs={3}>
          <Image
            src={isaac}
            alt="isaac"
            height={200}
            width={300}
          // fill={true}
          />
        </Grid2>
        <Grid2 xs={9} container>
          <Typography variant="h1" align="left">
            Isaac Northrop
          </Typography>
        </Grid2>
      </Grid2>
    </div>
  )
}