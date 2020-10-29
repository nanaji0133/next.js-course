
import "bootstrap/dist/css/bootstrap.css";
import Nav from "../src/components/Nav";
import '../styles/globals.css';



function MyApp ({ Component, pageProps })
{
  return (
    <div>
      <Nav />
      <Component { ...pageProps } />
    </div>
  );
}

export default MyApp;
