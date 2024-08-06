import React, { useState, useEffect } from 'react';
import { Typography, TextField } from '@mui/material';
import { Container } from './styles';

interface NicknameSettingProps {
  onSelect: (data: { nickname: string }) => void;
  selectedNickname: string;
}

const NicknameSetting: React.FC<NicknameSettingProps> = ({
  onSelect,
  selectedNickname,
}) => {
  const [nickname, setNickname] = useState(selectedNickname);

  useEffect(() => {
    onSelect({ nickname });
  }, [nickname]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h6">닉네임을 만들어볼까요?</Typography>
      <Typography variant="body2">
        프로필에 표시되는 이름으로, 언제든 변경할 수 있어요.
      </Typography>
      <TextField
        label="닉네임을 입력해주세요"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nickname}
        onChange={handleChange}
      />
    </Container>
  );
};

export default NicknameSetting;
