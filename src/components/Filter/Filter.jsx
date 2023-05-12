import { PropTypes } from 'prop-types';

export default function Filter({
  handleFollowBtnClick,
  filterOptions,
  selectedValue,
}) {
  return (
    <form>
      <label>{selectedValue ? selectedValue : 'Select filter value'}</label>
      <select>
        <option value={filterOptions.all} onClick={handleFollowBtnClick}>
          {filterOptions.all}
        </option>
        <option value={filterOptions.follow} onClick={handleFollowBtnClick}>
          {filterOptions.follow}
        </option>
        <option value={filterOptions.followings} onClick={handleFollowBtnClick}>
          {filterOptions.followings}
        </option>
      </select>
    </form>
  );
}
Filter.propTypes = {
  handleFollowBtnClick: PropTypes.func,
  selectedValue: PropTypes.string,
  filterOptions: PropTypes.shape({
    all: PropTypes.string,
    follow: PropTypes.string,
    followings: PropTypes.string,
  }),
};
