import React from 'react'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Tabla_Altas() {
  return (
      <div className='container mt-5'>
          <table class="table align-middle">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">SKU</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Marca</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Sit</td>
                    <td>Amet</td>
                    <td>4</td>
                    <td>Amet</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Adipisicing</td>
                    <td>Elit</td>
                    <td>2</td>
                    <td>Amet</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Hic</td>
                    <td>Fugiat</td>
                    <td>2</td>
                    <td>Amet</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Sit</td>
                    <td>Amet</td>
                    <td>1</td>
                    <td>Amet</td>  
                  </tr>
                </tbody>
            </table>
    </div>
  )
}

export default Tabla_Altas