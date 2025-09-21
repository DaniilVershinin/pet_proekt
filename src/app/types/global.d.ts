declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  import React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG
}


declare module "*.png" 
declare module "*.jpg" 
declare module "*.jpeg" 
// src/global.d.ts
declare module 'i18next-http-backend';
declare const __IS_DEV__: boolean;
