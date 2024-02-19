import React from "react";
import { Formik } from "formik";
import { create } from "./Redux/SliceContent";
import { useDispatch } from "react-redux";

function AddNotes() {
  let dispatch =useDispatch()

  return (
    <Formik
      initialValues={{
        title: "",
        note: "",
      }}
      onSubmit={(values, { resetForm }) => {
      dispatch(create(values))
        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <div className="bg-white h-64 sm:ml-72 sm:mr-12 pl-10 my-10 w-auto rounded-xl shadow-xl ">
          <div className=" text-2xl font-bold text-blue-900 pt-12 ">
            Add a Note
          </div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              if (values.title !== "" && values.note !== "") {
                handleSubmit();
              }
            }}
          >
            <div>
              <input
                type="text"
                className="placeholder:text-xl text-2xl py-10   outline-none bg-transparent"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Title"
              />
            </div>
            <div>
              <textarea
                type="text"
                className="placeholder:text-xl text-xl   w-full  outline-none bg-transparent  resize-none "
                name="note"
                value={values.note}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Take a note..."
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    if (values.title !== "" && values.note !== "") {
                      handleSubmit();
                    }
                  }
                }}
              />
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}



export default AddNotes;
