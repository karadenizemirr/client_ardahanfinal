import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Ardahan Final Özel Öğretim Kursu" />
                <meta name="keywords" content="ardahan, final, final dershanesi" />
                <meta name="author" content="Ardahan Final Özel Öğretim Kursu" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
            </Head>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout