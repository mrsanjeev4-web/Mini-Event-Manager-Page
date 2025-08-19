export const SORT_OPTIONS = {
  CREATED: 'created' as const,
  NAME: 'name' as const,
  DATE: 'date' as const,
} as const;

export const TOAST_DURATION = 3000;
export const DEBOUNCE_DELAY = 300;
export const ANIMATION_DELAY = 100;

export const VALIDATION_RULES = {
  MIN_NAME_LENGTH: 2,
  REQUIRED_MESSAGES: {
    EVENT_NAME: 'Event name is required',
    EVENT_DATE: 'Event date is required',
  },
} as const;