import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data } from './AccourdianApi'
// import { useState } from 'react';

export default function SimpleAccordion() {
    // const [expand,setExpand] = useState<string | fasle>(false)
    // const handleChange=(isExpand:boolean, penal:string)=>{
    //     setExpand(isExpand ? penal : false)
    // }
    return (
        <div style={{
            marginTop:"100px"
        }}>
            <Typography variant='h3'
            sx={{
                color:"white",
                textAlign:"center",
                pb:"10px"
            }}>
                COMMON CUSTOMER QUESTION
            </Typography>
            {
                data.map((item, index) => {
                    const { id, title, content } = item;
                    return (
                        <Box
                            sx={{
                                width: "60%",
                                margin: "auto",
                            }}>
                            <Accordion
                                // expand={expand === id}
                                // onChange={(event,isExpand)=>handleChange(isExpand,id)}
                                sx={{

                                    background: "rgba(44,29,22,255)",
                                    color: "white",
                                    marginBottom: "10px",
                                    border:"2px solid rgba(75,59,48,255)"
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon
                                        sx={{
                                            // background: "#b06654",
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
