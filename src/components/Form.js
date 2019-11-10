import ce from "../lib";

export const Form = props => {
  const onButtonClick = e => {
    console.log("Clicked: ", e);
  };

  return ce.createElement("form", { }, [
    ce.createElement("div", { className: "form-group" }, [
        ce.createElement("label", { for: "exampleInputEmail1" }, "Email address"),
        ce.createElement("input", { className: "form-control", type: "email", id: "exampleInputEmail1", placeholder: "Enter email" }, ''),
        ce.createElement("small", { className: "form-text text-muted", id: "emailHelp" }, 'We\'ll never share your email with anyone else.')
    ]),
    ce.createElement("div", { className: "form-group" }, [
        ce.createElement("label", { for: "exampleInputPassword1" }, "Password"),
        ce.createElement("input", { className: "form-control", type: "password", id: "exampleInputPassword1", placeholder: "Password" }, '')
    ]),
    ce.createElement("div", { className: "form-group form-check" }, [
        ce.createElement("input", { className: "form-check-input", type: "checkbox", id: "exampleCheck1" }, ''),
        ce.createElement("label", { className: "form-check-label", for: "exampleInputPassword1" }, "Check me out")
        
    ]),
    ce.createElement("button", { className: "btn btn-primary", type: "submit" }, "Submit")
  ]);
};