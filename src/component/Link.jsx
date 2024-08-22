import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopUniversities from "./src/section/TopUniversities";
import Home from "./Home";
import Programs from "./Programs";
import AdmissionInfo from "./AdmissionInfo";
import ContactUs from "./ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="./src/section/TopUniversities"
          component={TopUniversities}
        />
        {/* <Route path="/programs" component={Programs} />
        <Route path="/admission-info" component={AdmissionInfo} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/" component={Home} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
