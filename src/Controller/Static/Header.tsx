import {IoIosLogOut} from "react-icons/io"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { logOut } from "../../global/globalState"


const Header = () => {
  
  const dispatch = useDispatch()

  return (
    <div className="
    w-full
    h-[70px]
    flex
    justify-center
    items-center
    bg-[#FFCEAE]
    ">
      <div className="
      w-[90%]
      h-[100%]
      flex
      justify-between
      items-center
      ">
        {/* left */}

        <div>LOgo</div>

        {/* left */}

        {/* Middle */}

        <div>
          <div>Home</div>
        </div>

        {/* Middle */}

        {/* right */}

        <div onClick={()=>{
          dispatch(logOut())
        }}>
          <IoIosLogOut className="
          text-[30px]
          "/>
        </div>

        {/* right */}
      </div>
    </div>
  )
}

export default Header