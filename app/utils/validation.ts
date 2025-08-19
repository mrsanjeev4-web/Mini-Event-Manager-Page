import { VALIDATION_RULES } from "@constants/eventConstants";


export const validateEventName = (value: string) => {
  if (!value || value.trim().length === 0) {
    return VALIDATION_RULES.REQUIRED_MESSAGES.EVENT_NAME;
  }
  if (value.trim().length < VALIDATION_RULES.MIN_NAME_LENGTH) {
    return `Name must be at least ${VALIDATION_RULES.MIN_NAME_LENGTH} characters`;
  }
  return true;
};

export const validateEventDate = (value: string) => {
  if (!value) {
    return VALIDATION_RULES.REQUIRED_MESSAGES.EVENT_DATE;
  }
  return true;
};