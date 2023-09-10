import Link from "next/link";
import Head from "next/head";


const NotFoundPage = () => {
    return (
        <div>
            <Head>
                <title>Página não encontrada</title>
            </Head>
            <div>
                <h1>Erro 404</h1>
                <p>A página que procurou não existe...</p>
                <Link href="/">Voltar à página inicial</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;