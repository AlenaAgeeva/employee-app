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
        { name: "Brad P.", salary: 4000, increase: true, rise: true, id: 1 },
        { name: "Simon R.", salary: 5300, increase: false, rise: false, id: 2 },
        { name: "Oliver A.", salary: 2100, increase: true, rise: false, id: 3 },
      ],
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

  render() {
    const empCount = this.state.data.length;
    const empIncreased = this.state.data.filter((el) => el.increase).length;
    return (
      <div className="app">
        <AppInfo empCount={empCount} empIncreased={empIncreased} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
export default App;
