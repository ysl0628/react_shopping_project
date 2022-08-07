import React from "react";
import useValidation from "../../../hooks/useValidation";

const creditRule = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
const cscRule = /^\d{3}$/;

const isCardFormat = (value) => creditRule.test(value);
const isCscFormat = (value) => cscRule.test(value);
const isNotEmpty = (value) => (value ? value.trim() !== "" : false);

export default function usePaymentValidation() {
  const {
    value: card,
    isValid: cardIsValid,
    isError: cardError,
    onChangeValue: onChangeCard,
    onBlurValue: onBlurCard,
  } = useValidation(isCardFormat);
  const {
    value: lastname,
    isValid: lastnameIsValid,
    isError: lastnameError,
    onChangeValue: onChangeLastname,
    onBlurValue: onBlurLastname,
  } = useValidation(isNotEmpty);
  const {
    value: firstname,
    isValid: firstnameIsValid,
    isError: firstnameError,
    onChangeValue: onChangeFirstname,
    onBlurValue: onBlurFirstname,
  } = useValidation(isNotEmpty);
  const {
    value: csc,
    isValid: cscIsValid,
    isError: cscError,
    onChangeValue: onChangeCsc,
    onBlurValue: onBlurCsc,
  } = useValidation(isCscFormat);

  const getIsAllValid = () =>
    cardIsValid && lastnameIsValid && firstnameIsValid && cscIsValid;

  return {
    card,
    cardError,
    onChangeCard,
    onBlurCard,
    lastname,
    lastnameError,
    onChangeLastname,
    onBlurLastname,
    firstname,
    firstnameError,
    onChangeFirstname,
    onBlurFirstname,
    csc,
    cscError,
    onChangeCsc,
    onBlurCsc,
    getIsAllValid,
  };
}
