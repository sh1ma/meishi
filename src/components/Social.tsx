import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SocialIconWrapper = styled.div`
  position: relative;
  height: 52px;
  width: 52px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-right: 20px;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  font-size: 48px;
  vertical-align: middle;
`;

const SocialId = styled.div`
  font-size: 32px;
  font-weight: normal;
  display: inline-block;
  vertical-align: middle;
`;

type Props = {
  icon: IconDefinition;
  id: string;
  className?: string;
};

const SocialBase: React.FC<Props> = ({ icon, id, className }) => {
  return (
    <div className={className}>
      <SocialIconWrapper>
        <SocialIcon icon={icon} />
      </SocialIconWrapper>
      <SocialId>{id}</SocialId>
    </div>
  );
};

const Social = styled(SocialBase)`
  display: flex;
  align-items: center;
`;

export default Social;
