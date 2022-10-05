import {FC} from "react";
import concatClasses from "../../utils/concatClasses";
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

export const DawnIcon: FC<IconDefaultProps> = ({className}) => {
  return (
    <svg className={concatClasses(className, style.icon, style.icon_dawn)} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="white"/>
    </svg>
  )
}

export const MenuBoxesIcon: FC<IconDefaultProps> = ({className}) => {
  return (
    <svg className={concatClasses(className, style.icon, style.icon_menu_boxes)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"/>
    </svg>
  )
}