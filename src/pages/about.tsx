import Head from "next/head";
import React from "react";
import {Container, Link, Paper, Typography} from "@mui/material";

export default function About() {
    return (
        <>
            <Head>
                <title>Resumos LEI - Sobre</title>
                <meta name="viewport" content="width=device-width, initial-scale=0.80"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container maxWidth="xl" sx={(theme) => ({
                padding: theme.spacing(8, 0, 8),
            })}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom sx={{fontWeight: "bold"}}>Sobre</Typography>
                <Typography variant="body1" color="textSecondary" align="center" >Todo o conteúdo disponível neste site foi criado por <u>alunos para alunos</u>.</Typography>
                <Typography variant="body1" color="textSecondary" align="center" >O objetivo é permitir um acesso mais fácil e rápido à informação de cada cadeira e, ao mesmo tempo, permitir a alunos partilharem o seu material de estudo (resumos, notas, cheat sheets, etc).</Typography>
                <Typography variant="body1" color="textSecondary" align="center" ></Typography>
            </Container>
            <Container maxWidth="lg">
                <Paper elevation={1} sx={{ padding: 3, mt: 6,mb: 6, color: "text.warning", bgcolor: "background.warning"}}>
                    <Typography variant="h6" align="center" gutterBottom>
                        DISCLAIMER
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="center" >
                        Este site não está afiliado à <Link color="text.link" href="https://www.fct.unl.pt/" target="_blank">NOVA FCT</Link> de forma alguma
                        e foi inspirado no site de resumos de <Link color="text.link" href="https://resumos.leic.pt/" target="_blank">LEIC-A</Link> do técnico,
                        criado por <Link color="text.link" href="https://diogotc.com/" target="_blank"> Diogo Correira</Link>.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="center" >
                        Algum do conteúdo neste site pode estar incorreto, incompleto e/ou desatualizado, por isso tenham sempre atenção e confirmem a informação antes de assumirem que está tudo correto.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="center" >
                        Em caso de qualquer dúvida ou erro que encontrem, podem enviar email para <Link color="text.link" href="mailto:resumoslei@gmail.com">resumoslei@gmail.com</Link>.
                    </Typography>
                </Paper>
            </Container>

        </>
    );
}