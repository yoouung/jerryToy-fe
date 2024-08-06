import { SubmitBtnStyle } from './styles';

type Props = {
  type: `login` | `signup` | `next`;
  isActive: boolean;
  onClick: () => void;
};

export const SubmitBtn = ({ type, isActive, onClick }: Props) => {
  const handleClick = () => {
    if (isActive) {
      onClick();
    }
  };

  const text = {
    login: `로그인`,
    signup: `회원가입`,
    next: `다음`,
  }[type];

  return (
    <SubmitBtnStyle location={type} onClick={handleClick} isActive={isActive}>
      {text}
    </SubmitBtnStyle>
  );
};
