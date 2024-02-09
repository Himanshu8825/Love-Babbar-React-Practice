import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countrySelection: "",
    city: "",
    address: "",
    state: "",
    zipCode: "",
    comment: false,
    condidates: false,
    offer: false,
    mod: "",
  });
//   console.log(formData);
  const changeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevdata) => {
      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  function submitHandler(e) {
    e.preventDefault();
    console.log("printing all data");
    console.log(formData);
  }
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          id="firstName"
          onChange={changeHandler}
          value={formData.firstName}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          id="lastName"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email.."
          onChange={changeHandler}
          value={formData.email}
        />
        <br />
        <label htmlFor="country">Country:</label>
        <br />
        <select
          name="countrySelection"
          id="country"
          value={formData.name}
          onChange={changeHandler}
        >
          <option value="USA">USA</option>
          <option value="America">America</option>
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
        </select>
        <br />
        <label htmlFor="address">Street Address:</label>
        <br />
        <textarea
          name="address"
          id="address"
          cols="12"
          rows="1.5"
          value={formData.address}
          onChange={changeHandler}
        ></textarea>
        <br />
        <label htmlFor="city">City:</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter City.."
          value={formData.city}
          onChange={changeHandler}
        />{" "}
        <br />
        <label htmlFor="state">State:</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Enter state.."
          value={formData.state}
          onChange={changeHandler}
        />{" "}
        <br />
        <label htmlFor="zip">Zip Code:</label>
        <br />
        <input
          type="number"
          name="zipCode"
          id="zip"
          placeholder="Enter Zip Code.."
          value={formData.zipCode}
          onChange={changeHandler}
        />
        <br />
        <h4>By Email</h4>
        <input
          type="checkbox"
          name="comment"
          id="comments"
          checked={formData.name}
          onChange={changeHandler}
        />
        <label htmlFor="comments">Comments</label>
        <br />
        <input
          type="checkbox"
          name="condidates"
          id="condidates"
          checked={formData.name}
          onChange={changeHandler}
        />
        <label htmlFor="condidates">Condidates</label>
        <br />
        <input
          type="checkbox"
          name="offer"
          id="offer"
          checked={formData.name}
          onChange={changeHandler}
        />
        <label htmlFor="offer">Offers</label>
        <br />
        <h4>Push Notification</h4>
        <input
          type="radio"
          name="mod"
          id="radio"
          value="everything"
          checked={formData.mod == "everything"}
          onChange={changeHandler}
        />
        <label htmlFor="radio">Everything</label>
        <br />
        <input
          type="radio"
          name="mod"
          id="Eradio"
          value="Send as Email"
          checked={formData.mod == "Send as Email"}
          onChange={changeHandler}
        />
        <label htmlFor="Eradio">Send as Email</label>
        <br />
        <input
          type="radio"
          name="mod"
          id="Nradio"
          value="No Push Notification"
          checked={formData.mod == "No Push Notification"}
          onChange={changeHandler}
        />
        <label htmlFor="Nradio">No Push Notification</label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
