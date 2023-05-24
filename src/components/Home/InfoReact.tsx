import { FormattedMessage } from 'react-intl';

import React from '../../assets/svg/react.svg';
import Typescript from '../../assets/svg/typescript.svg';
import Tailwind from '../../assets/svg/tailwind.svg';
import Firebase from '../../assets/svg/firebase.svg';
import Qraphql from '../../assets/svg/graphql.svg';
import Npm from '../../assets/svg/npm.svg';

const InfoReact = () => {
  return (
    <>
      <div className="my-16 w-full rounded-[10px] bg-query p-6 text-dark-blue">
        <div className="mx-auto flex w-2/3 flex-col items-center gap-6">
          <div className="flex flex-row items-center gap-2 text-[24px]">
            <p className="font-semibold-400 font-Impact text-[32px]">GraphiQL</p>
            <FormattedMessage id="INTRO_REACT1" />
          </div>
          <h3 className="flex flex-row gap-2 self-start text-[20px]">
            <b>
              <FormattedMessage id="INTRO_REACT2" />
            </b>
            <FormattedMessage id="INTRO_REACT3" />
          </h3>
          <div className="flex w-full flex-row justify-between text-[20px]">
            <ul className="list-disc">
              <li>
                <FormattedMessage id="INTRO_REACT4" />
              </li>
              <li>
                <FormattedMessage id="INTRO_REACT5" />
              </li>
              <li>
                <FormattedMessage id="INTRO_REACT6" />
              </li>
              <li>
                <FormattedMessage id="INTRO_REACT7" />
              </li>
              <li>
                <FormattedMessage id="INTRO_REACT8" />
              </li>
            </ul>
            <ul className="list-disc">
              <li>
                <FormattedMessage id="INTRO_REACT9" />
              </li>
              <li>
                <FormattedMessage id="INTRO_REACT10" />
              </li>
              <li>
                <FormattedMessage id="INTRO_REACT11" />
              </li>
              <li>
                <FormattedMessage id="INTRO_REACT12" />
              </li>
              <li>
                <FormattedMessage id="INTRO_REACT13" />
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center gap-4">
            <p className="font-semibold-400 font-Impact text-[20px]">
              <FormattedMessage id="INTRO_REACT14" />
            </p>
            <React />
            <Typescript />
            <Firebase />
            <Tailwind />
            <Qraphql />
            <Npm />
          </div>
        </div>
      </div>
    </>
  );
};
export default InfoReact;
