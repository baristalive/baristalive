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
    <Header />
    <Projects />
    <Organizers />
    <Footer />
  </div>
);

export default Home;
