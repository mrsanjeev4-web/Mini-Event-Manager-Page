import React from 'react';
import { Button } from '@components/index';
import { Input } from '@components/ui/index';
import {  EventFormProps } from '@app/types';
import { validateEventDate, validateEventName,getTodayDateString } from '@utils/index';


export const EventForm: React.FC<EventFormProps> = ({
  form,
  editingEvent,
  isLoading,
  onSubmit,
  onCancelEdit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = form;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6 sticky top-32">
      <div className="flex items-center mb-6">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={editingEvent ? "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" : "M12 4v16m8-8H4"} 
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 ml-3">
          {editingEvent ? 'Edit Event' : 'Add New Event'}
        </h2>
      </div>

      {editingEvent && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-blue-800">Editing: {editingEvent.name}</span>
            </div>
            <button
              type="button"
              onClick={onCancelEdit}
              className="text-blue-600 hover:text-blue-800 text-sm underline cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Event Name *"
          placeholder="Enter event name"
          error={errors.eventName?.message}
          {...register('eventName', {
            required: 'Event name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
            validate: validateEventName
          })}
        />

        <Input
          type="date"
          label="Event Date *"
          error={errors.eventDate?.message}
          min={getTodayDateString()}
          {...register('eventDate', {
            required: 'Event date is required',
            validate: validateEventDate
          })}
        />

        <Button
          type="submit"
          disabled={isSubmitting || isLoading}
          isLoading={isSubmitting || isLoading}
          className="w-full cursor-pointer"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={editingEvent ? "M5 13l4 4L19 7" : "M12 4v16m8-8H4"} 
              />
            </svg>
            {editingEvent ? 'Update Event' : 'Add Event'}
          </div>
        </Button>
      </form>
    </div>
  );
};
