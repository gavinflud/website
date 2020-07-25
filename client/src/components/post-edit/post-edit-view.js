import React from "react";
import DatePicker from "react-datepicker";
import { Editor } from "@tinymce/tinymce-react";
import "react-datepicker/dist/react-datepicker.css";
import "./post-edit-view.css";

const PostEdit = (props) => {
  var editorConfiguration = {
    height: 500,
    menubar: false,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code codesample fullscreen",
      "insertdatetime media table paste code help wordcount",
    ],
    toolbar: [
      "undo redo | formatselect | bold italic underline backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent codesample | removeformat",
    ],
    codesample_languages: [
      { text: "HTML/XML", value: "markup" },
      { text: "JavaScript", value: "javascript" },
      { text: "CSS", value: "css" },
      { text: "Java", value: "java" },
      { text: "JSON", value: "json" },
      { text: "Kotlin", value: "kotlin" },
      { text: "Bash", value: "bash" },
    ],
  };

  return (
    <div className="gf-edit-post">
      <h1>{props.isEdit ? "Edit Post" : "New Post"}</h1>

      {props.shouldRender ? (
        <div>
          {props.validationError !== "" ? (
            <p className="gf-validation-error">{props.validationError}</p>
          ) : (
            ""
          )}

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
          <Editor
            initialValue={props.content}
            init={editorConfiguration}
            onEditorChange={props.functions.handleContentChange}
            apiKey={process.env.REACT_APP_EDITOR_API_KEY}
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
