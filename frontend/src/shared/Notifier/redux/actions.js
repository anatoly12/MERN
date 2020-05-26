export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';

export const closeSnackbar = (key) => ({
  type: CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const removeSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  key,
});

export const enqueueSnackbar = (message, variant) => {
  // variant = default | error | success | warning | info
  const notification = {
    message,
    options: {
      key: new Date().getTime() + Math.random(),
      variant,
      autoHideDuration: 3000,
      // action: (key) => (
      //   <Button onClick={() => closeSnackbar(key)}>dismiss</Button>
      // ),
    },
  };

  const key = notification.options && notification.options.key;

  return {
    type: ENQUEUE_SNACKBAR,
    notification: {
      ...notification,
      key: key || new Date().getTime() + Math.random(),
    },
  };
};
