

function Altas() {
  return (
      <div className="container mt-3">
          <form class="row g-3 needs-validation" novalidate>
              <caption>Captura de altas</caption>
                <div class="col-md-4">
                    <label for="descripcion" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="descripcion" required/>
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">SKU</label>
                    <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-2">
                    <label for="validationCustomUsername" class="form-label">Cantidad</label>
                    <div class="input-group has-validation">
                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <label for="validationCustom03" class="form-label">Marca</label>
                    <input type="text" class="form-control" id="validationCustom03" required/>
                    <div class="invalid-feedback">
                    Please provide a valid brand.
                    </div>
                </div>
            
                <div class="col-12">
                    <button class="btn btn-success" type="submit">Agregar</button>
                </div>
            </form>
    </div>
  )
}

export default Altas