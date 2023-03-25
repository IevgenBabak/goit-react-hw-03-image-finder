import { Puff } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <Puff
  height="80"
  width="80"
  radius={1}
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  );
};
