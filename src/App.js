import { React, useState, useRef, useEffect } from 'react'
import './App.css';
import Card from './Card';
import Footer from './Footer'

function App() {
  const [Day, setDay] = useState('00');
  const [Hour, setHour] = useState('00');
  const [Min, setMin] = useState('00');
  const [Seconds, setSeconds] = useState('00');


  // Function to run Countdown Sequence
  let interval = useRef()

  const countdownTime = () => {
    const countdownDate = new Date('February 25, 2021 00:00:00').getTime();
    console.log(countdownDate)

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now ;

      const day = Math.floor(distance / (1000 * 60 * 60 *24));
      const hour = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
      const min = Math.floor((distance % (1000 * 60 * 60 ) / (1000 * 60)));
      const seconds = Math.floor((distance % (1000 * 60 )) / 1000 );

      
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDay(day);
        setHour(hour);
        setMin(min);
        setSeconds(seconds)
      }
    }, 1000);

  };

  useEffect(() => {
    countdownTime() 
    return () => {
      clearInterval(interval.current);
    }
  })



  return (
    <div className="App">
      {/* HEADER */}
      <div className="header" >
        <h3> WE'RE LAUNCHING SOON </h3>
      </div>

      {/* LAUNCH TIME COUNTDOWN */}
      <div className="card-row" > 
        <Card number={Day} title="Days" />
        <Card number={Hour} title="Hours" />
        <Card number={Min} title="Minutes" />
        <Card number={Seconds} title="Seconds" />
      </div>
      

      {/* FOOTER */}
      <div className="footer" >
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
