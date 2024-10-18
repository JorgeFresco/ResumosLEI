import { GetStaticProps } from 'next';
import { getAllYears } from '@/lib/api';
import Year from '@/interfaces/year';
import React from 'react';
import Head from 'next/head';
import YearSection from '@/components/YearSection';
import { Container, Stack, Typography } from '@mui/material';

type Props = {
    allYears: Year[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const allYears = getAllYears();
    return {
        props: { allYears },
    };
}

const Home: React.FC<Props> = ({ allYears }) => {
    return (
        <>
            <Head>
                <title>Resumos LEI</title>
                <meta name="viewport" content="width=device-width, initial-scale=0.80" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="sm" sx={(theme) => ({
                padding: theme.spacing(8, 4, 8),
            })}>
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom sx={{ fontWeight: "bold" }}>
                    Resumos LEI
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary">
                    Bem-vindo ao site comunitário de resumos de LEI.
                </Typography>
            </Container>

            {/* Years, Semesters and Courses section */}
            <Container maxWidth="xl">
                <Stack spacing={5} mb={10}>
                    {allYears.map((year, index) => (
                        <YearSection year={year} key={index} index={index} />
                    ))}
                </Stack>
            </Container>
        </>
    );
}

export default Home;
