import { ValidationError } from "yup";
import IFormattedYupError from "../types/IFormattedYupError.d";

const formatYupError = (error: ValidationError): Array<IFormattedYupError> =>
  error.inner.map<any>((e: any) => ({
    path: e.path,
    message: e.message
  }));

export default formatYupError;
