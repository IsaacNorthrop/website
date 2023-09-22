import Grid2 from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography';


export default function Content() {
    return (
        <div>
            <Grid2 container>
                <Grid2 xs={12}>
                    <Typography align='right'>
                        content one
                    </Typography>
                </Grid2>
                <Grid2 xs={12}>
                    <Typography align='left'>
                        content two
                    </Typography>
                </Grid2>
            </Grid2>
        </div>
    )
}