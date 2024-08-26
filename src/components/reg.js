import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Reg() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Имя пользователя:', username);
    console.log('Email:', email);
    console.log('Пароль:', password);

    
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h3>Регистрация</h3>
            <form onSubmit={handleSubmit}>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Имя пользователя
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example23">
                  Email
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example33"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example33">
                  Пароль
                </label>
              </div>

              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-lg btn-block"
              >
                Зарегистрироваться
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">
                  или
                </p>
              </div>

              <Link to="/Login" className="nav-link">
                <p>Вход</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reg;
