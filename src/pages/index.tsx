import {getAllYears} from "@/lib/api";
import Year from "../interfaces/year";
import React from "react";
import Head from "next/head";
import YearSection from "@/components/YearSection";
import HomePageLayout from "@/components/HomePageLayout";
import {
    Container, Stack,
    Typography,
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
            <title>Página principal</title>
            <meta name="viewport" content="width=device-width, initial-scale=0.80"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
            <HomePageLayout>
                <Container maxWidth="sm" sx={(theme) => ({
                    padding: theme.spacing(8, 0, 8),
                })}>
                    <Typography
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                        sx={{fontWeight: "bold"}}
                    >
                        Resumos MIEI
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        Bem-vindo ao site comunitário de resumos de MIEI.
                        Página inspirada na página de resumos de LEIC-A do técnico.
                    </Typography>
                </Container>
                <Container maxWidth="xl" sx={(theme) => ( { })}>
                    <Stack spacing={10}>
                        {listYears}
                    </Stack>
                </Container>
        </HomePageLayout>
        </main>
</>
)
}
