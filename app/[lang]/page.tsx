import { SupportedLanguages } from "../dictionaries/all";
import Link from "next/link";
import { Header } from "./sections/Header";
import { Footer } from "./sections/Footer";
import { Projects } from "./sections/Projects";
import { Organizers } from "./sections/Organizers";

type HomePropsType = {
  params: { lang: SupportedLanguages };
};

const Home = ({ params: { lang } }: HomePropsType) => (
  <div>
    {/* <div className="lang inverted uppercase">
      <Link href={lang === "cz" ? "./en" : "./cz"}>
        {lang === "cz" ? "Switch to English" : "Přepnout do češtiny"}
      </Link>
    </div> */}
    <Header />
    <Projects />
    <Organizers />
    <Footer />
  </div>
);

export default Home;
