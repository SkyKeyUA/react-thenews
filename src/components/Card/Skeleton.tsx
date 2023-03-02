/** @format */

import React from 'react';
import ContentLoader from 'react-content-loader';
export const Skeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={445}
      height={546}
      viewBox="0 0 402 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="18.5" y="0" rx="5" ry="5" width="365" height="200" />
      <rect x="36" y="223" rx="5" ry="5" width="160" height="20" />
      <rect x="36" y="260" rx="5" ry="5" width="350" height="55" />
      <rect x="36" y="335" rx="5" ry="5" width="350" height="70" />
      <rect x="36" y="418" rx="5" ry="5" width="120" height="20" />
    </ContentLoader>
  );
};
