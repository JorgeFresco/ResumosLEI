import Head from "next/head";
import {Container, Link, Stack, Typography} from "@mui/material";
import React from "react";


const NotFoundPage = () => {
    return (
        <div>
            <Head>
                <title>Página não encontrada</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=0.80"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Stack spacing={5} mb={10}>
                    <Container
                        maxWidth="sm"
                        sx={(theme) => ({
                            padding: theme.spacing(8, 4, 8),
                        })}
                    >
                        <Typography variant="h3" align="center">
                            Erro 404
                        </Typography>
                        <Typography variant="body1" align="center">
                            A página que procura não existe...
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            align="center"
                        >
                            <Link color="text.link" href="/">
                                Voltar à página inicial
                            </Link>
                        </Typography>
                    </Container>
                </Stack>
            </Container>
        </div>
    );
};

export default NotFoundPage;