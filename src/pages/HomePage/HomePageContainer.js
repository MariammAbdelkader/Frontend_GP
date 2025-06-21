import { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import HomePageStyles from "./HomePageStyles";

const CardContent = ({ title, text }) => (
  <Box sx={HomePageStyles.cardcontent}>
    <Box>
      <Typography variant="subtitle1" sx={HomePageStyles.cardcontentTitle}>
        {title}
      </Typography>
      <Typography variant="body2" sx={HomePageStyles.cardcontentText}>
        {text}
      </Typography>
    </Box>
  </Box>
);

const teamMembers = [
  {
    name: "Mohamed Fareed",
    role: "Frontend Developer",
    image: "/images/mohamed.jpg",
    info: "Specialized in React & UI design.",
    email: "Mohamedfareed20024@gmail.com",
  },
  {
    name: "Mariam Abdelkader",
    role: "DevOps Developer",
    image: "/images/mariam.jpg",
    info: "Specialized in DevOps Automation & Cloud Infrastructure (AWS)",
    email: "mariamabdelkader1211@gmail.com",
  },
  {
    name: "Ahmed Khamis",
    role: "Backend & Cloud Developer",
    image: "/images/khamis.png",
    info: "Expert in Node.js and API architecture.",
    email: "ahmeddkhamiess10@gmail.com",
  },
  {
    name: "Omar Aboelfetouh",
    role: "GenAI Engineer",
    image: "/images/omar.png",
    info: "Specialized in ai powered and python development software engineer",
    email: "oaboelfetouh@gmail.com",
  },
  {
    name: "Ahmed Eissa Mahfouz",
    role: "GenAI Engineer",
    image: "/images/eissa.png",
    info: "Specialized in ai powered and python development software enginee",
    email: "ahmeddabah123@gmail.com",
  },
  {
    name: "Youssuf Ahmed Ebrahim",
    role: "Full stack developer",
    image: "/images/yussef.jpg",
    info: "Focuses on ML models and automation.",
    email: "youssufahmed200215@gmail.com",
  },
  {
    name: "Mohamed Shawky",
    role: "Backend Developer",
    image: "/images/shawky.jpg",
    info: "Expert in Node.js and API architecture.",
    email: "shawkym056@gmail.com",
  },
];

const useHomePageContainer = () => {
  const [value, setValue] = useState(0);

  const homeRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const howItWorksRef = useRef(null);
  const whoWeAreRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    const sectionIds = ["home", "whatwedo", "howitworks", "whoweare"];
    scrollToSection(sectionIds[newValue]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const howItWorksTop = howItWorksRef.current?.getBoundingClientRect().top;
      const heroBottom = homeRef.current?.getBoundingClientRect().bottom;

      if (howItWorksTop && howItWorksTop < window.innerHeight * 0.6) {
        setValue(1);
      } else if (heroBottom && heroBottom > 0) {
        setValue(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    value,
    setValue,
    homeRef,
    whatWeDoRef,
    howItWorksRef,
    whoWeAreRef,
    handleTabChange,
    scrollToSection,
    teamMembers,
    CardContent,
  };
};

export default useHomePageContainer;
