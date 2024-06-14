import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './Input.module.scss'
import { InputHTMLAttributes, memo, useEffect, useState } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean
}

export const InputComponent = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    autoFocus,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }
  const [ isFocused, setIsFocused ] = useState(false)

  useEffect(() => {
    if(autoFocus) {
      setIsFocused(true)
    }
  }, [autoFocus])

  return (
    <div className={classNames('', {}, [className])}>
      <input 
        type={type} 
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        autoFocus={isFocused}
        {...otherProps}
      />
    </div>
  )
})

InputComponent.displayName = 'InputComponent';

export const Input = memo(InputComponent);
