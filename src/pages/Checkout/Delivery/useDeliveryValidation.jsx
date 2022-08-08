import useValidation from "../../../hooks/useValidation";

const phoneRule = /^09\d{8}$/;

const isNotEmpty = (value) => value.trim() !== "";
const isPhoneFormat = (value) => phoneRule.test(value);

export default function useDeliveryValidation() {
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
    value: address,
    isValid: addressIsValid,
    isError: addressError,
    onChangeValue: onChangeAddress,
    onBlurValue: onBlurAddress,
  } = useValidation(isNotEmpty);
  const {
    value: phone,
    isValid: phoneIsValid,
    isError: phoneError,
    onChangeValue: onChangePhone,
    onBlurValue: onBlurPhone,
  } = useValidation(isPhoneFormat);
  const {
    value: city,
    isError: cityError,
    onChangeValue: onChangeCity,
    onBlurValue: onBlurCity,
  } = useValidation(isNotEmpty);
  const {
    value: region,
    isError: regionError,
    onChangeValue: onChangeRegion,
    onBlurValue: onBlurRegion,
  } = useValidation(isNotEmpty);

  const getIsAllValid = () =>
    addressIsValid && lastnameIsValid && firstnameIsValid && phoneIsValid;

  return {
    address,
    addressError,
    onChangeAddress,
    onBlurAddress,
    city,
    onChangeCity,
    onBlurCity,
    cityError,
    region,
    onChangeRegion,
    onBlurRegion,
    regionError,
    lastname,
    lastnameError,
    onChangeLastname,
    onBlurLastname,
    firstname,
    firstnameError,
    onChangeFirstname,
    onBlurFirstname,
    phone,
    phoneError,
    onChangePhone,
    onBlurPhone,
    getIsAllValid,
  };
}
