'use client';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50" />
      
      {/* Animated aurora-like gradients */}
      <div className="absolute inset-0">
        {/* First animated blob */}
        <div 
          className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] rounded-full opacity-30 blur-[100px] animate-blob"
          style={{
            background: 'radial-gradient(circle, #0092ff 0%, transparent 70%)',
          }}
        />
        
        {/* Second animated blob */}
        <div 
          className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] rounded-full opacity-30 blur-[100px] animate-blob animation-delay-2000"
          style={{
            background: 'radial-gradient(circle, #0092ff 0%, transparent 70%)',
          }}
        />
        
        {/* Third animated blob */}
        <div 
          className="absolute top-[20%] left-[30%] w-[60%] h-[60%] rounded-full opacity-20 blur-[80px] animate-blob animation-delay-4000"
          style={{
            background: 'radial-gradient(circle, #0092ff 0%, transparent 70%)',
          }}
        />
      </div>
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/30" />
    </div>
  );
}