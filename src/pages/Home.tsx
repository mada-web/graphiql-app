import { FC } from 'react';

export const Home: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-3xl font-bold underline">Logic Labs</h1>
      <h2 className="text-2xl font-bold mt-4">We start</h2>
    </div>
  );
};
