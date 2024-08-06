import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Container, SelectionButton } from './styles';

interface MBTISelectionProps {
  onSelect: (data: { mbti: { [key: string]: string } }) => void;
  selectedMBTI: { [key: string]: string };
}

const MBTISelection: React.FC<MBTISelectionProps> = ({
  onSelect,
  selectedMBTI,
}) => {
  const [mbti, setMbti] = useState<{ [key: string]: string }>(selectedMBTI);

  useEffect(() => {
    onSelect({ mbti });
  }, [mbti]);

  const handleSelect = (type: string, value: string) => {
    const newMbti = { ...mbti, [type]: value };
    setMbti(newMbti);
  };

  return (
    <Container>
      <Typography variant="h6">회원님의 MBTI를 알려주세요.</Typography>
      <Box>
        <Typography variant="subtitle1">외향형/내향형</Typography>
        <SelectionButton
          variant={mbti['e'] === 'E' ? 'contained' : 'outlined'}
          onClick={() => handleSelect('e', 'E')}
        >
          E
        </SelectionButton>
        <SelectionButton
          variant={mbti['e'] === 'I' ? 'contained' : 'outlined'}
          onClick={() => handleSelect('e', 'I')}
        >
          I
        </SelectionButton>
      </Box>
      <Box>
        <Typography variant="subtitle1">감각형/직관형</Typography>
        <SelectionButton
          variant={mbti['s'] === 'S' ? 'contained' : 'outlined'}
          onClick={() => handleSelect('s', 'S')}
        >
          S
        </SelectionButton>
        <SelectionButton
          variant={mbti['s'] === 'N' ? 'contained' : 'outlined'}
          onClick={() => handleSelect('s', 'N')}
        >
          N
        </SelectionButton>
      </Box>
      <Box>
        <Typography variant="subtitle1">사고형/감정형</Typography>
        <SelectionButton
          variant={mbti['t'] === 'T' ? 'contained' : 'outlined'}
          onClick={() => handleSelect('t', 'T')}
        >
          T
        </SelectionButton>
        <SelectionButton
          variant={mbti['t'] === 'F' ? 'contained' : 'outlined'}
          onClick={() => handleSelect('t', 'F')}
        >
          F
        </SelectionButton>
      </Box>
      <Box>
        <Typography variant="subtitle1">판단형/인식형</Typography>
        <SelectionButton
          variant={mbti['j'] === 'J' ? 'contained' : 'outlined'}
          onClick={() => handleSelect('j', 'J')}
        >
          J
        </SelectionButton>
        <SelectionButton
          variant={mbti['j'] === 'P' ? 'contained' : 'outlined'}
          onClick={() => handleSelect('j', 'P')}
        >
          P
        </SelectionButton>
      </Box>
    </Container>
  );
};

export default MBTISelection;
