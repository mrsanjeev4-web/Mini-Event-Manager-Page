'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Event, FormData, SortBy, SortOrder } from '@app/types';
import { DEBOUNCE_DELAY } from '@constants/eventConstants';
import { useToast, useEvents, useDebounce } from '@utils/index';
import { Modal, Button, EventsHeader, StatsCards, EventForm, EventsList, ToastContainer } from '@components/index';

export default function EventsPage() {
  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('created');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Custom Hooks
  const {
    events,
    isEventsLoaded,
    upcomingEventsCount,
    addEvent,
    updateEvent,
    deleteEvent,
    clearAllEvents,
    getFilteredAndSortedEvents,
  } = useEvents();

  const { toasts, showToast, removeToast } = useToast();
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);

  // Form
  const form = useForm<FormData>();

  // Computed values
  const filteredAndSortedEvents = getFilteredAndSortedEvents(
    debouncedSearchTerm,
    sortBy,
    sortOrder
  );

  // Event Handlers
  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      if (editingEvent) {
        // Update existing event
        updateEvent(editingEvent.id, {
          name: data.eventName.trim(),
          date: data.eventDate,
        });
        setEditingEvent(null);
        showToast('Event updated successfully! 🎉', 'success');
      } else {
        // Create new event
        addEvent({
          name: data.eventName.trim(),
          date: data.eventDate,
        });
        showToast('Event created successfully! 🎉', 'success');
      }

      form.reset();
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error');
      console.error('Error handling event submission:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    form.setValue('eventName', event.name);
    form.setValue('eventDate', event.date);
    showToast('Ready to edit! ✏️', 'info');
  };

  const handleDelete = (id: string) => {
    deleteEvent(id);
    showToast('Event deleted successfully! 🗑️', 'info');
  };

  const handleCancelEdit = () => {
    setEditingEvent(null);
    form.reset();
    showToast('Edit cancelled', 'info');
  };

  const handleClearAll = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDeleteAll = () => {
    clearAllEvents();
    setSearchTerm('');
    setShowDeleteModal(false);
    showToast('All events deleted successfully! 🧹', 'info');
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSortChange = (newSortBy: SortBy) => {
    setSortBy(newSortBy);
  };

  const handleSortOrderToggle = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Loading state
  if (!isEventsLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <EventsHeader />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <StatsCards
          totalEvents={events.length}
          upcomingEvents={upcomingEventsCount}
          filteredEvents={filteredAndSortedEvents.length}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Form */}
          <div className="lg:col-span-1">
            <EventForm
              form={form}
              editingEvent={editingEvent}
              isLoading={isLoading}
              onSubmit={handleSubmit}
              onCancelEdit={handleCancelEdit}
            />
          </div>

          {/* Events List */}
          <div className="lg:col-span-2">
            <EventsList
              events={filteredAndSortedEvents}
              allEvents={events}
              searchTerm={searchTerm}
              debouncedSearchTerm={debouncedSearchTerm}
              sortBy={sortBy}
              sortOrder={sortOrder}
              onSearchChange={handleSearchChange}
              onSortChange={handleSortChange}
              onSortOrderToggle={handleSortOrderToggle}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete All Events"
        description="This action cannot be undone"
      >
        <div className="mb-6">
          <p className="text-gray-700">
            Are you sure you want to delete all{' '}
            <span className="font-semibold text-red-600">{events.length}</span> events?
            This will permanently remove all your events from storage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            onClick={() => setShowDeleteModal(false)}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleConfirmDeleteAll}
            className="flex-1"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete All
          </Button>
        </div>
      </Modal>

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onRemoveToast={removeToast} />

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}