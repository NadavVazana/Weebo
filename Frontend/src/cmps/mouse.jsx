import { useEffect, useState } from "react";
import { socketService } from "../services/socket.service";
import { userService } from "../services/user.service";


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
                return <div style={{position:'absolute', top:`${pos.y}px`, left:`${pos.x}px` }}>
                    <img src={require('../assets/img/icons/mouse-cursor.png')} alt="" />
                </div>

            })}

        </section>
    )

}