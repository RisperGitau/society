import React from "react";

class FilterColumns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      filterItems: this.props.filterItems,
      selectedItems: this.props.filterItems
        .filter(item => item.selected === true)
        .map(item => item.name)
    };
  }

  showFilter = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

  changeHandler = index => {
    console.log("inside columnfilter method");
    const filterItems = [];

    filterItems.push(...this.state.filterItems);
    filterItems[index].selected = !filterItems[index].selected;
    console.log(filterItems);
    const selectedItems = filterItems
      .filter(item => item.selected === true)
      .map(item => item.name);
    console.log(selectedItems);
    this.setState({
      selectedItems: selectedItems
    });
  };

  render() {
    return (
      <div className="columnFilter">
        <button
          className="filterIcon"
          onClick={this.showFilter}
          title="Click to launch filter"
        >
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB3aWR0aD0iMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTU5NSAyOTVxMTcgNDEtMTQgNzBsLTQ5MyA0OTN2NzQycTAgNDItMzkgNTktMTMgNS0yNSA1LTI3IDAtNDUtMTlsLTI1Ni0yNTZxLTE5LTE5LTE5LTQ1di00ODZsLTQ5My00OTNxLTMxLTI5LTE0LTcwIDE3LTM5IDU5LTM5aDEyODBxNDIgMCA1OSAzOXoiLz48L3N2Zz4="
            alt="Filter Icon"
            width="16px"
          />
        </button>
        {this.state.showFilter && (
          <form className="filterContent">
            {this.state.filterItems.map((item, index) => (
              <label>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => this.changeHandler(index)}
                />
                {item.name}
              </label>
            ))}
          </form>
          // <form className="filterContent" onChange={this.changeHandler}>
          //   <label>
          //     <input type="checkbox" onChange={this.changeHandler(index)} />
          //     Input 1
          //   </label>
          //   <label>
          //     <input type="checkbox" />
          //     Input 1
          //   </label>
          // </form>
        )}
      </div>
    );
  }
}

export default FilterColumns;
