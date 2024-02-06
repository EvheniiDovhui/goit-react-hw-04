import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

const LoaderComponent = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4caf50"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default LoaderComponent;
