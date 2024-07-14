import React from 'react';
import Link from "next/link";
import Image from "next/image";

type SectionButtonProps = {
    acronym: string,
    ects: number,
    link: string,
    image: string,
    color: string,
    long: boolean | undefined
}

export default function SectionButton({ acronym, ects, link, image, color, long } : SectionButtonProps) {
    return (
        <Link href={`/course/${link}`} className={`section-button ${long ? 'section-button__long' : ''}`} style={{ backgroundColor: color }} passHref>
            <div className='section-button__text'>
                <span>{acronym}</span>
                <span>{ects} ects</span>
            </div>
            <Image src={image} alt={acronym} width={100} height={100} className={"img"}/>
        </Link>
    );
};
