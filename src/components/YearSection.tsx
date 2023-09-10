import SectionButton from "@/components/SectionButton";
import React from "react";
import Year from "@/interfaces/year";
import {Typography} from "@mui/material";

type YearSectionProps = {
    year: Year;
    index: number;
}
export default function YearSection( { year, index }: YearSectionProps) {
    const { name, semesters } = year;
    return (
        <div className="year-section" key={index}>
            <Typography
                variant="h4"
                color="textPrimary"
                gutterBottom
            >
                {name}
            </Typography>
            <div>
                {semesters.map(({ name, courses }, index) => (
                    <div className="semester-section" key={index}>
                        <h3>{name}</h3>
                        <div className='section-button-layout'>
                            {courses.map(({ name,ects, link, image, color, long }) => (
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
            </div>
        </div>
    );
}