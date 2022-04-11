

function Altas() {
  return (
      <div className="container mt-4">
          <form class="row g-3 needs-validation" novalidate>
              <caption>Captura de altas</caption>
                <div class="col-md-4">
                    <label for="descripcion" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="descripcion" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">SKU</label>
                    <input type="number" class="form-control" id="validationCustom02" required/>
                </div>
                <div class="col-md-2">
                    <label for="validationCustomUsername" class="form-label">Cantidad</label>
                    <div class="input-group has-validation">
                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                    </div>
                </div>
                <div class="col-md-2">
                    <label for="validationCustom03" class="form-label">Marca</label>
                    <input type="text" class="form-control" id="validationCustom03" required/>
                </div>
            
                <div class="col-12">
                    <button class="btn btn-success" type="submit">Agregar</button>
                </div>
            </form>
      </div>
      
  )
}

export default Altas