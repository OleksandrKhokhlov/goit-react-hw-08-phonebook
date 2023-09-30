import { Grid } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Grid
      visible={isLoading}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{ position: 'fixed', left: '50%', top: '50%' }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#3f51b5"
    />
  );
};
