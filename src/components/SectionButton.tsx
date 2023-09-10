import React from 'react';
import Course from "@/interfaces/course";
import Link from "next/link";
import Image from "next/image";
export default function SectionButton({ name, ects, link, image, color, long } : Course) {

    return (
        <Link
            href={link}
            className={`section-button ${long ? 'section-button__long' : ''}`}
            style={{ backgroundColor: color }}
        >
            <div className='section-button__text'>
                <span>{name}</span>
                <span>{ects} ects</span>
            </div>
            <Image src={image} alt={name} width={100} height={100} className={"img"}/>
        </Link>
    );
};
