import React from 'react';
import { Tv } from 'lucide-react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'text-white' }) => {
  return (
    <div className={`flex items-center ${color}`}>
      <img src="/image0.jpeg"  width={250}/>
    </div>
  );
};

export default Logo;