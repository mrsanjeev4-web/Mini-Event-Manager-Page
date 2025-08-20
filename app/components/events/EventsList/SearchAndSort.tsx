
import React from 'react';

import { SearchAndSortProps, SortBy } from '@app/types';
import { SORT_OPTIONS } from '@constants/eventConstants';


export const SearchAndSort: React.FC<SearchAndSortProps> = ({
  searchTerm,
  sortBy,
  sortOrder,
  onSearchChange,
  onSortChange,
  onSortOrderToggle,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Search */}
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50/50"
          placeholder="Search events..."
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg className="h-4 w-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Sort Controls */}
      <div className="flex gap-2">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortBy)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-gray-50/50"
        >
          <option value={SORT_OPTIONS.CREATED}>Created</option>
          <option value={SORT_OPTIONS.NAME}>Name</option>
          <option value={SORT_OPTIONS.DATE}>Date</option>
        </select>

        <button
          onClick={onSortOrderToggle}
          className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-gray-50/50 transition-all duration-200 group cursor-pointer"
        >
          <span className="transition-transform group-hover:scale-110 inline-block">
            {sortOrder === 'asc' ? '↑' : '↓'}
          </span>
        </button>
      </div>
    </div>
  );
};
