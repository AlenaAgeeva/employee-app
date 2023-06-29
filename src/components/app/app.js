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
        { name: "Brad P.", salary: 4000, increase: true, id: 1 },
        { name: "Simon R.", salary: 5300, increase: false, id: 2 },
        { name: "Oliver A.", salary: 2100, increase: true, id: 3 },
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
      id: ++this.maxId,
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
export default App;
