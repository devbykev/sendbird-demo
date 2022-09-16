
import './App.css';
import Notification from './firebaseNotifications/Notification'
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";


const APP_ID = "F1CD1BB4-7DD5-465E-8929-3EB26D45E189"
const USER_ID = "1234"

function App() {
  return (
    <div className="App">
      <SendbirdApp appId={APP_ID} userId={USER_ID} />
      <Notification />
    </div>
  );
}

export default App;