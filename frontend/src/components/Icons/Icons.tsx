import {FC} from "react";
import concatClasses from "../../utils/concatClasses";
import settingsIcon from "../../icons/9-boxes.svg"
import style from './icons.module.scss'

interface IconDefaultProps {
  className?: string;
}

export const SettingsIcon: FC<IconDefaultProps> = ({className}) => {
  return (
    <svg className={concatClasses(className, style.icon, style.icon_settings)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z"/>
    </svg>
  )
}

export const BackIcon: FC<IconDefaultProps> = ({className}) => {
  return (
    <svg className={concatClasses(className, style.icon, style.icon_back)} viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4V0L0 7L7 14V9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z" />
    </svg>
  )
}