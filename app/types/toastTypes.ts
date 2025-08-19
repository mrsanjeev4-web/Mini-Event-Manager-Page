export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface ToastContainerProps {
  toasts: ToastType[];
  onRemoveToast: (id: string) => void;
}


export type ToastType = Toast['type'];