
import React from 'react';
import { StatCardProps } from '@app/types';


export const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  bgColor,
}) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <div className={`p-3 ${bgColor} rounded-xl`}>
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-gray-600 text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
};