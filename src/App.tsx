import { useState } from "react";
import styled from "styled-components";
import Meishi, { Border } from "./components/Meishi";
import ProfileSection from "./components/ProfileSection";
import SocialSection from "./components/SocialSection";
import UraOmoteButton from "./components/UraOmoteButton";

import { ReactComponent as QrcodeSvg } from "./qrcode.svg";

const Qrcode = styled(QrcodeSvg)`
  height: 40%;
  width: 40%;
  fill: #f4f2ff;
`;

const MeishiOutline = styled.div`
  height: 766px;
  width: 1263px;
  background-color: #2f3136;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  className?: string;
};

const AppBase: React.FC<Props> = ({ className }) => {
  const [isBack, setIsBack] = useState(false);

  if (isBack) {
    return (
      <div className={className}>
        <UraOmoteButton isBack={isBack} setIsBack={setIsBack} />
        <MeishiOutline>
          <Meishi>
            <Qrcode />
          </Meishi>
        </MeishiOutline>
        {/* <Meishi /> */}
      </div>
    );
  }

  return (
    <div className={className}>
      <UraOmoteButton isBack={isBack} setIsBack={setIsBack} />
      <MeishiOutline>
        <Meishi>
          <ProfileSection />
          <Border />
          <SocialSection />
        </Meishi>
      </MeishiOutline>
      {/* <Meishi /> */}
    </div>
  );
};

const App = styled(AppBase)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10mm;
  flex-direction: column;
`;

export default App;
