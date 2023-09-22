import isaac from './imports/isaac.jpg'
import Image from 'next/image'
import Grid2 from '@mui/material/Unstable_Grid2'


export default function Menu() {
  return (
    <div>
      <Grid2 container>
        <Grid2 container xs={6}>
          <Image
            src={isaac}
            alt="isaac"
            height={200}
            width={300}
          // fill={true}
          />
        </Grid2>
        <Grid2 xs={6}>
          <p>
            Isaac Northrop
          </p>
        </Grid2>
      </Grid2>
    </div>
  )
}