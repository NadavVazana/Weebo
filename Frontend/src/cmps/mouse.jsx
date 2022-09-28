import { useEffect, useState } from "react";
import { socketService } from "../services/socket.service";
import { userService } from "../services/user.service";
import Cursor from '../assets/img/icons/mouse-cursor.svg'


export const Mouse = ()=>{
    const [userMice,setUserMice] = useState(null)
    useEffect(()=>{
        socketService.on('show_user_mouse',showUserMouse)

        },[])
    const showUserMouse=async (pos)=>{
        setUserMice(prevState=> ({...prevState,[pos._id]:{x:pos.x,y:pos.y}}))
        
    }
    if(!userMice) return
    // const style = {position:'absolute', top:`${userMice.y}px`, left:`${userMice.x}px` }
    return (
        <section style={{position:'absolute'}} className="mouse">
            {Object.values(userMice).map(pos=>{
                return <div className="cursor" style={{position:'absolute', top:`${pos.y - 80}px`, left:`${pos.x}px`,zIndex:'100000000000000000000000000' }}>
                    {/* <img src={require('../assets/img/icons/mouse-cursor.png')} alt="" /> */}
                    <img style={{width:'30px',height:'30px'}} src={Cursor} alt="" />
                    
                </div>

            })}

        </section>
    )

}