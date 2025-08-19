import { UseFormReturn } from "react-hook-form";

export interface Event {
  id: string;
  name: string;
  date: string;
  createdAt: string;
}

export interface FormData {
  eventName: string;
  eventDate: string;
}


export interface EventCardProps {
  event: Event;
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
  animationDelay: number;
}

export interface EventsListProps {
  events: Event[];
  allEvents: Event[];
  searchTerm: string;
  debouncedSearchTerm: string;
  sortBy: SortBy;
  sortOrder: SortOrder;
  onSearchChange: (value: string) => void;
  onSortChange: (sortBy: SortBy) => void;
  onSortOrderToggle: () => void;
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
  onClearAll: () => void;
}

export interface SearchAndSortProps {
  searchTerm: string;
  sortBy: SortBy;
  sortOrder: SortOrder;
  onSearchChange: (value: string) => void;
  onSortChange: (sortBy: SortBy) => void;
  onSortOrderToggle: () => void;
}

export interface EventFormProps {
  form: UseFormReturn<FormData>;
  editingEvent: Event | null;
  isLoading: boolean;
  onSubmit: (data: FormData) => Promise<void>;
  onCancelEdit: () => void;
}

export interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  bgColor: string;
}



export interface StatsCardsProps {
  totalEvents: number;
  upcomingEvents: number;
  filteredEvents: number;
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}


export type SortBy = 'name' | 'date' | 'created';
export type SortOrder = 'asc' | 'desc';