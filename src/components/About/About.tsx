import { Container } from "./styles";
import ABHI from "../../assets/ABHI.webp";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import androidstudio from "../../assets/androidstudio.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

// Import certificate icons (Add your certificate images)
import awsCert from "../../assets/awscert.svg";
import paloalto from "../../assets/paloalto.svg";
import oracle from "../../assets/oracle.svg";
import androidCert from "../../assets/androidcert.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm 𝙰𝙱𝙷𝙸𝙼𝙰𝙽𝚈𝚄 𝙽𝙴𝙼𝙰, a website and software developer passionate about creating seamless digital experiences. With expertise in HTML, CSS, JavaScript, Java, C, C++, Python, and R programming, I have the skills to build dynamic and efficient solutions, from sleek websites to powerful applications.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Beyond web development, I specialize in cloud technologies like Docker, AWS, Azure, and GCP, ensuring scalable and secure deployments. I also develop Android mobile apps, combining intuitive design with robust functionality to enhance user experience.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Whether you need a custom website, an AI-powered application, or a mobile app, I'm here to turn your vision into reality. Let's collaborate to build something impactful and future-ready!
          </p>
        </ScrollAnimation>

        {/* Skills Section */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {[wordpress, androidstudio, reactIcon, typescriptIcon, nodeIcon, htmlIcon, cssIcon, boostrapIcon, jsIcon].map((icon, index) => (
            <div className="hability" key={index}>
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * index * 1000}>
                <img src={icon} alt="Skill Icon" />
              </ScrollAnimation>
            </div>
          ))}
        </div>
        
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={ABHI} alt="ABHI" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
