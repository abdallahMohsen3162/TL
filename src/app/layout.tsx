"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  })
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
