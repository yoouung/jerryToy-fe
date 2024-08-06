import React, { useState, useEffect } from 'react';
import { Typography, TextField, Box } from '@mui/material';
import { Container } from './styles';

interface AgeSelectionProps {
  onSelect: (data: { birthdate: string }) => void;
  selectedBirthdate: string;
}

const AgeSelection: React.FC<AgeSelectionProps> = ({
  onSelect,
  selectedBirthdate,
}) => {
  const [birthdate, setBirthdate] = useState(selectedBirthdate);

  useEffect(() => {
    onSelect({ birthdate });
  }, [birthdate, onSelect]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h6">생년월일을 입력해주세요</Typography>
      <Box mt={2}>
        <TextField
          label="생년월일"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={birthdate}
          onChange={handleChange}
        />
      </Box>
    </Container>
  );
};

export default AgeSelection;
