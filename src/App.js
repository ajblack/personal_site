import logo from './logo.svg';
import './App.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import ContactInfo from './components/contact_info/ContactInfo.jsx';
import PersonalSummary from './components/personal_summary/PersonalSummary.jsx';
import WorkExperience from './components/work_experience/WorkExperience.jsx';
function App() {
  return (
    <div className="App">

      <div id="layout-container">
        <div id="contact-info">
          <ContactInfo/>
        </div>
        <div id="summary">
          <PersonalSummary/>
          <WorkExperience/>
        </div>

      </div>
      <footer>
        <a href="https://github.com/ajblack/personal_site">
        See the source on github <i className="fab fa-github"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
