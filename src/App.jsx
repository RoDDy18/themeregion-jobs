import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import JobList from "./routes/JobList";
import JobDetails from "./routes/JobDetails";
import Resume from "./routes/Resume";

function App() {

  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/list" element={<JobList/>}/>
          <Route path="/detail" element={<JobDetails/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
