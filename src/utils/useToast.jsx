import { useState, useCallback } from 'react';
import Toast from '../components/Toast';

export function useToast() {
  const [toast, setToast] = useState({ isOpen: false, message: '' });

  const showToast = useCallback((message) => {
    setToast({ isOpen: true, message });
    setTimeout(() => {
      setToast({ isOpen: false, message: '' });
    }, 3000);
  }, []);

  const closeToast = useCallback(() => {
    setToast({ isOpen: false, message: '' });
  }, []);

  const ToastComponent = (
    <Toast
      message={toast.message}
      isOpen={toast.isOpen}
      onClose={closeToast}
    />
  );

  return { showToast, ToastComponent };
}