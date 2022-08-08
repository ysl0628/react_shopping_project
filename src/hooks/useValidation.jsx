import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useValidation(validateFuntion) {
  //   console.log(input);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // validateFuntion 為傳入的驗證方法，返回一個 Boolean
  const isValid = validateFuntion(inputValue);
  // 出錯代表 isValid 為 false，!false === true，input.isTouched 只有在 onBlur 時改為 true
  const isError = !isValid && isTouched; // 當 isValid 為 false，且失焦時 isError 為 true

  const onChangeValue = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    // dispatch(onInput(e.target.value));
  };
  const onBlurValue = () => {
    setIsTouched(true);
    // dispatch(onBlur());
  };
  const onReset = () => {
    setInputValue("");
    setIsTouched(false);
    // dispatch(reset());
  };

  return {
    value: inputValue,
    isValid,
    isError,
    onChangeValue,
    onBlurValue,
    onReset,
  };
}
