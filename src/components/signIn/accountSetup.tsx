import React, { useState, useEffect } from 'react';
import { Typography, TextField, Box } from '@mui/material';
import { Container } from './styles';

interface AccountSetupProps {
  onSelect: (data: { username: string; password: string }) => void;
  selectedUsername: string;
  selectedPassword: string;
}

const AccountSetup: React.FC<AccountSetupProps> = ({
  onSelect,
  selectedUsername,
  selectedPassword,
}) => {
  const [username, setUsername] = useState(selectedUsername);
  const [password, setPassword] = useState(selectedPassword);

  useEffect(() => {
    onSelect({ username, password });
  }, [username, password, onSelect]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h6">
        처음 오셨군요, 반가워요! 아이디와 비밀번호를 설정해주세요
      </Typography>
      <Box mt={2}>
        <TextField
          label="아이디"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="비밀번호"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
        />
      </Box>
    </Container>
  );
};

export default AccountSetup;
