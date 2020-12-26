import logo from './logo.svg';
import './App.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.jsx';
import ContactInfo from './components/contact_info/ContactInfo.jsx';
import PersonalSummary from './components/personal_summary/PersonalSummary.jsx';
import WorkExperience from './components/work_experience/WorkExperience.jsx';
function App() {
  return (
    <div className="App">
    <header>
      <HeaderComponent/>
    </header>
      <div id="layout-container">
        <div id="contact-info">
          <ContactInfo/>
        </div>
        <div id="summary">
          <PersonalSummary/>
          <WorkExperience/>
        </div>

      </div>

    </div>
  );
}

export default App;
