import Head from "next/head";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <>
            <Head>
                <title>Página não encontrada</title>
                <meta name="viewport" content="width=device-width, initial-scale=0.80" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80vh",
                    textAlign: "center",
                }}
            >
                <Stack spacing={3} maxWidth="sm">
                    <Typography variant="h2" fontWeight="bold">
                        Erro 404
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        A página que procura não existe...
                    </Typography>

                    <Box mt={2}>
                        <Link href="/" passHref>
                            <Button variant="contained" color="secondary">
                                Voltar à Página Inicial
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Container>
        </>
    );
};

export default NotFoundPage;
