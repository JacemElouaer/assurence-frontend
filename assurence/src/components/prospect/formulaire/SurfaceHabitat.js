import React from "react";

function SurfaceHabitat() {
  return (
    <div className="grid-main">
      <div className="form">
        <div class=" card-shape">
          <div class="p-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div class="form-group ">
                <label for="inputEmail4 " className="label-shape">
                  Surface Habitat
                </label>
                <input
                  type="number"
                  class="form-control input-shape"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="form-group ">
                <label for="inputPassword4" class="label-shape">
                  Piéce
                </label>
                <input
                  type="password"
                  class="form-control input-shape"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="inputEmail4 " className="label-shape">
                Etage
              </label>
              <select class="custom-select input-shape" id="inputGroupSelect01">
                <option selected>Choisir votre étage</option>
                <option value="1">Etage intermediaire</option>
                <option value="2">Dernier étage</option>
                <option value="3">Rez de Chaussée</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurfaceHabitat;
