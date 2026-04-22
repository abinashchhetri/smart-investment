"use client"
import useTradingViewWidget, { useTradingViewWidgetPropType } from '@/hooks/useTradingViewWidget.hook';
import { cn } from '@/lib/utils';
import { memo, useRef } from 'react';

interface TradingViewWidgetProps extends useTradingViewWidgetPropType {
   title? : string;
   className?: string;
}

function TradingViewWidget({title , scriptUrl, config, height = 600, className} :  TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget({config, scriptUrl, height});



  return (

    <div className='w-full'>
      {title && <h3 className='font-semibold text-2xl text-gray-100 mb-5' >{title}</h3>}
      <div className={cn("tradingview-widget-container", className)} ref={containerRef} >
        <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }}/>
        
      </div>
    </div>

    
  );
}

export default memo(TradingViewWidget);
