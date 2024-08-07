import React, { useState } from 'react';
import { Tag, tags } from '../../types';
import { FloatTagsContainer } from './styles';
import DrawerComponent from '../drawer';
import TagItem from './tag';

interface FloatTagsProps {
  tagList: Tag[];
  data: any;
}

const FloatTags: React.FC<FloatTagsProps> = ({ tagList, data }) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleTagClick = (tag: Tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  return (
    <>
      <FloatTagsContainer>
        <DrawerComponent
          tagList={tagList}
          data={data}
          selectedTags={selectedTags}
        />
        {tagList.map((tag) => (
          <TagItem
            key={tag.name}
            tagName={tag.name}
            onClick={() => handleTagClick(tag)}
            isSelected={selectedTags.includes(tag)}
          />
        ))}
      </FloatTagsContainer>
    </>
  );
};

export default FloatTags;
