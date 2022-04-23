import styled from "styled-components";
import Icon from "./Icon";

const Name = styled.div`
  padding-top: 60px;
  font-size: 48px;
  font-weight: normal;
`;

const Job = styled.div`
  padding-top: 20px;
  font-size: 32px;
  font-weight: normal;
`;

type Props = {
  className?: string;
};

const ProfileSectionBase: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <Icon />
      <Name>sh1ma</Name>
      <Job>Menhera Software Engineer</Job>
    </section>
  );
};

const ProfileSection = styled(ProfileSectionBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 60%;
  /* padding: 0 2.5mm; */
`;

export default ProfileSection;
