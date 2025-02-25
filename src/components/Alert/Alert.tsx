import { X } from "lucide-react";
import "../index.scss";
import { ReactNode } from "react";
import { AlertTypes } from "../../types";

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  descraiption?: string;
  children?: ReactNode;
}

const Alert = ({ type, icon, title, descraiption, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          {icon}
          <h4>{title}</h4>
        </div>
        <span>
          <X className="close" size={20} />
        </span>
      </div>
      {children ? children : <p>{descraiption}</p>}
    </div>
  );
};
export default Alert;
