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
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: Array.from(data).filter((i) => i.id !== id),
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
        <EmployeesAddForm />
      </div>
    );
  }
}
export default App;
