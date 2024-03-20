import { FC } from 'react';

export const Background: FC = (): JSX.Element => {
  return (
    <section className="absolute z-0 hidden min-h-full w-screen items-stretch justify-between overflow-hidden sm:flex">
      <div className="relative -mb-[33px] -ml-[273px] h-[463px] w-[539px] place-self-end bg-[url('./element_2.png')] bg-auto" />
      <div className="relative -mr-[232px] -mt-[33px] h-[463px] w-[539px] place-self-start bg-[url('./element_1.png')] bg-auto bg-no-repeat" />
    </section>
  );
};
