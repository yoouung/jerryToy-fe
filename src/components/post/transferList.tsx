import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
} from '@mui/material';

interface TransferListProps {
  items: any[];
  checked: string[];
  setChecked: (checked: string[]) => void;
}

const TransferList: React.FC<TransferListProps> = ({
  items,
  checked,
  setChecked,
}) => {
  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List>
      {items.map((item) => (
        <ListItem
          key={item.userId}
          button
          onClick={handleToggle(item.nickname)}
        >
          <Checkbox
            checked={checked.indexOf(item.nickname) !== -1}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary={item.nickname} />
          <Typography variant="body2">{item.mbti}</Typography>
          <Typography variant="body2">{item.age}세</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default TransferList;
