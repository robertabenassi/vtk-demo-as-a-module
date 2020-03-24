import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import VtkSlider from '../VtkSlider';
import VtkHueSlider from '../VtkHueSlider';

interface IVtkControlPanelProps {
    onResolutionChange(event: any, newValue: number | number[]): void,
    onBackgroundChange(event: any, newValue: number | number[]): void,
    onFigureChange(event: any, newValue: number | number[]): void,
}


const VtkControlPanel = (props: IVtkControlPanelProps) => {
    const { onResolutionChange, onBackgroundChange, onFigureChange } = props;
    return (
        <Paper style={{zIndex: 1000, position: 'relative', width: '90%', margin: '0 auto'}}>
            <Box m={2}>
                <Grid container spacing={2}>
                    <Grid xs={4} item>
                        <VtkHueSlider defaultValue={1} label="Background color" onChange={onBackgroundChange} />
                    </Grid>
                    <Grid xs={4} item>
                        <VtkHueSlider defaultValue={213} label="Figure color" onChange={onFigureChange} />
                    </Grid>
                    <Grid xs={4} item>
                        Figure #faces <br />
                        <VtkSlider min={3} onChange={onResolutionChange} style={{maxWidth: 300}} /> 
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

export default VtkControlPanel