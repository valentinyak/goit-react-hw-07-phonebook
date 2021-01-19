import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeFilter from '../../redux/filter/filter-actions';

function Filter({ value, onChange }) {
  return (
    <label>
      Find contact
      <input type="text" name="filterInput" onChange={onChange} value={value} />
    </label>
  );
}

const mapStateToProps = state => ({ value: state.contacts.filter });

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChange: PropTypes.func,
};
