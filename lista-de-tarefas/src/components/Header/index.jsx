import { BsRocketFill } from "react-icons/bs";
import style from "../Header/../style/Header.module.css"

const Header = () => {
  return (
    <>
      <h1 className={style.header}><span className={style.span}>Lista de</span> Tarefas <BsRocketFill/></h1>
    </>
  );
};

export default Header;