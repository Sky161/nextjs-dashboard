'use client';

import { SWRConfig } from 'swr';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const SWRProvider = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
