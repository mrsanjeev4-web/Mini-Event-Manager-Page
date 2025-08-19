import React from 'react';
import { Toast as ToastType } from '@app/types/toastTypes';

interface ToastProps {
  toast: ToastType;
  onRemove: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const getToastStyles = () => {
    const baseStyles = "max-w-sm w-full bg-white border-l-4 rounded-lg shadow-lg p-4 transform transition-all duration-300 animate-slide-in";
    
    switch (toast.type) {
      case 'success':
        return `${baseStyles} border-green-500`;
      case 'error':
        return `${baseStyles} border-red-500`;
      case 'info':
        return `${baseStyles} border-blue-500`;
      default:
        return `${baseStyles} border-gray-500`;
    }
  };

  const getIconStyles = () => {
    const baseStyles = "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center";
    
    switch (toast.type) {
      case 'success':
        return `${baseStyles} bg-green-100`;
      case 'error':
        return `${baseStyles} bg-red-100`;
      case 'info':
        return `${baseStyles} bg-blue-100`;
      default:
        return `${baseStyles} bg-gray-100`;
    }
  };

  const getTextStyles = () => {
    const baseStyles = "text-sm font-medium";
    
    switch (toast.type) {
      case 'success':
        return `${baseStyles} text-green-800`;
      case 'error':
        return `${baseStyles} text-red-800`;
      case 'info':
        return `${baseStyles} text-blue-800`;
      default:
        return `${baseStyles} text-gray-800`;
    }
  };

  const renderIcon = () => {
    switch (toast.type) {
      case 'success':
        return (
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={getToastStyles()}>
      <div className="flex items-center">
        <div className={getIconStyles()}>
          {renderIcon()}
        </div>
        <div className="ml-3 flex-1">
          <p className={getTextStyles()}>
            {toast.message}
          </p>
        </div>
        <button
          onClick={() => onRemove(toast.id)}
          className="ml-2 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};