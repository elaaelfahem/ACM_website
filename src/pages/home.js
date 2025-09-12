import Intro from '../components/intro/intro';
import Description from '../components/description/description';
import Aboutus from '../components/AboutUs/aboutus';
import Feedback from '../components/feedback/feedback';
import Contact from '../components/contact/contact';
const Home = () => {
  return (
    <>
      <Intro />
      <Description />
      <Aboutus />
      <Feedback />
      <Contact />
    </>
  );
};

export default Home;