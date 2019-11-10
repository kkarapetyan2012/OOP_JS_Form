import ce from "../lib";
import { Form } from "./Form";

export const FormList = () => {
    return ce.createElement(
        "div",
        { },
        [1].map((item, index) => {
          return Form({ index });
        })
    );
}