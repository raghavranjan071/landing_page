import React from 'react'
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";



const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechWorld</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque assumenda mollitia quia, magnam, repudiandae, ducimus dolor ex aut molestiae excepturi consequatur sapiente ab harum tempore dolore voluptas unde rem eveniet dolores corporis quisquam voluptatem temporibus corrupti. At consequatur harum ipsum repellat molestiae? Doloremque iure libero saepe voluptatibus nobis, rem, sunt autem laudantium vitae amet ex consequuntur? Delectus ipsa, facilis quos totam assumenda eveniet alias eius. Obcaecati, ad exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde corporis perspiciatis nobis quod fugit labore tempora dicta expedita qui id eaque, explicabo exercitationem asperiores commodi similique. </p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>

    </>
  )
}

export default Home;
