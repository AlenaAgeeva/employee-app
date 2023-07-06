import { Component } from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Brad P.", salary: 400, increase: true, rise: true, id: 1 },
        { name: "Simon R.", salary: 5300, increase: false, rise: false, id: 2 },
        { name: "Oliver A.", salary: 2100, increase: true, rise: false, id: 3 },
        { name: "Kate F.", salary: 100, increase: false, rise: false, id: 4 },
        { name: "Cleo U.", salary: 10100, increase: true, rise: false, id: 5 },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = this.state.data.length;
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: Array.from(data).filter((i) => i.id !== id),
      };
    });
  };
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: ++this.maxId,
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  sortByType = (items, filter) => {
    switch (filter) {
      case "salary":
        return items
          .filter((item) => item.salary > 1000)
          .sort((a, b) => b.salary - a.salary);
      case "rise":
        return items.filter((item) => item.rise);
      default:
        return items;
    }
  };
  onSortSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const empCount = data.length;
    const empIncreased = data.filter((el) => el.increase).length;
    const visibleData = this.sortByType(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo empCount={empCount} empIncreased={empIncreased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            filter={this.state.filter}
            onSortSelect={this.onSortSelect}
          />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
export default App;
