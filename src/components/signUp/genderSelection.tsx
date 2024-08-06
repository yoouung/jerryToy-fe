import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
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
  }, [gender, onSelect]);

  const handleSelect = (gender: string) => {
    setGender(gender);
  };

  return (
    <Container>
      <Typography variant="h6">회원님의 성별은 무엇인가요?</Typography>
      <Box mt={2}>
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
