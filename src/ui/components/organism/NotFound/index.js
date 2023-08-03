
const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {" "}
          <span class="text-danger">Opps!</span> Producto no encontrado.
        </p>
        <p className="lead">La página que buscas no existe.</p>
        <a href="/" className="btn btn-primary">
          Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
