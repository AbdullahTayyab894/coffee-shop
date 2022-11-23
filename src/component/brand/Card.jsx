import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid } from '@mui/material';
import { CardActionArea } from '@mui/material';
import lavazza from '../../img/lavazza.png'
import starbucks from '../../img/starbucks.webp'
import nescafe from '../../img/nescafe.png'

const data = [
    {
        name: "Starbucks",
        detail: "Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington. It is the world's largest coffeehouse chain. As of November 2021, the company ",
        img: starbucks
    },
    {
        name: "Lavazza",
        detail: "Luigi Lavazza S.p.A., shortened and stylized as LAVAZZA, is an Italian manufacturer of coffee products. Founded in Turin in 1895 by Luigi Lavazza, it was initially run from a small grocery store at Via San Tommaso .",
        img: lavazza
    },
    {
        name: "Nescafe",
        detail: "Nescafé is a brand of coffee made by Nestlé. It comes in many different forms. The name is a portmanteau of the words Nestlé and café. Nestlé first introduced their flagship coffee brand in Switzerland on 1 April 1938",
        img: nescafe
    }
]

export default function ActionAreaCard() {
    return (
        <div id='blog' style={{
            marginTop:"50px"
        }}>
            <Typography variant="h3" sx={{
                color:"white",
                textAlign:"center"
            }}>Blog</Typography>
            <Grid container
                sx={{
                    mt: "30px",
                }}>
                {
                    data.map((item) => {
                        const { img, detail, name } = item;
                        return (
                            <Grid item xs={12} sm={6} md={4}>

                                <Card sx={{
                                    maxWidth: 345,
                                    display: "flex",
                                    border: "2px solid rgba(75,59,48,255)",
                                    borderRadius: "20px",
                                    margin: "auto"
                                }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={img}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary"
                                                sx={{
                                                    textAlign: "justify"
                                                }}>
                                                {detail}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}
