
// const getResult = () => {
//       return 'Josa';
// }
import PropTypes from 'prop-types';

export const FirstApp = ( {title, message} ) => {

      return ( 
      <><h1>{title}</h1><p>{message}</p></>
)};

FirstApp.propTypes = {
      title: PropTypes.string.isRequired,
      message: PropTypes.string
}
