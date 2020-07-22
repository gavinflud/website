import React from "react";
import ReactQuill from "react-quill";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./post-edit-view.css";

const PostEdit = (props) => {
  var modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  var formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div>
      <h1>{props.isEdit ? "Edit Post" : "New Post"}</h1>

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
          formats={formats}
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
    </div>
  );
};

export default PostEdit;
