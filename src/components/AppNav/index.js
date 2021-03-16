import './index.sass';

const AppNav = () => {
  return (
    <div className="AppNav">
      <header className="navbar">
        <div className="container-fluid">
          <a href="/" className="AppNav__logo"></a>
          <div className="AppNav__account">
            <a href="/" className="AppNav__avatar"></a>
            <a href="/" className="AppNav__settings"></a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default AppNav;
