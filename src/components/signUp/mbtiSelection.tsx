import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { Container, SelectionButton } from './styles';

interface MBTISelectionProps {
  onSelect: (data: { mbti: string[] }) => void;
  selectedMBTI: string[];
}

const mbtiOptions = [
  { type: 'E', description: '외향형' },
  { type: 'I', description: '내향형' },
  { type: 'S', description: '감각형' },
  { type: 'N', description: '직관형' },
  { type: 'T', description: '사고형' },
  { type: 'F', description: '감정형' },
  { type: 'J', description: '판단형' },
  { type: 'P', description: '인식형' },
];

const MBTISelection: React.FC<MBTISelectionProps> = ({
  onSelect,
  selectedMBTI,
}) => {
  const [mbti, setMbti] = useState<string[]>(selectedMBTI);

  useEffect(() => {
    onSelect({ mbti });
  }, [mbti]);

  const handleSelect = (type: string) => {
    const newMbti = mbti.includes(type)
      ? mbti.filter((item) => item !== type)
      : [...mbti, type];
    setMbti(newMbti);
  };

  return (
    <Container>
      <Typography variant="h6">회원님의 MBTI를 알려주세요.</Typography>
      <Box mt={2}>
        <Grid container spacing={2}>
          {mbtiOptions.map((option) => (
            <Grid item xs={6} key={option.type}>
              <Typography variant="body2">{option.description}</Typography>
              <SelectionButton
                variant={mbti.includes(option.type) ? 'contained' : 'outlined'}
                onClick={() => handleSelect(option.type)}
              >
                {option.type}
              </SelectionButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MBTISelection;
