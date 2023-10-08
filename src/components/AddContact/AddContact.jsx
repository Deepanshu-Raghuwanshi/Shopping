import { useState } from "react";
import styles from "./AddContact.module.css";
import { useNavigate } from "react-router-dom";
import routes from "./../../routes/routes.json";
import { useDispatch } from "react-redux";
import { Fname } from "../../reducer/UserSlice";
import { Button, Row, Col } from "react-bootstrap";
const AddContact = () => {
  const [title, setTitle] = useState("");

  const [des, setDes] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addHandler = () => {
    let title1 = title.trim();
    let description = des.trim();
    if (title1.length <= 0) {
      alert("Enter Title");
    } else if (description.length <= 0) {
      alert("Enter Description");
    } else {
      dispatch(Fname({ Name: title, Email: des }));
      setTitle("");
      setDes("");
      navigate("/contact_list");
    }
  };

  return (
    <>
      <div>
        <h1>Add New TODO</h1>
        <br />

        <div className={styles.main}>
          <div>
            <label htmlFor="name" className="me-3">
              {" "}
              Title -{" "}
            </label>

            <input
              placeholder="add your title here"
              value={title}
              type="text"
              id="name"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <br />
          <div>
            <label htmlFor="email" className="me-3">
              Description-{" "}
            </label>
            <input
              placeholder="add your description here"
              value={des}
              type="email"
              id="email"
              onChange={(e) => {
                setDes(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <Button onClick={addHandler}>Add ToDo</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddContact;

// {
//    <div>
//             <label htmlFor="email">Description- </label>
//           </div>
//           <br />
//           <div>
//             <input
//               value={des}
//               type="email"
//               id="email"
//               onChange={(e) => {
//                 setDes(e.target.value);
//               }}
//             />
//           </div>
// }

const addHandler = () => {
  let title1 = title.trim();
  let description = des.trim();
  if (title1.length <= 0) {
    alert("Enter Title");
  } else if (description.length <= 0) {
    alert("Enter Description");
  } else {
    dispatch(Fname({ Name: title, Email: des }));
    setTitle("");
    setDes("");
    navigate("/contact_list");
  }
};
// const [des, setDes] = useState("");
// const dispatch = useDispatch();
