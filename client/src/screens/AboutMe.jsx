import Me from "../assets/Me.jpg";
import "../styles/AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <img src={Me} alt="headshot" className="photo" />
      <div className='about-me-info'>
      <h3 className="about-me-text">
          I am a charismatic person, always in the pursuit of knowledge. I spent 5
          years working as an electrical engineer and was hungry for something
          more challenging. Life has taken me in many interesting turns, but I am
          never afraid of the unknown. Now I'm fully dedicating myself to pursuing
          a software engineering role.
        <br />
        <br/>
        Here are the tecnologies I'm familiar with:
      </h3>
      <div className='about-me-logos-container'>      
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/919/919851.svg?token=exp=1612967966~hmac=c74630ed68f79e54828f53ac8e128474"
        alt="react"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/919/919826.svg?token=exp=1612968104~hmac=dabbccd7813fbde6f9bf58de6ce6f5fd"
        alt="css"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/919/919827.svg?token=exp=1612968147~hmac=77cbd185e937c0d3f2e5a1f8350134a4"
        alt="html"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/919/919828.svg?token=exp=1612968179~hmac=02828d0d8bc90b498ba8d4ff00388760"
        alt="javascript"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/919/919854.svg?token=exp=1612968254~hmac=f715950c9c777db7f9fc2a1d18d11518"
        alt="java"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/919/919825.svg?token=exp=1612968350~hmac=01f14f498dfb14ae287db3a0de714247"
        alt="node"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/919/919836.svg?token=exp=1612968643~hmac=b5137942aec0ba8b2765cacd6b78e29b"
        alt="mysql"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/919/919842.svg?token=exp=1612968678~hmac=c4b0409dc18446908985e5072e413b15"
        alt="ruby"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/919/919841.svg?token=exp=1612968767~hmac=2196f533c82524554e7a92a6dbfdda03"
        alt="c++"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/358/358879.svg?token=exp=1612968838~hmac=7f43cb31a77360a1212e2bc752302b15"
        alt="c#"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/premium-icon/icons/svg/1240/1240970.svg"
        alt="git"
      />
      <img
        className='about-me-logos'
        src="https://www.flaticon.com/svg/vstatic/svg/2111/2111425.svg?token=exp=1612969012~hmac=48c69151d14316e0f6d4ded705dad166"
        alt="github"
      />
      <img
        className='about-me-logos'
        src="https://miro.medium.com/max/640/1*-ivYkzeuYJedPKdEdfnNlg.png"
        alt="mongodb"
        />
        </div>
        </div>
    </div>
  );
}
