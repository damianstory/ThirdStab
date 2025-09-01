'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  deadline: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export default function CountdownTimer({ deadline }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const deadlineTime = new Date(deadline).getTime();
      const difference = deadlineTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        return { days, hours, minutes };
      } else {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0 };
      }
    };

    // Calculate initial time
    setTimeLeft(calculateTimeLeft());

    // Update every minute
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 60000);

    return () => clearInterval(timer);
  }, [deadline]);

  if (isExpired) {
    return (
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-xl text-center">
        <div className="font-bold text-lg">Submissions Closed</div>
        <div className="text-sm opacity-90">The deadline has passed</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#0092ff] to-[#0070cc] text-white p-5 rounded-xl text-center">
      <div className="text-sm uppercase tracking-wide font-medium mb-2 opacity-90">
        Time Remaining
      </div>
      
      <div className="flex justify-center gap-4 mb-2">
        {/* Days */}
        <div className="text-center">
          <div className="text-2xl lg:text-3xl font-bold leading-tight">
            {timeLeft.days}
          </div>
          <div className="text-xs opacity-90">
            {timeLeft.days === 1 ? 'Day' : 'Days'}
          </div>
        </div>
        
        <div className="text-2xl lg:text-3xl font-bold self-start">:</div>
        
        {/* Hours */}
        <div className="text-center">
          <div className="text-2xl lg:text-3xl font-bold leading-tight">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs opacity-90">
            {timeLeft.hours === 1 ? 'Hour' : 'Hours'}
          </div>
        </div>
        
        <div className="text-2xl lg:text-3xl font-bold self-start">:</div>
        
        {/* Minutes */}
        <div className="text-center">
          <div className="text-2xl lg:text-3xl font-bold leading-tight">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs opacity-90">
            {timeLeft.minutes === 1 ? 'Minute' : 'Minutes'}
          </div>
        </div>
      </div>
      
      <div className="text-xs opacity-75">
        Until submission deadline
      </div>
    </div>
  );
}