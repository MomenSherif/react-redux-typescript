import { useState, useEffect } from 'react';

const usePromise = <T = any>(promise: Promise<T>, dep: [] = []) => {
  const [state, setState] = useState<{ loading: boolean, data: T | null, error: Error | null, }>({
    loading: false,
    data: null,
    error: null
  });

  useEffect(() => {
    setState(prevState => ({ ...prevState, loading: true }));

    promise
      .then(data => setState(prevState => ({ ...prevState, data })))
      .catch(error => setState(prevState => ({ ...prevState, error })))
      .finally(() => setState(prevState => ({ ...prevState, loading: false })));

  }, dep)

  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
  }
};


const useHookReturnArrayAsTuple = () => {
  const [loading, setIsLoading] = useState(false);

  return [loading, setIsLoading] as const; // return as tuple
};

const [state, loadingState] = useHookReturnArrayAsTuple();

export default usePromise;
