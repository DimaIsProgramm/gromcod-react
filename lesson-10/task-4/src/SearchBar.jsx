import React from 'react';

class SearchBar extends React.Component {
  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChange = e => {
    this.props.onInStockChange(e.target.checked);
  };
  render() {
    const filterText = this.props.filterText;
    const isStockOnly = this.props.isStockOnly;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input type="checkbox" checked={isStockOnly} onChange={this.handleInStockChange} />
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
