'use client';

import { IconType } from 'react-icons';

interface FeatureIconProps {
  icon: IconType;
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon: Icon, className }) => {
  return <Icon className={className} />;
};

export default FeatureIcon;
