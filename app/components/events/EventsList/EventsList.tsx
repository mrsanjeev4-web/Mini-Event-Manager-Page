import React from 'react';

import { Button } from '@app/components/ui/Button';
import {  EventsListProps } from '@app/types';
import { ANIMATION_DELAY } from '@constants/eventConstants';
import { SearchAndSort } from './SearchAndSort';
import { EventCard } from './EventCard';



export const EventsList: React.FC<EventsListProps> = ({
  events,
  allEvents,
  searchTerm,
  debouncedSearchTerm,
  sortBy,
  sortOrder,
  onSearchChange,
  onSortChange,
  onSortOrderToggle,
  onEdit,
  onDelete,
  onClearAll,
}) => {
  return (
    <>
      {/* Search and Controls */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Your Events</h2>
          {allEvents.length > 0 && (
            <Button
              variant="danger"
              size="sm"
              onClick={onClearAll}
              className="text-sm"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear All
            </Button>
          )}
        </div>

        {allEvents.length > 0 && (
          <SearchAndSort
            searchTerm={searchTerm}
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSearchChange={onSearchChange}
            onSortChange={onSortChange}
            onSortOrderToggle={onSortOrderToggle}
          />
        )}
      </div>

      {/* Events List */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
        {events.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 11-4 0V9a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 11-4 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              {allEvents.length === 0 ? "No events yet" : "No events found"}
            </h3>
            <p className="text-gray-500">
              {allEvents.length === 0
                ? "Create your first event to get started!"
                : `No events match "${debouncedSearchTerm}"`
              }
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200/50">
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                onEdit={onEdit}
                onDelete={onDelete}
                animationDelay={index * ANIMATION_DELAY}
              />
            ))}
          </div>
        )}
      </div>

      {/* Results Summary */}
      {allEvents?.length > 0 && (
        <div className="text-center mt-6 space-y-1">
          <div className="text-sm text-gray-600">
            Showing {events?.length} of {allEvents?.length} events
          </div>
          {debouncedSearchTerm && (
            <div className="text-xs text-indigo-600">
              Search results for &quot;{debouncedSearchTerm}&quot; (debounced)
            </div>
          )}


        </div>
      )}
    </>
  );
};