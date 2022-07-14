import React from "react";

export default function AddTodo() {
  return (
    <div className="collection-item">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">mode_edit</i>
              <textarea
                id="icon_prefix2"
                className="materialize-textarea"
              ></textarea>
              <button className="right btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
