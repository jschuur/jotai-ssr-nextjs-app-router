'use client';

import { Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import React from 'react';

import { helloAtom } from '@/store';

type Props = {
  initialState: string | null;
  children: React.ReactNode;
};

function StateWrapper({ initialState, children }: Props) {
  useHydrateAtoms([[helloAtom, initialState]]);

  return children;
}

export default function JotaiProvider({ initialState, children }: Props) {
  return (
    <Provider>
      <StateWrapper initialState={initialState}>{children}</StateWrapper>
    </Provider>
  );
}
