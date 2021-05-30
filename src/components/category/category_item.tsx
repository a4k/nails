import * as React from 'react';
import { Master } from '../../domain/Master';

interface CategoryItemProps {
  category: Master;
  selectCategory: (categoryCode: string) => void;
  activeCategory: string;
}

const CategoryItem: React.FunctionComponent<CategoryItemProps> = ({
  category,
  selectCategory,
  activeCategory,
}: CategoryItemProps) => {
  const activeClass = activeCategory === category.code ? 'active' : '';
  return (
    <li className={activeClass} onClick={() => selectCategory(category.code)}>
      {category.title}
    </li>
  );
};

export default CategoryItem;
