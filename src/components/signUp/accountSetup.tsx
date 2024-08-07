import React, { useState, useEffect } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { Container, CustomTextField } from './styles';

interface AccountSetupProps {
  onSelect: (data: {
    username: string;
    password: string;
    confirmPassword: string;
  }) => void;
  selectedUsername: string;
  selectedPassword: string;
  selectedConfirmPassword: string;
}

const AccountSetup: React.FC<AccountSetupProps> = ({
  onSelect,
  selectedUsername,
  selectedPassword,
  selectedConfirmPassword,
}) => {
  const [username, setUsername] = useState<string>(selectedUsername);
  const [password, setPassword] = useState<string>(selectedPassword);
  const [confirmPassword, setConfirmPassword] = useState<string>(
    selectedConfirmPassword
  );
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);

  useEffect(() => {
    onSelect({ username, password, confirmPassword });
    setPasswordMatch(password === confirmPassword);
  }, [username, password, confirmPassword, onSelect]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h6">이메일과 비밀번호를 입력해주세요</Typography>
      <Box component="form" noValidate autoComplete="off">
        <CustomTextField
          label="이메일"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
          margin="normal"
        />
        <CustomTextField
          label="비밀번호"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
        />
        <CustomTextField
          label="비밀번호 확인"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          fullWidth
          margin="normal"
          error={!passwordMatch}
          helperText={!passwordMatch && '비밀번호가 일치하지 않습니다.'}
        />
      </Box>
    </Container>
  );
};

export default AccountSetup;
