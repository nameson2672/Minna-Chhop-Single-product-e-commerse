import { useState, useCallback } from "react";
import contactPic from "../pics/contactPic.jpg";
import debounce from "lodash.debounce";
import Loader from "./Loader";
import ClipLoader from "react-spinners/ClipLoader";
import toast, { Toaster } from "react-hot-toast";


function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const setWithDebounce = useCallback(
    debounce((e, set) => {
      set(e.target.value);
    }, 500),
    []
  );

  const sumbit = () => {
    // setLoading(true);
    toast.success("Wow so easy!");

    console.log("sent");
  };
  return (
    <div className="bg-bodyBg my-5">
      <div className="bg-iconBg  rounded-md flex items-center container mx-auto">
        <div>
          <img
            src={contactPic}
            alt=""
            srcset=""
            className="  rounded-tl-md rounded-bl-md max-w-lg  "
          />
        </div>
        <div className="flex flex-col justify-start text-left text-textBlack px-6 w-full">
          <p className="text-xl pb-2">Name</p>
          <input
            type="text"
            name="Name"
            id=""
            placeholder="your name"
            className="w-full px-2 py-3 border-none focus-within:outline-none"
            onChange={(e) => setWithDebounce(e, setName)}
          />
          <p className="text-xl pb-2 pt-5">Email</p>
          <input
            type="email"
            name="emain"
            placeholder="your email"
            className="w-full px-2 py-3 border-none focus-within:outline-none "
            onChange={(e) => setWithDebounce(e, setEmail)}
          />
          <p className="text-xl pb-2 pt-5">Details</p>
          <textarea
            name="textarea"
            cols="30"
            rows="10"
            placeholder="write details here....."
            className="w-full px-2 py-3 border-none focus-within:outline-none "
            onChange={(e) => setWithDebounce(e, setDetails)}
          ></textarea>
          <button
            className="px-16 w-full my-3 text-white h-14  py-1 bg-btnBlue hover:bg-btnBlueHover relative flex justify-center items-center"
            onClick={sumbit}
          >
            <Toaster />{" "}
            {loading ? (
              <div className="spinner animate-spin"></div>
            ) : (
              <p>Sent</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
