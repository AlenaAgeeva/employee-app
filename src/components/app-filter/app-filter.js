import "./app-filter.css";
function AppFilter() {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All employees
      </button>
      <button className="btn btn-outline-light" type="button">
        Top productive
      </button>
      <button className="btn btn-outline-light" type="button">
        Top salary
      </button>
    </div>
  );
}
export default AppFilter;
