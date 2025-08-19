import { useMemo } from 'react';

import { useLocalStorage } from './useLocalStorage';
import { isUpcoming } from '../utils/dateUtils';
import { Event, SortBy, SortOrder } from '@app/types';

export const useEvents = () => {
  const [events, setEvents, isEventsLoaded] = useLocalStorage<Event[]>('events', []);

  const upcomingEventsCount = useMemo(() => {
    return events.filter(event => isUpcoming(event.date)).length;
  }, [events]);

  const addEvent = (event: Omit<Event, 'id' | 'createdAt'>) => {
    const newEvent: Event = {
      ...event,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setEvents(prev => [...prev, newEvent]);
  };

  const updateEvent = (id: string, updates: Partial<Event>) => {
    setEvents(prev => prev.map(event => 
      event.id === id ? { ...event, ...updates } : event
    ));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  const clearAllEvents = () => {
    setEvents([]);
  };

  const getFilteredAndSortedEvents = (
    searchTerm: string,
    sortBy: SortBy,
    sortOrder: SortOrder
  ) => {
    const filtered = events.filter(event =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'created':
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });
  };

  return {
    events,
    isEventsLoaded,
    upcomingEventsCount,
    addEvent,
    updateEvent,
    deleteEvent,
    clearAllEvents,
    getFilteredAndSortedEvents,
  };
};