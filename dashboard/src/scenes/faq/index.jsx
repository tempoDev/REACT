import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

export default function FAQ() {
  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  
    return (
    <Box m="20px">

        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

        <Accordion defaultExpanded>
            
            <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                <Typography color = { colors.greenAccent[500]} variant="h5">
                    An important question
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea consequatur fuga aliquam similique, illo eaque soluta voluptatem labore distinctio ullam exercitationem, fugit beatae commodi ratione ducimus minima maiores?
                </Typography>
            </AccordionDetails>

        </Accordion>

        <Accordion>
            
            <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                <Typography color = { colors.greenAccent[500]} variant="h5">
                    Another important question
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea consequatur fuga aliquam similique, illo eaque soluta voluptatem labore distinctio ullam exercitationem, fugit beatae commodi ratione ducimus minima maiores?
                </Typography>
            </AccordionDetails>

        </Accordion>

        <Accordion>
            
            <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                <Typography color = { colors.greenAccent[500]} variant="h5">
                    ¿Qué me dices?
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea consequatur fuga aliquam similique, illo eaque soluta voluptatem labore distinctio ullam exercitationem, fugit beatae commodi ratione ducimus minima maiores?
                </Typography>
            </AccordionDetails>

        </Accordion>

        <Accordion>
            
            <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                <Typography color = { colors.greenAccent[500]} variant="h5">
                    La duda existencial
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea consequatur fuga aliquam similique, illo eaque soluta voluptatem labore distinctio ullam exercitationem, fugit beatae commodi ratione ducimus minima maiores?
                </Typography>
            </AccordionDetails>

        </Accordion>
    </Box>
  )
}
