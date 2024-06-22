import SectionButton from "@/components/SectionButton";
import React from "react";
import Year from "@/interfaces/year";
import {Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type YearSectionProps = {
    year: Year;
    index: number;
}
export default function YearSection( { year, index }: YearSectionProps) {
    const { name, semesters } = year;
    return (

        <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography
                        variant="h4"
                        color="textPrimary"
                    >
                        {name}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display: "flex", flexWrap: "wrap", paddingBottom: "3rem"}} key={index}>
                        {semesters.map(({name, courses}, index) => (
                            <div className="semester-section" key={index}>
                                <h3>{name}</h3>
                                <div className='section-button-layout'>
                                    {courses.map(({name, ects, link, image, color, long}) => (
                                        <SectionButton
                                            key={link}
                                            name={name}
                                            ects={ects}
                                            link={link}
                                            image={image}
                                            color={color}
                                            long={long}
                                        />
                                    ))}
                                </div>
                            </div>))}
                </AccordionDetails>
        </Accordion>
    )
        ;
}