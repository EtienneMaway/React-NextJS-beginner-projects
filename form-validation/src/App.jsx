import { useState } from "react";

import "./Style.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  return (
    <div>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            style={{ borderColor: userColor }}
            type="text"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error ">{errorUsername}</p>

          <input
            style={{ borderColor: userColor }}
            type="text"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error ">{errorUsername}</p>
          <input
            style={{ borderColor: userColor }}
            type="text"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error ">{errorUsername}</p>
          <input
            style={{ borderColor: userColor }}
            type="text"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error ">{errorUsername}</p>
          <input
            style={{ borderColor: userColor }}
            type="text"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error ">{errorUsername}</p>
        </form>
      </div>
    </div>
  );
};

export default App;
