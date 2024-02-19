import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { deleteit } from "./Redux/SliceContent";

import TimeAgo from "timeago-react";

function Notes() {
  let data = useSelector((state) => state.note);
  let dispatch = useDispatch();

  let handleEdit = (index) => {
    Navigate(`/edit/${index}`);
  };
  let handleDelete = (index) => {
    dispatch(deleteit(index));
  };
  let Navigate = useNavigate();
  return (
    <>
      <div className="p-3 md:pl-72 lg:pl-72 ">
        <div className="text-blue-900 text-lg  font-bold  ">
          <i className="fa-regular fa-file-lines pl-4"></i>
          <span className="pl-2">My Notes</span>
        </div>
        <span className=" pl-4 "> recently viewed</span>
      </div>

      <div class=" pl-8 flex sm:ml-64 overflow-x-scroll scrollbar-hide py-5  ">
        {data.map((e, i) => {
          return (
            <>
              <div class="p-4 rounded-lg ">
                <div key={i}>
                  <div class=" w-72 h-60 rounded-xl shadow-xl hover:translate-y-2 transition-all bg-white dark:bg-gray-800">
                    <div className="p-6 text-lg   flex ">
                      <div className="overflow-y-scroll scrollbar-hide  w-44">
                        {e.title}
                      </div>
                      <i
                        className="fa fa-edit pl-20 hover:translate-y-1 transition-all pointer   "
                        onClick={() => {
                          handleEdit(i, e.note);
                        }}
                      ></i>
                      <i
                        className="fa fa-trash hover:translate-y-1 transition-all pl-5  "
                        onClick={() => handleDelete(i)}
                      ></i>
                    </div>

                    <div class="p-4  overflow-auto  h-32 ...">{e.note}</div>
                    <span className="float-end p-2 font-serif ">
                      <TimeAgo datetime={new Date()} locale="en_US.ts" />
                    </span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Notes;
