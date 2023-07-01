'use client';
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
interface Props {
  children: ReactNode;
}
const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
