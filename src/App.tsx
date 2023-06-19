import { useRef } from 'react'
import './App.css';
import { Container, Paper, Typography } from '@mui/material';

import * as tf from '@tensorflow/tfjs'
import * as facemesh from '@tensorflow-models/facemesh'
import Webcam from 'react-webcam'

function App() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  const runFacemesh = async (): Promise<void> => {
    const net = await facemesh.load({
      inputResolution: { width: 640, height: 480 }, scale: 0.8
    })
  }

  const styles = {
    Container: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    Title: {
      fontWeight: 700
    },
    FlexBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: 5,
      width: '100%'
    },
    Webcam: {
      width: '100%'
    }
  }

  return (
    <Container sx={styles.Container}>
      <Paper sx={styles.FlexBox} elevation={0}>
        <Webcam ref={webcamRef} style={styles.Webcam as {}} />
        <canvas style={styles.Webcam as {}} ref={canvasRef}></canvas>
      </Paper>
    </Container >
  );
}

export default App;