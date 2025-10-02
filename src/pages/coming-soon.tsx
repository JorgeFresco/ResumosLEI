import Head from "next/head";
import { Container, Typography, Box, Button } from "@mui/material";
import Link from "next/link";

export default function ComingSoon() {
    return (
        <>
            <Head>
                <title>Disponível em breve</title>
                <meta name="viewport" content="width=device-width, initial-scale=0.80" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container
                maxWidth="md"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80vh",
                    textAlign: "center",
                }}
            >
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                    🚧 Disponível em breve 🚧
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                    Esta página ainda está em desenvolvimento, mas ficará disponível em breve.
                </Typography>

                <Box mt={4}>
                    <Link href="/" passHref>
                        <Button variant="contained" color='secondary'>
                            Voltar à Página Inicial
                        </Button>
                    </Link>
                </Box>
            </Container>
        </>
    );
}
