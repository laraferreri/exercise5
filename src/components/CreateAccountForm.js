import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

function CreateAccountForm() {
  return (
    <div>
      <form className="SignupForm" onSubmit={(e) => CreateAccountFunction(e)}>
        <label htmlFor="createEmail">Emao;</label>"
        <input type="email" name="createEmail" />
        <label htmlFor="createPassword">Password</label>"
        <input type="password" name="createPassword" />
        <button> Submit</button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
