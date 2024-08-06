import React from 'react';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';

interface TransferListProps {
  items: any[];
  checked: string[];
  setChecked: React.Dispatch<React.SetStateAction<string[]>>;
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

    if (newChecked.length > 1) {
      newChecked.splice(0, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List>
      {items.map((item) => (
        <ListItem
          key={item.userId}
          role={undefined}
          dense
          button
          onClick={handleToggle(item.userId)}
        >
          <Checkbox
            edge="start"
            checked={checked.indexOf(item.userId) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': item.userId }}
          />
          <ListItemText id={item.userId} primary={item.nickname} />
        </ListItem>
      ))}
    </List>
  );
};

export default TransferList;
