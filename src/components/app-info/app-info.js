import "./app-info.css";
function AppInfo({ empCount, empIncreased }) {
  return (
    <div className="app-info">
      <h1>Register of employees</h1>
      <h2>Number of employees in the company: {empCount}</h2>
      <h2>Bonuses will be granded to: {empIncreased}</h2>
    </div>
  );
}
export default AppInfo;
