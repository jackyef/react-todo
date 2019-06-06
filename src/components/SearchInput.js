import React, { Fragment } from 'react';

const SearchInput = props => {
  const { value, onChange } = props;

  return (
    <Fragment>
      <label htmlFor="search">Search: </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        name="search"
        placeholder="enter keyword here..."
        />
    </Fragment>
  )
}

export default SearchInput;
