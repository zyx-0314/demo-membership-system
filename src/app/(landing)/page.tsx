"use client"

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function Home() {

  return (
    <>
      <div className="bg-gray-500 flex justify-center items-center w-full h-dvh">
        <Alert className="w-fit">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            <h1>🏗️🚧Page Under Construction🚧👷</h1>
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
}
