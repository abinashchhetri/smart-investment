"use client"

import { useEffect, useRef } from "react"

export type useTradingViewWidgetPropType = {
    scriptUrl : string,
    config: Record<string, unknown>
    height?: number 
}

const useTradingViewWidget = ( {scriptUrl,
  config,
  height = 600, } : useTradingViewWidgetPropType ) => {

    const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded) return;

    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width:100%; height: ${height}px;"></div>`;
    containerRef.current.dataset.loaded = "true";

    const script = document.createElement("script");
    script.src = scriptUrl;
    
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true"

    return () => {
        if(containerRef.current){
            containerRef.current.innerHTML =''
            delete containerRef.current.dataset.loaded;
        }
    }

  }, [config, height, scriptUrl]);

  return containerRef
}

export default useTradingViewWidget