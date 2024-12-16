'use client';

import * as React from 'react';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

/* eslint-disable */
export const useQueryWithAlerts = (options: UseQueryOptions, errorMessage: string): any => {
  const result = useQuery({
    refetchOnWindowFocus: false,
    retry: false,
    ...options,
  });

  /* istanbul ignore next */
  React.useEffect(() => {
    const error = result.error as AxiosError;
    if (error) {
      if (error?.response?.data === 'no healthy upstream') {
        console.error('Error', error);
      } else {
        toast.error('Error', {
          description: errorMessage,
          duration: 4000,
          position: 'bottom-center',
        });
      }
    }
  }, [result.error]);

  return result;
};
