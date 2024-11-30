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
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color="textPrimary">
                    {name}
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{ display: "flex", flexWrap: "wrap", paddingBottom: "3rem" }}
                key={index}
            >
                {semesters.map(({ name, courses }, index) => (
                    <div className="semester-section" key={index}>
                        <Typography variant="h6" gutterBottom>
                            {name}
                        </Typography>
                        <div className="section-button-layout">
                            {courses.map(({acronym, ects, link, image, color, long,}) => (
                                    <SectionButton
                                        key={link}
                                        acronym={acronym}
                                        ects={ects}
                                        link={link}
                                        image={image}
                                        color={color}
                                        long={long}
                                    />
                            ))}
                        </div>
                    </div>
                ))}
            </AccordionDetails>
        </Accordion>
    );
}