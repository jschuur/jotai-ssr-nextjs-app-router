'use client';

import { useAtomValue } from 'jotai';

import { helloAtom } from '@/store';

export default function Home() {
  const hello = useAtomValue(helloAtom);

  return <main>Jotai says {hello}</main>;
}
