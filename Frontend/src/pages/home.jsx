import { useNavigate } from "react-router-dom"



export const Home = () => {
    const navigate = useNavigate()
    return (
        <section className="homepage">
            <div className="title-container">
            <h1 className="title">Turn your ideas into websites!</h1>
            <h1 className="sub-title">Simple & elegant platform for creating websites! </h1>
              <button onClick={()=>navigate('/templates')}>Start building your own!</button>
            </div>
            <img className="desk" src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1663778603/home-1-748x528_t83afb.png" alt="" />
            <svg className="wave" version="1.1" x="0px" y="0px" viewBox="0 0 1446 970" width="1446" height="970" preserveAspectRatio="none">
                <path d="M-0.000,33.000 C-0.000,33.000 80.000,54.000 113.000,83.000 C146.000,112.000 147.000,152.000 183.000,174.000 C219.000,196.000 288.000,172.000 334.000,193.000 C380.000,214.000 379.000,282.000 427.000,317.000 C475.000,352.000 548.000,336.000 588.000,371.000 C628.000,406.000 614.000,483.000 647.000,513.000 C680.000,543.000 786.000,537.000 841.000,587.000 C896.000,637.000 885.000,739.000 932.000,776.000 C979.000,813.000 1026.000,796.000 1069.000,817.000 C1112.000,838.000 1135.000,865.000 1189.000,893.000 C1243.000,921.000 1433.000,970.000 1433.000,970.000 L1446.000,0.000 L-0.000,33.000 Z"></path>
              </svg>
        </section>
    )
}