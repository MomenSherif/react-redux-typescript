import React from 'react';

/* could also use interface */
type Props = {
  message: String;
  type:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  closeable?: Boolean;
};

const Alert = ({ message, type, closeable = false }: Props) => {
  return (
    <div className={`alert alert-${type}`} role='alert'>
      {message}
      {closeable && (
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>×</span>
        </button>
      )}
    </div>
  );
};

export default Alert;
