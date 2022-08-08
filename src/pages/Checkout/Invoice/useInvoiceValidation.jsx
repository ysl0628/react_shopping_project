import useValidation from "../../../hooks/useValidation";

const emailRule =
  /^\w+((-\w+)|(\.\w+)|(\+\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
const taxNumberRule = /^\d{8}$/;

const isEmailFormat = (value) => emailRule.test(value);
const isTaxNumFormat = (value) => (value ? taxNumberRule.test(value) : true);

export default function useInvoiceValidation() {
  const {
    value: email,
    isValid: emailIsValid,
    isError: emailIsError,
    onChangeValue: onChangeEmail,
    onBlurValue: onBlurEmail,
  } = useValidation(isEmailFormat);
  const {
    value: taxNumber,
    isValid: taxNumberIsValid,
    isError: taxNumberIsError,
    onChangeValue: onChangeTaxNumber,
    onBlurValue: onBlurTaxNumber,
  } = useValidation(isTaxNumFormat);

  const getIsAllValid = () => taxNumberIsValid && emailIsValid;

  return {
    email,
    emailIsValid,
    emailIsError,
    onChangeEmail,
    onBlurEmail,
    taxNumber,
    taxNumberIsValid,
    taxNumberIsError,
    onChangeTaxNumber,
    onBlurTaxNumber,
    getIsAllValid,
  };
}
