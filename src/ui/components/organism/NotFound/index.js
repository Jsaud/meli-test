
const NotFound = () => {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          {" "}
          <span class="text-danger">Opps!</span> Producto no encontrado.
        </p>
        <p class="lead">La página que buscas no existe.</p>
        <a href="/" class="btn btn-primary">
          Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
