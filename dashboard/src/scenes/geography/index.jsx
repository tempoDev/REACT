import React from 'react'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import GeographyChart from '../../components/GeographyChart'

export default function Geography() {
  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        
        <Box m="20px">

            <Header title="Geo Chart" subtitle="Simple Map Geo Chart" />

            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} >
                <GeographyChart />
            </Box>

        </Box>

  )

}
