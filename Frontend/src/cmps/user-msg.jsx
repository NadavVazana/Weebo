import { useEffect, useState } from 'react'
import { eventBusService } from '../services/event-bus.service.js'


export const UserMsg = () => {

  const [msg, setMsg] = useState(null)
  const [msgClass, setMsgClass] = useState(null)

  useEffect(() => {
    var removeEvent;

    removeEvent = eventBusService.on('show-user-msg', (msg) => {
      setMsg(msg)
      setMsgClass('user-msg')
      setTimeout(() => {
        setMsgClass('user-msg-close')
      }, 4200);
    })


    return () => {
      removeEvent()
    }
  }, [])

  if (!msg) return <span></span>
  return (
    <section className={msgClass}>

      {msg.txt}<img src={require('../assets/img/icons/user-msg-icon.gif')} alt="" />
    </section>
  )

}
