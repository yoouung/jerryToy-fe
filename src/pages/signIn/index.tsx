import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountSetup from '../../components/signIn/accountSetup';
import NicknameSetting from '../../components/signIn/nicknameSetting';
import GenderSelection from '../../components/signIn/genderSelection';
import AgeSelection from '../../components/signIn/ageSelection';
import MBTISelection from '../../components/signIn/mbtiSelection';
import { Container, NextButton, PrevButton, ButtonContainer } from './styles';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

const steps = [
  '아이디와 비밀번호',
  '닉네임 설정',
  '성별 선택',
  '생년월일 입력',
  'MBTI 선택',
];

const SignIn: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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

  return (
    <Container>
      <Stepper activeStep={step} alternativeLabel sx={{ paddingBottom: 3 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
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
          disabled={
            (step === 0 &&
              (formData.username === '' || formData.password === '')) ||
            (step === 1 && formData.nickname === '') ||
            (step === 2 && formData.gender === '') ||
            (step === 3 && formData.birthdate === '') ||
            (step === 4 && formData.mbti.length < 4)
          }
        >
          {step === steps.length - 1 ? '완료' : '다음'}
        </NextButton>
      </ButtonContainer>
    </Container>
  );
};

export default SignIn;
