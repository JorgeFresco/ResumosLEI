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
                padding: theme.spacing(8, 0, 8),
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
                <Stack spacing={10}>
                    {listYears}
                </Stack>
            </Container>

            {/* Disclaimer Section */}
            <Container maxWidth="lg">
                <Paper elevation={1} sx={{ padding: 3, mt: 6,mb: 6, color: "text.warning", bgcolor: "background.warning"}}>
                    <Typography variant="h6" align="center" gutterBottom>
                        DISCLAIMER
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" paragraph>
                        Este site não está afiliado à <Link color="text.link" href="https://www.fct.unl.pt/" target="_blank">NOVA FCT</Link> de forma alguma.
                        Todo o conteúdo disponível neste site foi criado por alunos para alunos, com o objetivo de permitir um acesso mais
                        fácil e rápido à informação de cada cadeira e, ao mesmo tempo, acesso a material de estudo criado por outros alunos.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" paragraph>
                        Inspirei-me no site de resumos de <Link color="text.link" href="https://resumos.leic.pt/" target="_blank">LEIC-A</Link> do técnico, criado por <Link color="text.link" href="https://diogotc.com/" target="_blank"> Diogo Correira</Link>.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" paragraph>
                        Algum do conteúdo neste site pode estar incorreto, incompleto e/ou desatualizado, por isso tenham sempre atenção e confirmem antes de assumirem que está tudo correto.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" paragraph>
                        Em caso de qualquer dúvida ou erro que encontrem, podem enviar email para <Link color="text.link" href="mailto:resumoslei@gmail.com">resumoslei@gmail.com</Link>. Se quiserem corrigir um erro diretamente, podem fazê-lo seguindo os passos em <Link color="text.link" href="#">contribuir</Link>.
                    </Typography>
                </Paper>
            </Container>


                    {/* Footer Section */}
            <Box sx={{ bgcolor: 'background.paper', p: 3, borderTop: '1px solid #4e4e4e' }}>
                <Typography variant="body2" color="textSecondary" align="center">
                    Site criado por <Link color="text.link" href="https://github.com/JorgeFresco" target="_blank">Jorge Fresco</Link> ️
                </Typography>
            </Box>
        </>
    )
}
