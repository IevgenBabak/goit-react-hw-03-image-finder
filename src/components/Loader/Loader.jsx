import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.Loader}>
  <Bars
  height="80"
  width="80"
  color="blue"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
    />
  </div>
);
