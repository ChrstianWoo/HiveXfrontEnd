import React from 'react';

export const NavigationBar = (navigationBarProps) => {
  return (
    <div>
      My product item is...
      {navigationBarProps.productItemsCount}
    </div>
  );
};
