// import 'aframe';
// import 'aframe-extras';
import 'babel-polyfill';
import {
  Animation,
  Entity,
  Scene
}                   from 'aframe-react';
import React        from 'react';
import ReactDOM     from 'react-dom';

import Camera       from './components/Camera';
import Cursor       from './components/Cursor';
import Sky          from './components/Sky';
import Platform     from './components/Platform';
import Roof         from './components/Roof';
import Light        from './components/Light';
import Wall         from './components/Wall';
import Loader       from './components/Loader';
import { scale }    from './utils';
import AframeTextComponent from 'aframe-bmfont-text-component';



/*
  TODO: create multiple scenes?
*/
class RootScene extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      solved: false,
      notifActive: true,
      showCreditWarning: false,
      encEmailVisible: false,
      decrypted: false,
      monitorText: [
        'ny-gov-dept-antipiracy-346fg',
        'us-state-antiabuseregulation-5670nnn23',
        'wif4_regula_traffic_friasd2df',
        'bk_nyc_gov_datamanagement5d2d2-',
        'snerizon-antivirus_firewall00w12',
        'slamazon_cookies_add_9r89wjf',
        'alice_laptop_c0nnectsnerizon',
        'alice_smartwallE_sneriz_5673fjslkaf',
        'alice_fridg4_sneriz_77fkladl'
      ],

      monitorTextIndex0: 0,
      monitorTextIndex1: 2,
      monitorTextIndex2: 4,
      monitorTextIndex3: 2,
      monitorTextIndex4: 7,
      monitorTextIndex5: 3,
      monitorTextIndex6: 1,

      elapsedSeconds: 0,
      elapsedMinutes: 0,

      credit: 6873,

      trentSmsOneVisible: false,
      trentSmsTwoVisible: false,

      // unravelling the UI
      browserRevealed: false,
      ipRevealed: false,
      smsRevealed: false,
      monitorRevealed: false

    };
  }

  onSceneReady () {
    this.setState({
      sceneReady: true
    });
  }

  updateMonitorText () {
    const self = this;
    const getRandomIndex = () => Math.floor(Math.random() * (self.state.monitorText.length - 1));
    window.setInterval(() => {
      self.setState({
        monitorTextIndex0: getRandomIndex(),
        monitorTextIndex1: getRandomIndex(),
        monitorTextIndex2: getRandomIndex(),
        monitorTextIndex3: getRandomIndex(),
        monitorTextIndex4: getRandomIndex(),
        monitorTextIndex5: getRandomIndex(),
        monitorTextIndex6: getRandomIndex(),
      });
    }, 1000);

  }

  initClock() {
    const self = this;
    this.clockRef = window.setInterval(() => {
      this.setState({
        elapsedSeconds: (this.state.elapsedSeconds + 1)
      });
      if (this.state.elapsedSeconds > 59) {
        this.setState({
          elapsedMinutes: this.state.elapsedMinutes + 1,
          elapsedSeconds: 0
        });
      }
      if (this.state.elapsedMinutes === 3) {
        window.clearInterval(self.clockRef);
        // alert('times up');
        return;
      }
    }, 1000);

  }

  revealUI () {
    this.initIP(); // kick off IP
    this.initBrowser(); // kick off Browser
    //this.initMonitor(); // kick off monitor
    this.initSMS(); // kick off SMS
  }

  initIP () {
    this.setState({
      ipRevealed: true
    });
    this.clockRef = null;
    this.initClock();
  }

  initBrowser () {
    this.setState({
      browserRevealed: true
    })
  }

  initMonitor () {
    this.setState({
      monitorRevealed: true
    });
    this.updateMonitorText();
  }

  initSMS () {
    this.setState({
      smsRevealed: true,
      trentSmsOneVisible: true
    });
  }

  componentDidMount () {
    this.scene = document.querySelector('a-scene');
    const trentEmailTitle = document.querySelector('#ui-email-trent');
    //const encToggle = document.querySelector('#enc-toggle');
    const self = this;
    if (this.scene.hasLoaded) {
      this.onSceneReady()
    } else {
      this.scene.addEventListener('loaded', this.onSceneReady.bind(this))
    }

    const cursor = document.querySelector('#cursor');

    const decryptBtn = document.querySelector('#decrypt-button')
    const denyBtn = document.querySelector('#deny-button');
    const agreeBtn = document.querySelector('#agree-button');
    const notif = document.querySelector('#notif-wrapper');

    notif.addEventListener('click', () =>  {
      self.setState({
        notifActive: false
      });
      self.revealUI();
    });

    denyBtn.addEventListener('click', () =>  {
      self.setState({
        showCreditWarning: false
      });
    });

    agreeBtn.addEventListener('click', () =>  {
      self.setState({
        credit: this.state.credit + 1000,
        showCreditWarning: false
      });
    });

    decryptBtn.addEventListener('click', () => {
      if(self.state.credit < 7000) {

        self.setState({
          showCreditWarning: true
        });
      } else {
        self.setState({
          decrypted: true
        })
      }

    });

    // KICK OFF ALL UI
    // window.setTimeout(() => {
    //
    //   self.revealUI();
    // }, 5000);

    // trentEmailTitle.addEventListener('mouseenter', ()=> {
    //   trentEmailTitle.setAttribute('position', '-1.85 6.54 1.63');
    // });
    //
    // trentEmailTitle.addEventListener('mouseleave', ()=> {
    //   trentEmailTitle.setAttribute('position', '-1.6 6.54 1.63');
    // });
    trentEmailTitle.addEventListener('click', ()=> {
      self.setState({
        encEmailVisible: true
      });
      console.log('open the enc email');
    });
  }
  render () {
    return (
      <div id="wrapper">

        <Loader visible={!this.state.sceneReady} />

      <Scene
          stats
          physics={{debug:false}}
          keyboard-shortcuts=""
          canvas=""
          vr-mode-ui={{enabled: true }}>

          <a-assets>
            <img id="starry-night-sky-texture"
              src="../assets/starry-night.jpg" />

            <img id="west-wall-texture-0"
              src="../assets/west-wall-textures/0.png" />
            <img id="west-wall-texture-1"
              src="../assets/west-wall-textures/1.png" />
            <img id="west-wall-texture-2"
              src="../assets/west-wall-textures/2.png" />
            <img id="west-wall-texture-3"
              src="../assets/west-wall-textures/3.png" />
            <img id="west-wall-texture-4"
              src="../assets/west-wall-textures/4.png" />
            <img id="west-wall-texture-5"
              src="../assets/west-wall-textures/5.png" />
            <img id="west-wall-texture-6"
              src="../assets/west-wall-textures/6.png" />
            <img id="west-wall-texture-7"
              src="../assets/west-wall-textures/7.png" />
            <img id="west-wall-texture-8"
              src="../assets/west-wall-textures/8.png" />
            <img id="west-wall-texture-9"
              src="../assets/west-wall-textures/9.png" />


            <img id="east-wall-texture-0"
              src="../assets/east-wall-textures/0.png" />
            <img id="east-wall-texture-1"
              src="../assets/east-wall-textures/1.png" />
            <img id="east-wall-texture-2"
              src="../assets/east-wall-textures/2.png" />
            <img id="east-wall-texture-3"
              src="../assets/east-wall-textures/3.png" />
            <img id="east-wall-texture-4"
              src="../assets/east-wall-textures/4.png" />
            <img id="east-wall-texture-5"
              src="../assets/east-wall-textures/5.png" />
            <img id="east-wall-texture-6"
              src="../assets/east-wall-textures/6.png" />

            <img id="north-wall-texture-0"
              src="../assets/north-wall-textures/0.png" />
            <img id="north-wall-texture-1"
              src="../assets/north-wall-textures/1.png" />
            <img id="north-wall-texture-2"
              src="../assets/north-wall-textures/2.png" />
            <img id="north-wall-texture-3"
              src="../assets/north-wall-textures/3.png" />

            <img id="south-wall-texture-0"
              src="../assets/south-wall-textures/0.png" />
            <img id="south-wall-texture-1"
              src="../assets/south-wall-textures/1.png" />
            <img id="south-wall-texture-2"
              src="../assets/south-wall-textures/2.png" />
            <img id="south-wall-texture-3"
              src="../assets/south-wall-textures/3.png" />
            <img id="south-wall-texture-4"
              src="../assets/south-wall-textures/4.png" />
            <img id="south-wall-texture-5"
              src="../assets/south-wall-textures/5.png" />

            <img id="browser-texture"
              src="../assets/ui/browser.png" />
            <img id="email-client-texture"
              src="../assets/ui/email-client.png" />
            <img id="email-trent-texture"
              src="../assets/ui/email-trent.png" />
            <img id="email-trent-open-enc-texture"
              src="../assets/ui/trent-email-open-enc.png" />
            <img id="email-trent-open-dec-texture"
              src="../assets/ui/trent-email-open-dec.png" />


              <img id="decrypt-btn"
                src="../assets/ui/decrypt-btn.png" />
              <img id="credit-warning-texture"
                src="../assets/ui/browsing-credit-warning.png" />
              <img id="privacy-agree"
                src="../assets/ui/agree-btn.png" />
              <img id="privacy-deny"
                src="../assets/ui/deny-btn.png" />


              <img id="passport-top"
                src="../assets/ui/passport-top.png" />
              <img id="passport-bottom"
                src="../assets/ui/passport-bottom.png" />

              <img id="sms-w-trent-title"
                src="../assets/ui/sms-w-trent-title.png" />




          </a-assets>

          <Entity
            id="outside"
            position={[0, -0.5, 0]}>

            <Platform
              id="earth"
              src="#starry-night-sky-texture"
              width={200}
              height={5}
              depth={200}
              position={[0, -1.95, 0]} />


          {/*
            <Light
              id="key-light"
              type="point"
              decay={0}
              distance={0}
              intensity={0.8}
              position={[0, 38.5, 73.95]}
              angle={60} />*/}

          </Entity>

          <Entity
            id="room"
            position={[0, 0, 0]}>

            {/* Roof + Ceiling */}
            <Roof
              id="ceiling"
              width={ 31 }
              height={ 1 }
              depth={ 34 }
              position={[0, 22, 0]} />
            <Roof
              id="roof"
              width={ 31 }
              height={ 1 }
              depth={ 34 }
              position={[0, 22.14, 0]} />

            {/* BEGIN activity monitor wrapper */}
            <Entity
              id="activity-monitor-wrapper"
              visible={this.state.monitorRevealed}>

            <Entity
              className="interactive"
              id="activity-monitor mergeto-target"

              geometry={{
                primitive: 'plane',
                width: 3.3,
                height: 1.81,
                mergeTo: '#mergeto-target'
              }}

              rotation={[0, 90, 0]}

              material={{
                color: 'rgb(19, 144, 249)',
                shader: 'flat',
                opacity: 1,
                side: 'double'
              }}

              position={[-1.25, 6.43, -4.25]}/>
            <Entity
              id="line-0-monitor"
              position={[-1.2, 7, -3.06]}
              scale={[0.7, 0.7, 0.7]}
              rotation={[0, 90, 0]}
              bmfont-text={{ color: 'white', text: this.state.monitorText[this.state.monitorTextIndex0]}} />
            <Entity
              id="line-1-monitor"
              position={[-1.2, 6.8, -3.06]}
              scale={[0.7, 0.7, 0.7]}
              rotation={[0, 90, 0]}
              bmfont-text={{ color: 'white', text: this.state.monitorText[this.state.monitorTextIndex1]}} />
            <Entity
              id="line-2-monitor"
              position={[-1.2, 6.6, -3.06]}
              scale={[0.7, 0.7, 0.7]}
              rotation={[0, 90, 0]}
              bmfont-text={{ color: 'white', text: this.state.monitorText[this.state.monitorTextIndex2]}} />
            <Entity
              id="line-3-monitor"
              position={[-1.2, 6.4, -3.06]}
              scale={[0.7, 0.7, 0.7]}
              rotation={[0, 90, 0]}
              bmfont-text={{ color: 'white', text: this.state.monitorText[this.state.monitorTextIndex3]}} />
            <Entity
              id="line-4-monitor"
              position={[-1.2, 6.2, -3.06]}
              scale={[0.7, 0.7, 0.7]}
              rotation={[0, 90, 0]}
              bmfont-text={{ color: 'white', text: this.state.monitorText[this.state.monitorTextIndex4]}} />
            <Entity
              id="line-5-monitor"
              position={[-1.20, 6, -3.06]}
              scale={[0.7, 0.7, 0.7]}
              rotation={[0, 90, 0]}
              bmfont-text={{ color: 'white', text: this.state.monitorText[this.state.monitorTextIndex5]}} />
            <Entity
              id="line-6-monitor"
              position={[-1.2, 5.8, -3.06]}
              scale={[0.7, 0.7, 0.7]}
              rotation={[0, 90, 0]}
              bmfont-text={{ color: 'white', text: this.state.monitorText[this.state.monitorTextIndex6]}} />
          </Entity>
          {/* END monitor wrappr */}



          {/* notification */}
          <Entity
            id="notif-wrapper"
            visible={this.state.notifActive}
            position={[-2.64, 7.8, 0]}>

          <Entity
            className="interactive"
            id="notif-bg"

            geometry={{
              primitive: 'plane',
              width: 3.46,
              height: 0.7,
              mergeTo: '#mergeto-target'
            }}

            rotation={[0, 90, 0]}

            material={{
              color: 'rgb(19, 144, 249)',
              shader: 'flat',
              opacity: 1
            }}

            position={[-0, 0, 0]}/>

            <Entity
              id="notif-text"
              position={[0, 0, 1.14]}
              scale={[0.7, 0.7, 0.7]}
              rotation={[0, 90, 0]}
              bmfont-text={{ color: 'white', text: 'You have 1 new message. Click to read.'}} />
        </Entity>

          <Entity
            id="floor"
            material={{
              shader: 'standard',
              color: '#fff'
            }}
            rotation={[-90, 0, -90]}
            position={[0, 0.06, 0]}
            geometry={{
              primitive: 'plane',
              width: 34,
              height: 31,
              mergeTo: '#mergeto-target'
            }} />

          {/* BEGIN SMS WRAPPER */}
            <Entity
              id="sms-wrapper"
              visible={this.state.smsRevealed}>

              <Entity
                className="interactive"
                id="sms-screen"
                geometry={{
                  primitive: 'plane',
                  width: 4.81,
                  height: 3.58,
                  mergeTo: '#mergeto-target'
                }}

                rotation={[0, 90, 0]}

                material={{
                  color: 'rgb(19, 144, 249)',
                  shader: 'flat',
                  opacity: 1
                }}

                position={[-0.44, 6.23, -7.43]}>

                <Entity
                  id="sms-header"
                  position={[0.07, 1.35, 0.04]}
                  material={{
                    shader: 'flat',
                    src: '#sms-w-trent-title'
                  }}

                  geometry={{
                    primitive: 'plane',
                    width: 4.6,
                    height: 0.57,
                    mergeTo: '#mergeto-target'
                  }} />



                <Entity
                  id="sms-trent-1"
                  visible={this.state.trentSmsOneVisible}
                  position={[-1.98, 0.84, 0.04]}
                  scale={[0.8, 0.8, 0.8]}
                  rotation={[0, 0, 0]}
                  bmfont-text={{ color: 'white', text: '>> [Trent]:  Just sent you an email. '}} />

                <Entity
                  id="sms-trent-2"
                  visible={this.state.trentSmsTwoVisible}
                  position={[-1.98, 2.2, 0.04]}
                  scale={[1, 1, 1]}
                  rotation={[0, 0, 0]}
                  bmfont-text={{ color: 'white', text: '>> [Trent]:  ??? '}} />


              </Entity>
            </Entity>
            {/* END SMS WRAPPER */}

            {/* BEGIN IP WRAPPER */}
            <Entity
              id="ip-wrapper"
              visible={this.state.ipRevealed}
              position={[0, -1.29, 0]}>

            <Entity
              className="interactive"
              id="ip"

              geometry={{
                primitive: 'plane',
                width: 3.46,
                height: 1.29,
                mergeTo: '#mergeto-target'
              }}

              rotation={[0, 90, 0]}

              material={{

                shader: 'flat',
                opacity: 1,
                src: '#passport-top'
              }}

              position={[-2.60, 8.10, 8.4]}/>



            <Entity
              id="ip-stats"
              geometry={{
                primitive: 'plane',
                width: 3.46,
                height: 0.85,
                mergeTo: '#mergeto-target'
              }}

              rotation={[0, 90, 0]}

              material={{
                shader: 'flat',
                opacity: 1,
                src: '#passport-bottom'
              }}

              position={[-2.6, 6.98, 8.4]} />


            <Entity
              id="clock-display"
              position={[-2.56, 6.77, 9.96]}
              scale={[2, 2, 2]}
              rotation={[0, 90, 0]}
              bmfont-text={{ color: 'white', text: `${this.state.elapsedMinutes} : ${this.state.elapsedSeconds}`}} />


            <Entity
              id="credit-display"
              position={[-2.56, 6.77, 7.62]}
              scale={[2, 2, 2]}
              rotation={[0, 90, 0]}
              bmfont-text={{ color: 'white', text: this.state.credit}} />

            </Entity>
            {/* END IP WRAPPER */}

            {/* BEGIN BROWSER WRAPPER */}
            <Entity
              id="browser-wrapper"
              visible={this.state.browserRevealed}
              position={[0, -0.5, 0]}>

            <Entity
              className="interactive"
              id="ui-web-browser"

              geometry={{
                primitive: 'plane',
                width: 8,
                height: 3.47,
                mergeTo: '#mergeto-target'
              }}

              rotation={[0, 90, 0]}

              material={{
                color: '#fff',
                shader: 'flat',
                opacity: 1,
                src: '#browser-texture'
              }}

              position={[-1.95, 6, 1.65]}/>

            <Entity
              id="warning-wrapper"
              visible={this.state.showCreditWarning}>

              <Entity
                id="warning-credit"

                geometry={{
                  primitive: 'plane',
                  width: 6.3,
                  height: 2.8,
                  mergeTo: '#mergeto-target'
                }}

                rotation={[0, 90, 0]}

                material={{
                  src: '#credit-warning-texture',
                  shader: 'flat',
                  opacity: 1,
                }}

                position={[0, 4.87, 0]}/>



                  <Entity
                    className="interactive"
                    id="agree-button"
                    geometry={{
                      primitive: 'plane',
                      width: 2,
                      height: 0.4,
                      mergeTo: '#mergeto-target'
                    }}

                    rotation={[0, 90, 0]}

                    material={{
                      shader: 'flat',
                      opacity: 1,
                      src:"#privacy-agree"
                    }}

                    position={[0.28, 3.48, -0.88]}/>
                    <Entity
                      className="interactive"
                      id="deny-button"
                      geometry={{
                        primitive: 'plane',
                        width: 2,
                        height: 0.4,
                        mergeTo: '#mergeto-target'
                      }}

                      rotation={[0, 90, 0]}

                      material={{
                        shader: 'flat',
                        opacity: 1,
                        src:"#privacy-deny"
                      }}

                      position={[0.28, 3.43, 1.14]}/>
            </Entity>


            <Entity
              className="interactive"
              id="ui-email-client"

              geometry={{
                primitive: 'plane',
                width: 8,
                height: 2.9,
                mergeTo: '#mergeto-target'
              }}

              rotation={[0, 90, 0]}

              material={{
                color: '#fff',
                shader: 'flat',
                opacity: .9,
                src: '#email-client-texture',
              }}

              position={[-1.9, 5.76, 1.63]}/>

            <Entity
              className="interactive"
              id="ui-email-trent"

              geometry={{
                primitive: 'plane',
                width: 8,
                height: 0.26,
                mergeTo: '#mergeto-target'
              }}

              rotation={[0, 90, 0]}

              material={{
                color: '#fff',
                shader: 'flat',
                opacity: .9,
                src: '#email-trent-texture'
              }}

              position={[-1.85, 6.54, 1.63]}/>

          <Entity
              className="interactive"
              id="ui-email-trent-open-enc"

              geometry={{
                primitive: 'plane',
                width: 4,
                height: 6.34,
                mergeTo: '#mergeto-target'
              }}

              rotation={[0, 90, 0]}
              visible={this.state.encEmailVisible && !this.state.decrypted}
              material={{
                color: '#fff',
                shader: 'flat',
                opacity: .9,
                src: '#email-trent-open-enc-texture'
              }}

              position={[-1.39, 4.57, 2]}/>

              <Entity
                  className="interactive"
                  id="ui-email-trent-open-enc"

                  geometry={{
                    primitive: 'plane',
                    width: 4,
                    height: 6.34,
                    mergeTo: '#mergeto-target'
                  }}

                  rotation={[0, 90, 0]}
                  visible={this.state.encEmailVisible && !this.state.decrypted}
                  material={{
                    color: '#fff',
                    shader: 'flat',
                    opacity: .9,
                    src: '#email-trent-open-enc-texture'
                  }}

                  position={[-1.39, 4.57, 2]}/>

              <Entity
                className="interactive"
                id="decrypt-button"
                visible={this.state.encEmailVisible && !this.state.decrypted}
                geometry={{
                  primitive: 'plane',
                  width: 2,
                  height: 0.4,
                  mergeTo: '#mergeto-target'
                }}

                rotation={[0, 90, 0]}

                material={{
                  shader: 'flat',
                  opacity: 1,
                  src:"#decrypt-btn"
                }}

                position={[-1.35, 5.1, 2.09]}/>


            <Entity
              className="interactive"
              id="ui-email-trent-open-dec"

              geometry={{
                primitive: 'plane',
                width: 6.3,
                height: 2.6,
                mergeTo: '#mergeto-target'
              }}

              rotation={[0, 90, 0]}
              visible={this.state.decrypted}
              material={{
                color: '#fff',
                shader: 'flat',
                opacity: .9,
                src: '#email-trent-open-dec-texture'
              }}

              position={[-1.39, 5.88, 2]}/>

          </Entity>
          {/* END BROWSER WRAPPER */}


            {/* South Wall: in & out */}

            <Wall
              id="wall-south-inner"
              width={ 22.6 }
              height={ 22.84 }
              depth={ 0.1 }
              position={[-4.2, 11.21, 17]} />
            <Wall
              id="wall-south-outer"
              width={ 22.6 }
              height={ 22.84 }
              depth={ 0.1 }
              position={[-4.2, 11.21, 17.04]} />
            <Wall
              id="wall-south-top-door-inner"
              width={ 10.10 }
              height={ 5.32 }
              depth={ 0.1 }
              position={[10.54, 19.21, 17]} />
            <Wall
              id="wall-south-top-door-outer"
              width={ 10.10 }
              height={ 5.32 }
              depth={ 0.1 }
              position={[10.54, 19.21, 17.04]} />




            {/* East Wall */}

            <Wall
              id="wall-east-inner"
              width={ 34 }
              height={ 22.66 }
              depth={ 0.1 }
              rotation={[0, 90, 0]}
              position={[15.5, 11.35, 0]} />
            <Wall
              id="wall-east-outer"
              width={ 34 }
              height={ 22.66 }
              depth={ 0.1 }
              rotation={[0, 90, 0]}
              position={[15.54, 11.35, 0]} />



            {/* North Wall */}

            <Wall
              id="wall-south-inner"
              width={ 31 }
              height={ 22.66 }
              depth={ 0.1 }
              position={[0, 11.35, -17]} />
            <Wall
              id="wall-south-outer"
              width={ 31 }
              height={ 22.66 }
              depth={ 0.1 }
              position={[0, 11.35, -17.02]} />


            {/* West Wall */}

            <Wall
              id="wall-west-inner"
              width={ 34 }
              height={ 22.66 }
              depth={ 0.1 }
              rotation={[0, 90, 0]}
              position={[-15.40, 11.35, 0]} />
            <Wall
              id="wall-west-outer"
              width={ 34 }
              height={ 22.66 }
              depth={ 0.1 }
              rotation={[0, 90, 0]}
              position={[-15.45, 11.35, 0]} />


            {/* BEGIN Hockneyan Texture Maps */}
            {/* BEGIN West Wall Textures */}

            <Entity id="west-wall-texture-group">

              <Entity
                id="west-wall-plane-0"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#west-wall-texture-0'
                }}
                rotation={[0, 90, 0]}
                position={[-15.34, 11.39, 0]}
                geometry={{
                  primitive: 'plane',
                  width: 34,
                  height: 22.66,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="west-wall-plane-1"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#west-wall-texture-1'
                }}
                scale={[0.93, 0.83, 1]}
                rotation={[0, 90, 0]}
                position={[-11.50, 8.59, 0.43]}
                geometry={{
                  primitive: 'plane',
                  width: 34,
                  height: 22.66,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="west-wall-plane-2"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#west-wall-texture-2'
                }}
                scale={[0.43, 0.46, 1]}
                rotation={[0, 90, 0]}
                position={[-9.5, 9.53, 0.61]}
                geometry={{
                  primitive: 'plane',
                  width: 34,
                  height: 22.66,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="west-wall-plane-3"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#west-wall-texture-3'
                }}
                scale={[1, 0.2, 1]}
                rotation={[-90, 90, 0]}
                position={[-9.45, 0.27, 0]}
                geometry={{
                  primitive: 'plane',
                  width: 34,
                  height: 22.66,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="west-wall-plane-4"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#west-wall-texture-4'
                }}
                scale={[1, 1, 1]}
                rotation={[90, 90, 0]}
                position={[-4.14, 20, 0.0]}
                geometry={{
                  primitive: 'plane',
                  width: 34,
                  height: 22.66,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="west-wall-plane-5"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#west-wall-texture-5'
                }}
                scale={[1, 1, 1]}
                rotation={[90, 90, 0]}
                position={[4.14, 20.88, 0.0]}
                geometry={{
                  primitive: 'plane',
                  width: 34,
                  height: 22.66,
                  mergeTo: '#mergeto-target'
                }} />

                <Entity
                  id="west-wall-plane-6"
                  material={{
                    shader: 'standard',
                    color: '#fff',
                    src: '#west-wall-texture-6'
                  }}
                  scale={[0.43, 0.46, 1]}
                  rotation={[0, 90, 0]}
                  position={[-9.2, 8, 0.61]}
                  geometry={{
                    primitive: 'plane',
                    width: 34,
                    height: 22.66,
                    mergeTo: '#mergeto-target'
                  }} />

                <Entity
                  id="west-wall-plane-7"
                  material={{
                    shader: 'standard',
                    color: '#fff',
                    src: '#west-wall-texture-7'
                  }}
                  scale={[0.43, 0.46, 1]}
                  rotation={[0, 90, 0]}
                  position={[-9.66, 9.33, 0.61]}
                  geometry={{
                    primitive: 'plane',
                    width: 34,
                    height: 22.66,
                    mergeTo: '#mergeto-target'
                  }} />

                <Entity
                  id="west-wall-plane-8"
                  material={{
                    shader: 'standard',
                    color: '#fff',
                    src: '#west-wall-texture-8'
                  }}
                  scale={[1, 1, 1]}
                  rotation={[0, 90, 0]}
                  position={[-11.37, 12.63, 10.33]}
                  geometry={{
                    primitive: 'plane',
                    width: 11.64,
                    height: 14.58,
                    mergeTo: '#mergeto-target'
                  }} />

                <Entity
                  id="west-wall-plane-9"
                  material={{
                    shader: 'standard',
                    color: '#fff',
                    src: '#west-wall-texture-9'
                  }}
                  scale={[1, 1, 1]}
                  rotation={[0, 90, 0]}
                  position={[-11.46, 7.23, 12.29]}
                  geometry={{
                    primitive: 'plane',
                    width: 7.16,
                    height: 11.56,
                    mergeTo: '#mergeto-target'
                  }} />



            </Entity>


            {/* BEGIN East Wall Textures */}

            <Entity id="east-wall-texture-group">

              <Entity
                id="east-wall-plane-0"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#east-wall-texture-0'
                }}
                rotation={[0, -90, 0]}
                position={[15.34, 14.44, 0]}
                geometry={{
                  primitive: 'plane',
                  width: 24.14,
                  height: 14.22,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="east-wall-plane-1"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#east-wall-texture-1'
                }}
                rotation={[0, -90, 0]}
                position={[15.0, 14, 0]}
                geometry={{
                  primitive: 'plane',
                  width: 22.48,
                  height: 13.54,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="east-wall-plane-2"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#east-wall-texture-2'
                }}
                rotation={[0, -90, 0]}
                position={[14.5, 10, 0]}
                geometry={{
                  primitive: 'plane',
                  width: 25.02,
                  height: 14.98,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="east-wall-plane-3"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#east-wall-texture-3'
                }}
                rotation={[0, -90, 0]}
                position={[14.49, 5.42, 0.05]}
                geometry={{
                  primitive: 'plane',
                  width: 22.98,
                  height: 9.52,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="east-wall-plane-4"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#east-wall-texture-4'
                }}
                rotation={[-85, -90, 0]}
                position={[9.65, 0.77, 0.05]}
                geometry={{
                  primitive: 'plane',
                  width: 22.98,
                  height: 9.52,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="east-wall-plane-5"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#east-wall-texture-5'
                }}
                rotation={[-90, -90, 0]}
                position={[6.68, 0.23, 0.66]}
                geometry={{
                  primitive: 'plane',
                  width: 21.64,
                  height: 11.28,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="east-wall-plane-6"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#east-wall-texture-6'
                }}
                rotation={[-90, -90, 0]}
                position={[-0.13, 0.2, 1.16]}
                geometry={{
                  primitive: 'plane',
                  width: 22.98,
                  height: 9.52,
                  mergeTo: '#mergeto-target'
                }} />

            </Entity>
            {/* END East Wall Textures */}


            {/* BEGIN North Wall Textures */}

            <Entity id="north-wall-texture-group">

              <Entity
                id="north-wall-plane-0"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#north-wall-texture-0'
                }}
                rotation={[0, 0, 0]}
                position={[0.57, 11.41, -16.58]}
                geometry={{
                  primitive: 'plane',
                  width: 27.56,
                  height: 16.14,
                  mergeTo: '#mergeto-target'
                }} />


                <Entity
                  id="north-wall-plane-1"
                  material={{
                    shader: 'standard',
                    color: '#fff',
                    src: '#north-wall-texture-1'
                  }}
                  rotation={[0, 0, 0]}
                  position={[-3.49, 7.23, -16.7]}
                  geometry={{
                    primitive: 'plane',
                    width: 21.18,
                    height: 13.30,
                    mergeTo: '#mergeto-target'
                  }} />

                <Entity
                  id="north-wall-plane-2"
                  material={{
                    shader: 'standard',
                    color: '#fff',
                    src: '#north-wall-texture-2'
                  }}
                  rotation={[0, 0, 0]}
                  position={[-8.83, 2.65, -16.75]}
                  geometry={{
                    primitive: 'plane',
                    width: 13.14,
                    height: 6.24,
                    mergeTo: '#mergeto-target'
                  }} />

                <Entity
                  id="north-wall-plane-3"
                  material={{
                    shader: 'standard',
                    color: '#fff',
                    src: '#north-wall-texture-3'
                  }}
                  rotation={[-90, 0, 0]}
                  position={[5.31, 0.4, 2.75]}
                  geometry={{
                    primitive: 'plane',
                    width: 13.26,
                    height: 14.90,
                    mergeTo: '#mergeto-target'
                  }} />


            </Entity>
            {/* END North Wall Textures */}


            {/* BEGIN South Wall Textures */}

            <Entity id="south-wall-texture-group">

              <Entity
                id="south-wall-plane-2"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#south-wall-texture-2'
                }}
                rotation={[0, -180, 0]}
                position={[-7.63, 12.48, 15.05]}
                geometry={{
                  primitive: 'plane',
                  width: 15.4,
                  height: 11.86,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="south-wall-plane-3"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#south-wall-texture-3'
                }}
                rotation={[0, -180, 0]}
                position={[-5.43, 15.61, 16.78]}
                geometry={{
                  primitive: 'plane',
                  width: 15.4,
                  height: 11.86,
                  mergeTo: '#mergeto-target'
                }} />

              <Entity
                id="south-wall-plane-1"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#south-wall-texture-1'
                }}
                rotation={[0, -180, 0]}
                position={[-6.02, 4.94, 14.92]}
                geometry={{
                  primitive: 'plane',
                  width: 12.16,
                  height: 8.98,
                  mergeTo: '#mergeto-target'
                }} />

              {/*
              <Entity
                id="south-wall-plane-4"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#south-wall-texture-4'
                }}
                rotation={[0, -180, 0]}
                position={[-6.5, 3.02, 12.84]}
                geometry={{
                  primitive: 'plane',
                  width: 12.04,
                  height: 6.7
                }} /> */}

              <Entity
                id="south-wall-plane-5"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#south-wall-texture-5'
                }}
                rotation={[0, -180, 0]}
                position={[-0.21, 6.46, 14.27]}
                geometry={{
                  primitive: 'plane',
                  width: 14.20,
                  height: 11.68,
                  mergeTo: '#mergeto-target'
                }} />






            </Entity>
            {/* END South Wall Textures */}
            {/* END Hockneyan Texture Maps */}


          </Entity>
          {/* Room ends */}

          {/* Camera */}
          <Camera
            id="camera-kinetic"
            active={true}
            rotation={[0, -80, 0]}
            position={[-9.45, 5, 12.55]}
            userHeight={5}
            velocity={[0, -83.08, 10]}>

            <Cursor fuse="false" />

          </Camera>


          <Sky src="#starry-night-sky-texture" />

          <Light
            id="light-room-ceiling"
            type="point"
            decay={0}
            distance={0}
            intensity={0.4}
            position={[-7.9, 19.3, 0]}
            angle={60} />

          { /*
          <Light
            id="window-right"
            type="point"
            decay={0}
            distance={0}
            intensity={0.3}
            position={[-18.48, 9.52, -4.59]}
            angle={60} /> */}

          <Light
            id="light-moon"
            type="ambient"
            decay={0}
            distance={0}
            intensity={0.8}
            position={[0, 77.2, 0]}
            angle={60} />

        </Scene>

      </div>

    );
  }
}

ReactDOM.render(
  <RootScene />,
  document.querySelector('.scene-container')
);
