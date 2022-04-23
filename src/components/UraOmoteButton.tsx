import styled from "styled-components";

const Button = styled.button`
  outline: solid;
  outline-width: 2px;
  outline-color: #36393f;
  background-color: white;
  padding: 5px 5px;
`;

type Props = {
  isBack: boolean;
  setIsBack: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

const UraOmoteButtonBase: React.FC<Props> = ({
  isBack,
  setIsBack,
  className,
}) => {
  const buttonLabel = isBack ? "表面をみる" : "裏面をみる";

  return (
    <div className={className}>
      <Button onClick={() => setIsBack(!isBack)}>{buttonLabel}</Button>
    </div>
  );
};

const UraOmoteButton = styled(UraOmoteButtonBase)`
  width: 1254px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default UraOmoteButton;
