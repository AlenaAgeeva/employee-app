import "./employees-add-form.css";
import { Component } from "react";
class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.name.length > 1 &&
      !this.state.name.startsWith(" ") &&
      this.state.salary > 0 &&
      this.state.salary !== ""
    ) {
      this.props.onAdd(this.state.name, this.state.salary);
    }
  };
  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What is her/his name?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary range in $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}
export default EmployeesAddForm;
