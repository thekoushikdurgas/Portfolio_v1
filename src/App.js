import React from 'react';

function App() {
  const [sidebardisplay, setsidebardisplay] = React.useState('');
  const [navsticky, setnavsticky] = React.useState('');
  const [scrollBtnpointerEvents, setscrollBtnpointerEvents] = React.useState('');
  const [navBaractive, setnavBaractive] = React.useState('');
  const [menubtnopacity, setmenubtnopacity] = React.useState('');
  const [menubtnpointerEvents, setmenubtnpointerEvents] = React.useState('');
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      setnavsticky("sticky");
      setsidebardisplay('block');
    } else {
      setnavsticky("");
      setsidebardisplay('none');
    }
  }
  return (
    <>
      <div className="scroll-button"><a href="#home" style={{ display: sidebardisplay, pointerEvents: scrollBtnpointerEvents }}><i className="fas fa-arrow-up" /></a></div>
      <nav className={navsticky}>
        <div className={`navbar ${navBaractive}`}>
          <div className="logo"><a href="/">Portfolio.</a></div>
          <ul className="menu">
            {['Home', 'About', 'Skills', 'Services', 'Contact'].map((t, i) =>
              <li key={i}><a href={`#${t.toLowerCase()}`} onClick={() => {
                setnavBaractive('');
                setmenubtnopacity("1");
                setmenubtnpointerEvents('auto');
              }}>{t}</a></li>
            )}
            <div className="cancel-btn" onClick={() => {
              setnavBaractive('');
              setmenubtnopacity("1");
              setmenubtnpointerEvents('auto');
              document.querySelector("body").style.overflow = "auto";
              setscrollBtnpointerEvents('auto');
            }}><i className="fas fa-times" /></div>
          </ul>
          <div className="media-icons"><a href="/"><i className="fab fa-facebook-f" /></a><a href="/"><i className="fab fa-twitter" /></a><a href="/"><i className="fab fa-instagram" /></a></div>
        </div>
        <div className="menu-btn" style={{ opacity: menubtnopacity, pointerEvents: menubtnpointerEvents }} onClick={() => {
          setnavBaractive('active');
          setmenubtnopacity("0");
          setmenubtnpointerEvents('none');
          document.querySelector("body").style.overflow = "hidden";
          setscrollBtnpointerEvents('none');
        }}><i className="fas fa-bars" /></div>
      </nav>
      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hello,</div>
            <div className="text-two">I'm Prem Shahi</div>
            <div className="text-three">UI/UX Designer</div>
            <div className="text-four">From Nepal</div>
          </div>
          <div className="button"><button>Hire Me</button></div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="content">
          <div className="title"><span>About Me</span></div>
          <div className="about-details">
            <div className="left"><img src="https://raw.githubusercontent.com/thekoushikdurgas/TKDstroage/main/private/pic.jpg" alt="logo" /></div>
            <div className="right">
              <div className="topic">Designing Is My Passion</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, porro veritatis pariatur, nobis
                voluptatem ipsum repellat nemo quisquam error reprehenderit recusandae odio vel, suscipit. Voluptas mollitia
                accusantium quaerat aspernatur labore dolorum placeat ipsa sint nam perspiciatis eos consectetur veritatis
                debitis, quis aliquam unde sed maiores sit! Hic molestiae optio iste iure earum amet nostrum quaerat facere
                quae veniam maiores harum iusto aperiam vel inventore illo voluptatibus voluptates quo impedit voluptatum
                error vitae, omnis praesentium? Aperiam nulla non, nesciunt fuga rem perferendis alias et, temporibus,
                distinctio culpa unde a laborum libero ducimus. Facilis veniam sit praesentium, voluptatibus sint maxime
                iusto eaque.</p>
              <div className="button"><button>Download CV</button></div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="content">
          <div className="title"><span>My Skills</span></div>
          <div className="skills-details">
            <div className="text">
              <div className="topic">Skills Reflects Our Knowledge</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus natus tenetur tempora? Quasi, rem quas
                omnis. Porro rem aspernatur reiciendis ut praesentium minima ad, quos, officia! Illo libero, et, distinctio
                repellat sed nesciunt est modi quaerat placeat. Quod molestiae, alias?</p>
              <div className="experience">
                <div className="num">10</div>
                <div className="exp">Years Of <br />Experience</div>
              </div>
            </div>
            <div className="boxes">
              <div className="box">
                <div className="topic">HTML</div>
                <div className="per">90%</div>
              </div>
              <div className="box">
                <div className="topic">CSS</div>
                <div className="per">80%</div>
              </div>
              <div className="box">
                <div className="topic">JavScript</div>
                <div className="per">70%</div>
              </div>
              <div className="box">
                <div className="topic">PHP</div>
                <div className="per">60%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <div className="content">
          <div className="title"><span>My Services</span></div>
          <div className="boxes">
            <div className="box">
              <div className="icon"><i className="fas fa-desktop" /></div>
              <div className="topic">Web Devlopment</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
                eligendi?</p>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-paint-brush" /></div>
              <div className="topic">Graphic Design</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
                eligendi?</p>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-chart-line" /></div>
              <div className="topic">Digital Marketing</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
                eligendi?</p>
            </div>
            <div className="box">
              <div className="icon"><i className="fab fa-android" /></div>
              <div className="topic">Icon Design</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
                eligendi?</p>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-camera-retro" /></div>
              <div className="topic">Photography</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
                eligendi?</p>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-tablet-alt" /></div>
              <div className="topic">Apps Devlopment</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
                eligendi?</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="content">
          <div className="title"><span>Contact Me</span></div>
          <div className="text">
            <div className="topic">Have Any Project?</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam neque ipsum corrupti dolores, facere numquam
              voluptate aspernatur sit perferendis qui nisi modi! Recusandae deserunt consequatur voluptatibus alias
              repellendus nobis eligendi.</p>
            <div className="button"><button>Let's Chat</button></div>
          </div>
        </div>
      </section>
      <footer>
        <div className="text"><span>Created By <a href="http://thekoushikdurgas.herokuapp.com/">Koushik Chandra Saha</a>| © 2021 All Rights Reserved</span></div>
      </footer>
    </>
  );
}

export default App;
