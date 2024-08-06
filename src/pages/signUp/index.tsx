import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountSetup from '../../components/signUp/accountSetup';
import NicknameSetting from '../../components/signUp/nicknameSetting';
import GenderSelection from '../../components/signUp/genderSelection';
import AgeSelection from '../../components/signUp/ageSelection';
import MBTISelection from '../../components/signUp/mbtiSelection';
import {
  Container,
  NextButton,
  PrevButton,
  ButtonContainer,
  StepperContainer,
} from './styles';
import { Stepper, Step, StepLabel } from '@mui/material';

const steps = [
  '아이디와 비밀번호',
  '닉네임 설정',
  '성별 선택',
  '생년월일 입력',
  'MBTI 선택',
];

const SignUp: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    gender: '',
    birthdate: '',
    mbti: [] as string[],
  });
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === steps.length - 1) {
      navigate('/sign-done');
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSelect = (data: Partial<typeof formData>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <AccountSetup
            onSelect={handleSelect}
            selectedUsername={formData.username}
            selectedPassword={formData.password}
            selectedConfirmPassword={formData.confirmPassword}
          />
        );
      case 1:
        return (
          <NicknameSetting
            onSelect={handleSelect}
            selectedNickname={formData.nickname}
          />
        );
      case 2:
        return (
          <GenderSelection
            onSelect={handleSelect}
            selectedGender={formData.gender}
          />
        );
      case 3:
        return (
          <AgeSelection
            onSelect={handleSelect}
            selectedBirthdate={formData.birthdate}
          />
        );
      case 4:
        return (
          <MBTISelection onSelect={handleSelect} selectedMBTI={formData.mbti} />
        );
      default:
        return <div>완료</div>;
    }
  };

  const isNextButtonDisabled = () => {
    if (step === 0) {
      return (
        formData.username === '' ||
        formData.password === '' ||
        formData.password !== formData.confirmPassword
      );
    } else if (step === 1) {
      return formData.nickname === '';
    } else if (step === 2) {
      return formData.gender === '';
    } else if (step === 3) {
      return formData.birthdate === '';
    } else if (step === 4) {
      return formData.mbti.length < 4;
    }
    return false;
  };

  return (
    <Container>
      <StepperContainer>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </StepperContainer>
      {renderStep()}
      <ButtonContainer>
        <PrevButton
          variant="outlined"
          onClick={handleBack}
          disabled={step === 0}
        >
          이전
        </PrevButton>
        <NextButton
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={isNextButtonDisabled()}
        >
          {step === steps.length - 1 ? '완료' : '다음'}
        </NextButton>
      </ButtonContainer>
    </Container>
  );
};

export default SignUp;
