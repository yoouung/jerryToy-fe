import React, { useState, useEffect } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { Container } from './styles';

interface AgeSelectionProps {
  onSelect: (data: { age: number }) => void;
  selectedAge: number;
}

const AgeSelection: React.FC<AgeSelectionProps> = ({
  onSelect,
  selectedAge,
}) => {
  const [age, setAge] = useState<number>(selectedAge);

  useEffect(() => {
    onSelect({ age });
  }, [age, onSelect]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= 100) {
      setAge(value);
    }
  };

  return (
    <Container>
      <Typography variant="h6">나이를 입력해주세요</Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="나이"
          type="number"
          value={age}
          onChange={handleChange}
          fullWidth
          margin="normal"
          inputProps={{ min: 1, max: 100 }}
        />
      </Box>
    </Container>
  );
};

export default AgeSelection;
