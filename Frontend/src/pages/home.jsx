import { useNavigate } from "react-router-dom"
import { HomeSwiper } from "../cmps/swiper"



export const Home = () => {
    const navigate = useNavigate()
    return (
        <section className="homepage">
          <div className="section-1">
            <div className="home-top-container">
            <div className="title-container">
            <h1 className="title">Turn your ideas into websites!</h1>
            <h1 className="sub-title">Simple & elegant platform for creating websites! </h1>
              <button onClick={()=>navigate('/templates')}>Start building your own!</button>
            </div>
            </div>
            <img className="home-photo" src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664011385/Untitled-21_q9bd13.png" alt="" />
            <img className="top-wave" src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664034769/svg_6_khubpd.png" alt="" />
            </div>




            <div className='section-2'>
              <img className="white-wave" src='https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664014827/svg_xsgncp.png' alt="" />
            {/* <svg width="100%" height='100%'  id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 116.32142857142858,262.6071428571429 232.64285714285717,275.2142857142857 352,272 C 471.35714285714283,268.7857142857143 593.75,249.75 724,244 C 854.25,238.25 992.3571428571429,245.7857142857143 1113,249 C 1233.642857142857,252.2142857142857 1336.8214285714284,251.10714285714283 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#f5f5f5" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg> */}
            <img className="editor" src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664012707/editor-home-page_shc43i.png" alt="" />

            </div>


            
            <div className="section-4">

              <div className="cards-container">
            <img className="up-wave" src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664016212/svg_2_ua2b41.png" alt="" />

              <div className="line"></div>
                <div className="card-1">
                  <div className="text-container">
                  <h1>Themes</h1>
                  <p>change your website style with one click!</p>
                  </div>
                  <div className="number-1 number"><img className="weebo-icon" src={require('../assets/img/icons/general-site-icon.png')} alt="" /></div>
                  <img src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664016703/themes_lv1wk4.png" alt="" />
                 

                </div>
                <div className="card-2">
                <div className="text-container">
                  <h1>Templates</h1>
                  <p>choose a template to start building your website from! </p>
                  </div>
                  <div className="number-2 number"><img className="weebo-icon" src={require('../assets/img/icons/general-site-icon.png')} alt="" /></div>
                  <img src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664017019/Untitled_kvvicf.png" alt="" />
              </div>
              <div className="card-3">
                <div className="text-container">
                  <h1>Dashboard</h1>
                  <p>Get advanced statistics on each of your published websites </p>
                  </div>
                  <div className="number-2 number"><img className="weebo-icon" src={require('../assets/img/icons/general-site-icon.png')} alt="" /></div>
                  <img className="dashboard-photo" src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664708787/dashboard_efydyw.png" alt="" />
              </div>
              </div>
            </div>

            <div className="section-3">
              <h1>Simple and Fast!</h1>
              <img className="guide-wave" src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664086499/svg_8_l50pss.png" alt="" />
              <img className="guide-purple-wave" src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664086637/svg_9_cnxlqp.png" alt="" />
            <div className='guide-video-container'>
                                        <video className='guide' style={{border:'none'}} autoPlay loop src={require('../assets/img/guide.mp4')}></video>
                                        </div>
            </div>

          

          <div className="section-5">
            <h1>Choose your template!</h1>
            <HomeSwiper/>


            </div>

            <div className="section-6">
            <img className="wave-footer" src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664027317/svg_5_wyxwnk.png" alt="" />
            <div className="footer-text">
            <h1>Liked what you saw? </h1>
            <button onClick={()=>navigate('/templates')}>Let's give it a shot!</button>
            </div>
            <div className="rights">
              <h1 className="logo"><span className="w"> W</span>eebo. |</h1>
              <p className="creators">Made by : Boris Rejkov - Nadav Vazana - Tanya Grudinkin</p>
              <p className="ltd">© 2022 Weebo LTD.</p>
            </div>
            </div>

        </section>
    )
}