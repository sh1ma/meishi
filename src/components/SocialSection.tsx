import styled from "styled-components";
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Social from "./Social";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Props = {
  className?: string;
};

const SocialSectionBase: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <Social icon={faTwitter} id="@sh1ma" />
      <Social icon={faDiscord} id="talka#9999" />
      <Social icon={faGithub} id="https://github.com/sh1ma" />
      <Social icon={faEnvelope} id="in9lude@gmail.com" />
    </section>
  );
};

const SocialSection = styled(SocialSectionBase)`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 60%;
  flex-direction: column;
  padding-left: 50px;
  gap: 50px;
`;

export default SocialSection;
