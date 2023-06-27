import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";
function EmployeesList({ data }) {
  const el = data.map((item) => {
    const { id, ...itemProps } = item;
    return <EmployeesListItem key={id} {...itemProps} />;
  });
  return <ul className="app-list list-group">{el}</ul>;
}

export default EmployeesList;
