import React from "react";
import ReactQuill from "react-quill";
import DatePicker from "react-datepicker";
import hljs from "highlight.js";
import "react-datepicker/dist/react-datepicker.css";
import "./post-edit-view.css";
import "highlight.js/styles/github.css";

hljs.configure({
  languages: ["javascript", "java", "kotlin", "bash", "json", "xml"],
});

const PostEdit = (props) => {
  var modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "code"],
      ["blockquote", "code-block"],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],

      [{ align: [] }],

      ["clean"],
    ],
    syntax: {
      highlight: (text) => hljs.highlightAuto(text).value,
    },
  };

  return (
    <div className="gf-edit-post">
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
