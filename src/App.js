import siren from "/Users/jamescoholan/Downloads/sirenmain/src/Assets/Siren2.png";
import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <img src={siren} className="App-logo" alt="logo" />

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScsZB6CMlZM35O2j1QOJC6yiPGaqk7v-yppRnFdf23FB7X9xQ/viewform?embedded=true"
          width="640"
          height="574"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
