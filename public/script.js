body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #fff;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

header h1 {
  font-size: 2.5em;
}

.features ul {
  list-style: none;
  padding-left: 0;
  margin-top: 20px;
}

.features li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

.features li::before {
  content: '✅';
  position: absolute;
  left: 0;
}

.optin {
  margin-top: 40px;
  text-align: center;
}

input[type="email"] {
  padding: 10px;
  width: 70%;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #00c9a7;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #00a98e;
}

footer {
  text-align: center;
  margin-top: 50px;
  font-size: 14px;
  opacity: 0.7;
}
