import REACT from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Proyectos from "./components/proyectos/Proyectos";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import ProyectoState from './context/proyectos/proyectoState'
import TareaState from './context/tareas/tareaState'

function App() {
  return (
    <ProyectoState>
      <TareaState>
         <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/nuevaCuenta" component={NuevaCuenta} />
          <Route path="/proyectos" component={Proyectos} />
          <Redirect to="/login" />
        </Switch>
      </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
