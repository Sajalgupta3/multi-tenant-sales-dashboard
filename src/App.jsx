import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Leads from "./components/Leads";
import CallLogs from "./components/CallLogs";

function App() {
  return (
    <div className="dashboard">
      <Header />

      <div className="main-layout">
        <div>
          <Stats />
          <Leads />
        </div>

        <div>
          <CallLogs />
        </div>
      </div>
    </div>
  );
}

export default App;
