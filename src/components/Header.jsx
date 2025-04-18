import PropTypes from 'prop-types';
function Header({ emoji }) {
  return <h1>React Practice Application {emoji}</h1>;
}
Header.propTypes = {
  emoji: PropTypes.string,
};

export default Header;
