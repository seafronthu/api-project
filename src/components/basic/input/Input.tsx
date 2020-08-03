import React, { memo, useState, useRef, useCallback, useEffect, useMemo } from "react";
import { getPrefixCls } from "../libs/utils";
// import { ConfigConsumer } from "../config-provider";
interface PropTypes extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "prefix"> {
  type?: "number" | "text" | "password";
  size?: "large" | "middle" | "small";
  round?: boolean | string;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}
function FrontMimicryInput(props: PropTypes) {
  const {
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    onPressEnter,
    placeholder,
    disabled,
    defaultValue,
    value: inputValue,
    type: inputType,
    size,
    round
  } = props;
  const value = typeof inputValue === void 0 ? defaultValue : inputValue;
  const type = inputType ? inputType : "text";
  // const context = useContext(ConfigContext) 等同于 ConfigConsumer
  const [focused, setFocused] = useState(false);
  let inputEle: { current: HTMLInputElement | null } = useRef(null);
  // const focus = () => {
  //   inputEle.focus();
  // };
  // const blur = () => {
  //   inputEle.blur();
  // };
  const inputCls = useMemo(() => {
    let oneOfSize;
    if (size === "small") {
      oneOfSize = "sm";
    } else if (size === "large") {
      oneOfSize = "lg";
    }
    return getPrefixCls("input", [disabled ? "disabled" : null, oneOfSize, round ? "round" : null]);
  }, [disabled, round, size]);
  useEffect(() => {
    const timer = setTimeout(() => {
      const ele = inputEle.current;
      console.log(ele);
      if (ele && ele.getAttribute("type") === "password" && ele.hasAttribute("value")) {
        ele.removeAttribute("value");
      }
    });
    return () => clearTimeout(timer);
  }, [focused]);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );
  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus]
  );
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur]
  );
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [onPressEnter, onKeyDown]
  );
  // function renderComponent() {
  //   return <input {...props} ref={getInputEle} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown} />;
  // }
  return (
    <input
      className={inputCls}
      disabled={disabled}
      type={type}
      ref={inputEle}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
}
export default memo(FrontMimicryInput);
