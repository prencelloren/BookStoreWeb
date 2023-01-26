import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import { Signupscreen } from "./auth/student_login";
import { Adminlogin } from "./auth/admin_login";
import { Adminpage } from "./pages/adminpage";
import { Addbooks } from "./pages/add_books";
import { Adminprofile } from "./pages/admin_profile";
import { Todaybookrequest } from "./pages/today_bookrequest";
import { Issuebook } from "./pages/issue_book";
import { Yourbooks } from "./pages/your_books";
import { Retrieveissuedbook } from "./pages/retrieve_issuedbook";
import { Deletebooks } from "./pages/delete_books";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signupscreen />
          </Route>
          <Route exact path="/signup">
            <Signupscreen />
          </Route>
          <Route exact path="/admin">
            <Adminlogin />
          </Route>
          <Route exact path="/adminpage">
            <Adminpage />
          </Route>
          <Route exact path="/addbooks">
            <Addbooks />
          </Route>
          <Route exact path="/adminprofile">
            <Adminprofile />
          </Route>
          <Route exact path="/todaybookrequest">
            <Todaybookrequest />
          </Route>
          <Route exact path="/issuebook">
            <Issuebook />
          </Route>
          <Route exact path="/yourbooks">
            <Yourbooks />
          </Route>
          <Route exact path="/retrieveissuedbook">
            <Retrieveissuedbook />
          </Route>
          <Route exact path="/deletebooks">
            <Deletebooks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
