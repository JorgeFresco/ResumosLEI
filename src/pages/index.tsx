import {getAllYears} from "@/lib/api";
import Year from "../interfaces/year";
import React from "react";
import Head from "next/head";
import YearSection from "@/components/YearSection";
import {
    Container, Stack,
    Typography, Box, Link, Paper
} from "@mui/material";

export const getStaticProps = async () => {
    const allYears = getAllYears([
        "id",
        'name',
        'semesters'
    ])
    return {
        props: {allYears},
    }
}

type Props = {
    allYears: Year[]
}
export default function Home({allYears}: Props) {

    const listYears = allYears.map((year, index) =>
        <YearSection year={year} index={index} key={index}/>
    );

    return (
        <>
            <Head>
                <title>Resumos LEI</title>
                <meta name="viewport" content="width=device-width, initial-scale=0.80"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Container maxWidth="sm" sx={(theme) => ({
                padding: theme.spacing(8, 4, 8),
            })}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom sx={{fontWeight: "bold"}}>
                    Resumos LEI
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Bem-vindo ao site comunitário de resumos de LEI.
                </Typography>
            </Container>

            {/* Years, Semesters and Courses section */}
            <Container maxWidth="xl">
                <Stack spacing={5} mb={10}>
                    {listYears}
                </Stack>
            </Container>
        </>
    )
}
