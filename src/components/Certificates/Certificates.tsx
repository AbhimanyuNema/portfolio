import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// Import certificate icons (Add your certificate images)
import awsCert from "../../assets/awscert.svg";
import paloalto from "../../assets/paloalto.svg";
import oracle from "../../assets/oracle.svg";
import androidCert from "../../assets/androidcert.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Certificates() {
  return (
    <Container id="certificates">
      <h2>My Certificates and Badges</h2>

      {/* Certificates container with flexbox */}
      <div className="certificates-container">
        {[
          { img: awsCert, link: "https://www.linkedin.com/posts/abhimanyu-nema-048477248_aws-cloudcomputing-awsmentorship-activity-7300217414737141760-lIke?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1LFngBvhwrtPhLWS905lAgRILNtFjpME0" },
          { img: paloalto, link: "https://www.linkedin.com/posts/abhimanyu-nema-048477248_cloudsecurity-cybersecurity-paloaltonetworks-activity-7300218131048759297-vli_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1LFngBvhwrtPhLWS905lAgRILNtFjpME0" },
          { img: oracle, link: "https://www.linkedin.com/posts/abhimanyu-nema-048477248_oracle-cloud-infrastructure-2024-certified-activity-7242891731912798209-RqFD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1LFngBvhwrtPhLWS905lAgRILNtFjpME0" },
          { img: androidCert, link: "https://www.linkedin.com/posts/abhimanyu-nema-048477248_first-learning-pathway-and-quiz-badge-google-activity-7299640724528992256-wJyD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1LFngBvhwrtPhLWS905lAgRILNtFjpME0" }
        ].map((cert, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div className="certificate">
              <a href={cert.link} target="_blank" rel="noreferrer">
                <img src={cert.img} alt="Certificate" />
              </a>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
