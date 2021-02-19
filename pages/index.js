import Navbar from "../components/navbar";
import Hero from "./../components/hero";
import Layout from "./../components/layout";
import AboutMe from "./../components/aboutme";
import Projects from "../components/projects";
import Contact from "../components/contact";

const Home = () => {
  return (
    <Layout title="Strona główna">
      <Hero />
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
