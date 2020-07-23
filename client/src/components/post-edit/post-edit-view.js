import React from "react";
import ReactQuill from "react-quill";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./post-edit-view.css";

const PostEdit = (props) => {
  var modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  };

  return (
    <div>
      <h1>{props.isEdit ? "Edit Post" : "New Post"}</h1>

      {props.shouldRender ? (
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={props.title}
            onChange={props.functions.handleChange}
            placeholder="Title"
          />

          <label>Publish Date</label>
          <DatePicker
            selected={props.date}
            onChange={props.functions.handleDateChange}
            dateFormat="dd/MM/yyyy"
          />

          <label>Content</label>
          <ReactQuill
            value={props.content}
            onChange={props.functions.handleContentChange}
            modules={modules}
          />

          <div className="gf-post-edit-buttons">
            <button className="button" onClick={props.functions.save}>
              {props.isEdit ? "Update" : "Save"}
            </button>
            <button
              className="button-outline"
              onClick={props.functions.togglePublishAndSave}
            >
              {props.published ? "Hide" : "Publish"}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PostEdit;
