import { FC } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { DataFormCard } from '../../types/types';

interface InputTitleProps {
  register: UseFormRegister<FieldValues>;
  label: Path<DataFormCard>;
  page: string;
}

export const ButtonForm: FC<InputTitleProps> = (props) => {
  const { register, label, page } = props;
  const intl = useIntl();

  return (
    <div className="mt-4">
      <input
        className="w-full cursor-pointer rounded-md bg-green p-3 transition-all hover:bg-green/70 active:bg-orange"
        type="submit"
        {...register(label, {
          required: 'Enter a data',
        })}
        value={
          page === 'login'
            ? intl.formatMessage({ id: 'SIGN_IN' })
            : intl.formatMessage({ id: 'SIGN_UP' })
        }
      />
    </div>
  );
};
