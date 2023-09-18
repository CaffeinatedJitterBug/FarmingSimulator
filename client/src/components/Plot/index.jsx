import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import TomatoSeed from '../../assets/tomato_seedling.png';
import PumpkinSeed from '../../assets/pumpkin_seedling.png';
import CornSeed from '../../assets/corn_seedling.jpg';
import LettuceSeed from '../../assets/lettuce_seedling.jpg';
import BlueberrySeed from '../../assets/blueberry_seedling.png';
import EggplantSeed from '../../assets/eggplant_seedling.jpg';
import Soil from '../../assets/soil.webp';

const Plot = ({ activePlantState }) => {

    const handlePlant = async (event) => {
        let toPlant;
        switch(activePlantState) {
            case 'tomato':
                toPlant = TomatoSeed;
                break;
            case 'pumpkin':
                toPlant = PumpkinSeed;
                break;
            case 'corn':
                toPlant = CornSeed;
                break;
            case 'lettuce':
                toPlant = LettuceSeed;
                break;
            case 'blueberries':
                toPlant = BlueberrySeed;
                break;
            case 'eggplant':
                toPlant = EggplantSeed;
                break;
        }


        if (event.target.innerHTML !== 'X') {
            event.target.src = toPlant;
        } else {
            event.target.innerHTML = 'X';
        }
    }
    return (
    <Container fixed >
        <Box sx={{bgcolor:'#a64a2b', height: '20vh', width:'85%'}}>
            <Grid container spacing={0}>
                <Grid div xs={6}>
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                </Grid>
                <Grid div xs={6}>
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                    <img onClick={handlePlant} className='plant' src={Soil}/>
                </Grid>
            </Grid>
        </Box>
    </Container>
    )
}

export default Plot;