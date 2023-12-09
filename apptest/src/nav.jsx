import { Outlet, Link } from "react-router-dom";

function nav() {
  return (
<>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul class="nav navbar-nav">
            <li class="active"><Link to="/">Home</Link></li>
            <li><Link to="./page1">page1</Link></li>
            <li><Link to="./page2">page2</Link></li>
            <li><Link to="./page3">page3</Link></li>
        </ul>
        </div>
    </nav>
    <Outlet />
</>

  
  );
}

export default nav;
