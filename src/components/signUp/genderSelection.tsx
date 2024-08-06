import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Container, SelectionButton } from './styles';

interface GenderSelectionProps {
  onSelect: (data: { gender: string }) => void;
  selectedGender: string;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({
  onSelect,
  selectedGender,
}) => {
  const [gender, setGender] = useState<string>(selectedGender);

  useEffect(() => {
    onSelect({ gender });
  }, [gender]);

  const handleSelect = (value: string) => {
    setGender(value);
  };

  return (
    <Container>
      <Typography variant="h6">회원님의 성별을 선택해주세요</Typography>
      <Box>
        <SelectionButton
          variant={gender === '남성' ? 'contained' : 'outlined'}
          onClick={() => handleSelect('남성')}
        >
          남성
        </SelectionButton>
        <SelectionButton
          variant={gender === '여성' ? 'contained' : 'outlined'}
          onClick={() => handleSelect('여성')}
        >
          여성
        </SelectionButton>
      </Box>
    </Container>
  );
};

export default GenderSelection;
