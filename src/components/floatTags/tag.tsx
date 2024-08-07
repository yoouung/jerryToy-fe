import { TagStyle } from './styles';

interface TagProps {
  tagName: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const TagItem = ({ tagName, onClick, isSelected }: TagProps) => {
  return (
    <TagStyle onClick={onClick} isSelected={isSelected}>
      {tagName}
    </TagStyle>
  );
};

export default TagItem;
