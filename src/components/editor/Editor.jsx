import React from "react";
import '../../scss/Editor.scss'
import '../../scss/Global.scss'
const Editor = () => {
  return (
    <>
      <section className="editor_section">
        <div className="container">
          <div className="editor_title">
            <h3>EDITOR’S PICK</h3>
            <p>Problems trying to resolve the conflict between </p>
          </div>

          <div className="editorWrapper">
            <div className="editor_images1">
              <button className="editor_btn">MEN</button>
            </div>
            <div className="editor_images2">
              <button className="editor_btn">WOMEN</button>
            </div>
            <div className="seperate_div">
              <div className="editor_images3">
                <button className="editor_btn">ACCESSORIES</button>
              </div>
              <div className="editor_images4">
                <button className="editor_btn">KIDS</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Editor;
