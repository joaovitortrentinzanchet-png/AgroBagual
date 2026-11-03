import React from 'react';

interface AnimatedButtonProps {
  textDef: string;
  textHov?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function AnimatedButton({ textDef, textHov, className = '', size = 'md', onClick }: AnimatedButtonProps) {
  const hoverText = textHov || textDef;
  
  let sizeClasses = '';
  if (size === 'sm') sizeClasses = 'px-4 py-2 text-[10px] md:px-6 md:py-3 md:text-xs';
  if (size === 'md') sizeClasses = 'px-5 py-3 text-xs md:px-10 md:py-4 md:text-sm';
  if (size === 'lg') sizeClasses = 'px-6 py-3 text-sm md:px-14 md:py-5 md:text-lg';

  return (
    <div className={`streetwear-btn-wrap ${className} max-w-full`}>
      <button className="st-btn" onClick={onClick}>
        <div className="st-spin"></div>
        <div className="st-core"></div>
        <div className={`st-label-container ${sizeClasses}`}>
          <div className="st-label-def whitespace-nowrap text-center">
            {textDef.split('').map((c, i) => (
              <span key={i} style={{ transitionDelay: `${i * 0.03}s`, display: 'inline-block' }}>
                {c === ' ' ? '\u00A0' : c}
              </span>
            ))}
          </div>
          <div className="st-label-hov whitespace-nowrap text-center">
            {hoverText.split('').map((c, i) => (
              <span key={i} style={{ transitionDelay: `${i * 0.03}s`, display: 'inline-block' }}>
                {c === ' ' ? '\u00A0' : c}
              </span>
            ))}
          </div>
        </div>
      </button>
    </div>
  );
}
