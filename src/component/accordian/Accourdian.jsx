import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data } from './AccourdianApi'

export default function SimpleAccordion() {
    return (
        <div 
        id='faq'
        style={{
            marginTop: "100px"
        }}>
            <Typography variant='h4'
                sx={{
                    color: "white",
                    textAlign: "center",
                    pb: "10px",
                    minWidth:"350px"
                }}>
                COMMON CUSTOMER QUESTION
            </Typography>
            {
                data.map((item, index) => {
                    const { id, title, content } = item;
                    return (
                        <Box
                            sx={{
                                maxWidth: "60%",
                                minWidth:"350px",
                                margin: "auto",
                            }}>
                            <Accordion
                                sx={{

                                    background: "rgba(44,29,22,255)",
                                    color: "white",
                                    marginBottom: "10px",
                                    border: "2px solid rgba(75,59,48,255)"
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon
                                        sx={{
                                            color: "white",
                                            width: "50px",
                                            height: "48px",
                                            paddingRight: "0px"
                                        }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {content}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    )
                })
            }
        </div>
    );
}
