import * as React from 'react';
import CategoryItem from './category_item';
import { Master } from '../../domain/Master';

interface CategoryListProps {
  items: Master[];
  selectCategory: (categoryCode: string) => void;
  activeCategory: string;
}

const CategoryList: React.FunctionComponent<CategoryListProps> = ({
  items,
  selectCategory,
  activeCategory,
}: CategoryListProps) => {
  return (
    <div className="categories">
      <ul>
        {items.map(category => (
          <CategoryItem
            key={category.id}
            category={category}
            activeCategory={activeCategory}
            selectCategory={selectCategory}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
