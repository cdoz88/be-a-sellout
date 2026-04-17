"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export const ASSETS = {
  heroVideo: "https://beasellout.com/wp-content/uploads/2025/08/All-Sports.mp4",
  logo: "https://beasellout.com/wp-content/uploads/2025/04/Logo.png"
};

// EXPLICITLY REQUESTED SVG
export const UserBrushSVG = ({ className = "" }) => (
  <svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.38 22.32" className={className} preserveAspectRatio="none">
    <g id="c">
      <path d="M56.14,16.17c-.15.06-.41.09-.72.12.07-.08.47-.17.72-.12Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M44.27,8.22c-.22.06-.91.2-.85.04.39-.05.56-.03.85-.04Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M43.05,8.13c-.05.08-.6.06-.85.11,0-.09.69-.14.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M39.78,9.81c-.17.06-.63.15-.85.11.05-.08.6-.06.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M38.09,8.53c-.28.11-.78.19-1.45.23.23-.12.93-.17,1.45-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M34.58,15.99c-.74.08-2.23.36-2.77.27.91,0,1.93-.26,2.77-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M32.28,13.12c-.9.28-2.58.24-3.74.49-.18-.14,1.73-.2,2.05-.36.28-.02.5,0,.72,0,.33-.05.62-.18.97-.13Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M20.92,13.85c.03.08-.04.14-.36.17-.09-.02-.13-.06-.12-.12l.48-.05Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M16.35,15.47c-.73.23-2.43.42-3.38.43-.12.04-.12.09-.36.11-.56.09-1.82.18-.6.04,1.49-.29,2.69-.32,4.34-.57Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M15.6,13.92c-.17.07-.47.12-.84.15.08-.09.7-.17.84-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M14.95,18.26c-.13.09-.76.09-1.08.15.23-.07.81-.19,1.08-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M14.77,14.56c-.29.12-.96.17-1.32.27-.34-.09.87-.21,1.32-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M14.16,14.17c-.23.12-.93.18-1.45.26.3-.11.98-.18,1.45-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M13.88,19.16c-.03.11-.5.16-.84.23.06-.11.55-.15.84-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M13.26,18.45c-.38.14-1.73.27-2.4.34.84-.18,1.48-.25,2.4-.34Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M12.47,14.46c-.6.22-1.53.22-2.05.26.56-.15,1.41-.1,2.05-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M11.05,16.15c-.23.08-.63.14-.96.21-.08-.13.56-.15.96-.21Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M9.96,15.95c-.28.11-.54.11-.96.14.09-.08.68-.09.96-.14Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M8.87,15.68c-.12.1-1.03.23-.85.03.26-.04.23.02.24.07.29-.02.26-.09.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M6.63,18.45c.58-.2,1.62-.13,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M5.46,19.79c-.49.13-.97.17-1.56.22.36-.09,1.31-.22,1.56-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M5.11,20.03c.19.08-.78.19-.6.07l.6-.07Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M4.2,21.87c-.16.09-.54.15-.83.17.08-.09.69-.18.83-.17Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M.86,22.15c-.96.28-1.33.17,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M27.84,19.05c-.2.06-.47.11-.6.19-.39-.09-1.05.09-1.56.09.6-.21,1.28-.09,2.17-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M14.09,17.76c-.29.05-.26-.03-.6.04-.04-.05.11-.07.12-.11-.6.05-.93.14-1.44.2.06-.03.12-.07.12-.11-.66.25-1.48.08-2.89.33,1.33-.34,4.35-.58,5.53-.75-.16.14-1.21.15-1.32.31-.02.1.67-.06.48.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M12.48,14.88c-.14.02-.07.04,0,.03-.03.08-.53.08-.6.07.14-.11,1.74-.25.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M3.56,16.33v-.13c-.77.11-2,.29-2.54.24.9-.21,2.86-.23,3.49-.52.16.01.45-.02.6,0,2.1-.47,4.44-.52,6.63-.92-.95.46-3.25.26-4.34.75-.19,0,0-.03.12-.05-.98.12-2.74.26-3.97.63Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M4.88,20.32c-.18.08-.51.14-.71.22-.11,0,.46-.27.71-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
    </g>
  </svg>
);

export const ScratchSVG = ({ className = "" }) => (
  <svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.38 22.32" className={className} preserveAspectRatio="none">
    <g id="c">
      <path d="M56.14,16.17c-.15.06-.41.09-.72.12.07-.08.47-.17.72-.12Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M44.27,8.22c-.22.06-.91.2-.85.04.39-.05.56-.03.85-.04Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M43.05,8.13c-.05.08-.6.06-.85.11,0-.09.69-.14.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M39.78,9.81c-.17.06-.63.15-.85.11.05-.08.6-.06.85-.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M38.09,8.53c-.28.11-.78.19-1.45.23.23-.12.93-.17,1.45-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M34.58,15.99c-.74.08-2.23.36-2.77.27.91,0,1.93-.26,2.77-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M32.28,13.12c-.9.28-2.58.24-3.74.49-.18-.14,1.73-.2,2.05-.36.28-.02.5,0,.72,0,.33-.05.62-.18.97-.13Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M20.92,13.85c.03.08-.04.14-.36.17-.09-.02-.13-.06-.12-.12l.48-.05Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M16.35,15.47c-.73.23-2.43.42-3.38.43-.12.04-.12.09-.36.11-.56.09-1.82.18-.6.04,1.49-.29,2.69-.32,4.34-.57Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M15.6,13.92c-.17.07-.47.12-.84.15.08-.09.7-.17.84-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M14.95,18.26c-.13.09-.76.09-1.08.15.23-.07.81-.19,1.08-.15Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M14.77,14.56c-.29.12-.96.17-1.32.27-.34-.09.87-.21,1.32-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M14.16,14.17c-.23.12-.93.18-1.45.26.3-.11.98-.18,1.45-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M13.88,19.16c-.03.11-.5.16-.84.23.06-.11.55-.15.84-.23Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M13.26,18.45c-.38.14-1.73.27-2.4.34.84-.18,1.48-.25,2.4-.34Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M12.47,14.46c-.6.22-1.53.22-2.05.26.56-.15,1.41-.1,2.05-.26Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M11.05,16.15c-.23.08-.63.14-.96.21-.08-.13.56-.15.96-.21Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M9.96,15.95c-.28.11-.54.11-.96.14.09-.08.68-.09.96-.14Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M8.87,15.68c-.12.1-1.03.23-.85.03.26-.04.23.02.24.07.29-.02.26-.09.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M6.63,18.45c.58-.2,1.62-.13,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M5.46,19.79c-.49.13-.97.17-1.56.22.36-.09,1.31-.22,1.56-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M5.11,20.03c.19.08-.78.19-.6.07l.6-.07Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M4.2,21.87c-.16.09-.54.15-.83.17.08-.09.69-.18.83-.17Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M.86,22.15c-.96.28-1.33.17,0,0h0Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M27.84,19.05c-.2.06-.47.11-.6.19-.39-.09-1.05.09-1.56.09.6-.21,1.28-.09,2.17-.27Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M14.09,17.76c-.29.05-.26-.03-.6.04-.04-.05.11-.07.12-.11-.6.05-.93.14-1.44.2.06-.03.12-.07.12-.11-.66.25-1.48.08-2.89.33,1.33-.34,4.35-.58,5.53-.75-.16.14-1.21.15-1.32.31-.02.1.67-.06.48.11Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M12.48,14.88c-.14.02-.07.04,0,.03-.03.08-.53.08-.6.07.14-.11,1.74-.25.6-.1Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M3.56,16.33v-.13c-.77.11-2,.29-2.54.24.9-.21,2.86-.23,3.49-.52.16.01.45-.02.6,0,2.1-.47,4.44-.52,6.63-.92-.95.46-3.25.26-4.34.75-.19,0,0-.03.12-.05-.98.12-2.74.26-3.97.63Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M4.88,20.32c-.18.08-.51.14-.71.22-.11,0,.46-.27.71-.22Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
      <path d="M246.39,14.07c.54.04,1.14-.05,1.7-.01,1.32.08,2.5.28,3.84.3,1.18,0,2.3-.03,3.53.04.91.06,1.21.04,1.82.05,1.78.05,3.23.25,4.03-.01,1.26-.1,2.84-.08,3.95-.18.17-.02.54.03.61.03,2.82-.25,4.61-.93,7.92-.99.31-.16.53-.42,1.11-.6.26-.08.83-.1,1.02-.19.71-.34.18-.9,1.46-1.09.08-.09-.14-.14-.2-.22.13-.8-.3-1.52.08-2.11-.82-.45-.58-.85-1.21-1.26-.39-.25-1.18-.53-1.69-.79-.58-.29-1.2-.54-1.69-.82.03-.24-.74-.36-.87-.58-.93-.24-1.63-.51-2.57-.75-.08-.09-.31-.16-.32-.26-1.98-.6-3.97-1.31-6.73-1.73-.25-.04-.78-.12-1.09-.14-2.06-.19-5.22-.57-6.27-.99-.37-.06-.37.02-.74-.04-.22-.19-1.29-.53-2.24-.59-.33-.02-.91.15-1.63.15-1.07-.01-2.06-.36-3.02-.37-.44,0-.92.15-1.39.16-1.21.04-3.63-.2-4.63-.33-.79-.1-1.08-.27-1.68-.28-.55,0-.97.14-.93.39-1.59.45-5.58-.23-7.99-.14-1.75-.33-3.45-.02-5.14-.13-.34-.02-.74-.1-1.09-.11-.58-.02-1.35.06-2.1.07-1.27.02-2.39-.03-3.43.01-1.6-.38-2.8-.05-4.15-.11-.51-.02-1-.15-1.57-.16-.48-.02-.95.06-1.47.03-.52-.03-1.07-.15-1.57-.16-.38-.01-.68.04-.98.02-.4-.02-.66-.11-1.09-.11-.45,0-.91.11-1.36.1-1.66-.02-3.45-.18-5.02.05-2.83-.24-5.3.06-8.65-.2-.84.05-1.45.09-2.32.02-.19.02-.19.1-.5.09-1.74-.12-3.58.13-5.37,0-.06.04-.14.07-.25.09-2.48-.2-5.62-.24-7.56-.02-1.51-.15-3.27.05-5.12.07-.87,0-1.74-.07-2.56-.03-1.6.08-3.7.02-5.25.07-.46.02-.9.11-1.35.13-.81.03-1.69-.05-2.56,0-3.35.18-7.19.18-10.12.25-.91.02-1.68.15-2.69.21-1.68.11-3.43-.02-5.11.07-.42.02-.83.1-1.22.12-1.01.06-1.98.02-3.04.06-2.61.08-5.22.32-7.68.29-3.12.35-7.69.47-11.33.66-.81.21-1.59.09-2.44.15-2.6.18-5.92.51-8.65.55-5.72.48-11.56.86-17.38,1.25-5.82.45-11.63.92-17.27,1.49-.89-.07-2.26.1-3.03.27-.17-.07-.69-.02-1.09-.02-1.4.33-3.19.3-4.98.5-.44.25-1.53.18-2.19.39-.3-.09.38-.13-.12-.15-1.13.48-5.05.62-6.8.87.12,0,.15.05,0,.07-.43-.06-.62.15-1.09.18-3.18.33-5.42.92-8.12,1.31-.35-.02-1.27-.1-1.57.07.49-.02,1.11-.09,1.09.07-.82.02-1.89.2-2.42.37-1.01.11-1.53.07-2.42.27-.22.02.23.14-.24.18-1.42.05-2.12.25-3.39.3-.35.19-1.83.38-2.3.35-.41.11.47.08.12.15-1.14.16-2.2.34-3.27.35-.25.1-.42.21-.85.28-.29.04.07-.15-.36-.06-.4.13.33.12.24.24-.57.11-.45.18-.72.3-.81,0-1.34.23-2.06.36-.74.13-1.58.16-2.3.29-.62.1-.87.24-1.57.32-.57.06-1.06,0-1.69.08-.33.06.24.09-.24.16-2.21.29-4.42.57-6.04.96,2.48-.53,4.34-.47,6.52-.95.35.11.98-.2,1.33-.04.14-.1-.38-.1.12-.14.16,0,.23.02.48-.02-.29.21.17.16.37.25,1.87-.23,3.34-.41,4.95-.61.3-.07-.22-.08.12-.14.61-.09,1.09-.12,1.81-.24.23.11.73.12.48.31-2.19.22-5.13.77-7.73,1.07-.79.1-1.62.06-2.05.31,1.16-.19,2.12-.08,3.14-.16,1.32-.11,2.7-.46,3.99-.55.36-.02.52.02.84-.02.26-.03.68-.17.97-.19.31-.03.34.04.6,0,.55-.07.96-.22,1.57-.28,1.02-.1,2.03-.08,3.14-.24.21.04.13.19-.12.24-1.32.14-1.55.17-2.9.31.15,0,.25.02.24.07-.42.03-.57,0-.85.11,1-.11.94.15.61.3-2.5.21-5.55.64-7.61.76-.22.09-.35.2-.72.26-2.3.34-4.89.55-7.36.9,2.84-.12,5.78-.59,9.05-1,.13.02.04.12.36.06,1.39-.24,3.02-.38,4.1-.52.5.09.98.18,1.45.28,3.43-.47,6-.17,9.29-.46,0,.1.25.1.36.16-.26.1-.42.23-.72.32-.54.06-1.09.16-1.57.14-2.75.54-6.7.77-10.13,1.28-.4.2-.06.29.24.4,1.67-.08,3.16-.46,4.94-.44.67.32.03.65-1.32.81-2.25.27-6.13.63-7.59.73-6.57.94-13.12,1.59-19.84,2.6,3.76-.37,7.19-1.02,10.57-1.24-.02-.07.1-.11.36-.14,3.31-.32,6.98-.77,9.87-1.18,1.24.11,3.56-.41,4.82-.3-.27.4-1.26.67-2.53.89,1.3-.16,2.52-.16,3.61-.25.9-.07,2.43-.34,2.89-.31.11,0-.09.1.12.09-.37.03.65-.09.72-.1.48-.09.39-.11.96-.16.74-.06.73-.06,1.2-.01,2.56-.18,5.04-.53,7.59-.69.27-.02.8-.07.84-.07.24,0,.04.08.36.07.18,0,.09-.08.36-.1,1-.06,2.14-.14,3.13-.24,2.49-.27,5.45-.41,7.48-.59.45-.01-.13.15.48.09,3.51-.21,7.22-.45,10.97-.73.28-.01.07.15.48.09.52-.02.38-.17.85-.19.29.02.56.05.72.12,4.31-.18,8.73-.63,13.16-1,4.13-.36,8.28-.6,12.2-.84,3.09-.2,6.05-.51,8.82-.57,1.85-.16,3.59-.29,5.29-.39,1.7-.08,3.38-.16,5.11-.24,2.51-.12,5.27-.16,7.38-.33.36-.03.79-.12,1.22-.14.64-.03,1.29.05,1.93.03,1.73-.07,3.49-.28,5.21-.35,1.93-.07,3.79-.08,5.68-.12,1.07-.02,2.09-.15,3.15-.19.7-.02,1.44.04,2.17.02,2.04-.06,4.12-.26,6.06-.28,2.59-.02,5.24.02,7.86-.16,2.9.06,6.42.04,9.19-.04,2.25.24,4.59-.05,7.13,0,.27,0,.45.05.72.06,1.92.08,3.96.02,5.9-.03,1.94-.02,3.79-.04,5.35.07,1.17-.15,2.17.04,3.26.1,1.17.06,2.26-.04,3.39-.03.37,0,.71.07,1.08.09,1.14.04,2.26-.05,3.52-.06,1.88,0,3.88.3,6.03.15,1.66.12,4.12.39,6.03.3,3.21.36,6.47.19,9.77.42,1.11.08,2.12.29,3.25.17,1.16.22,2.55.16,3.97.24,1.4.07,2.86.22,4.32.36,2.08.19,4.68.21,6.22.66.67.78,2.11-.21,3.76.04.87.2.74.4,1.1.69.78.16,1.52.14,2.29.13.89.13,1.51.5,2.7.58ZM34.45,11.38s-.03-.06-.12-.05c.24-.18.84-.01.12.05ZM34.21,11.47c-1,.12-2.4.41-3.14.37-.2.02.19.17-.12.24-.44-.04-.95-.04-1.69.03-.08-.26,1.41-.25,1.45-.5.57-.04.85-.05,1.09-.2,1.17-.03,1.41-.22,2.3-.22-.22.18.17.1.12.28Z" style={{fill:'#9df01c', fillRule:'evenodd'}}/>
    </g>
  </svg>
);

export const DiscordSVG = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 512 512" width={size} height={size} className={className} fill="currentColor">
    <path d="M433.43,93.222c-32.633-14.973-67.627-26.005-104.216-32.324c-0.666-0.122-1.332,0.183-1.675,0.792c-4.501,8.005-9.486,18.447-12.977,26.655c-39.353-5.892-78.505-5.892-117.051,0c-3.492-8.39-8.658-18.65-13.179-26.655c-0.343-0.589-1.009-0.894-1.675-0.792c-36.568,6.298-71.562,17.33-104.216,32.324c-0.283,0.122-0.525,0.325-0.686,0.589c-66.376,99.165-84.56,195.893-75.64,291.421c0.04,0.467,0.303,0.914,0.666,1.198c43.793,32.161,86.215,51.685,127.848,64.627c0.666,0.203,1.372-0.04,1.796-0.589c9.848-13.449,18.627-27.63,26.154-42.543c0.444-0.873,0.02-1.909-0.888-2.255c-13.925-5.282-27.184-11.723-39.939-19.036c-1.009-0.589-1.09-2.032-0.161-2.723c2.684-2.011,5.369-4.104,7.932-6.217c0.464-0.386,1.11-0.467,1.655-0.224c83.792,38.257,174.507,38.257,257.31,0c0.545-0.264,1.191-0.182,1.675,0.203c2.564,2.113,5.248,4.226,7.952,6.237c0.928,0.691,0.867,2.134-0.141,2.723c-12.755,7.456-26.014,13.754-39.959,19.016c-0.908,0.345-1.312,1.402-0.867,2.275c7.689,14.892,16.468,29.073,26.134,42.523c0.404,0.569,1.13,0.813,1.796,0.609c41.835-12.941,84.257-32.466,128.05-64.627c0.384-0.284,0.626-0.711,0.666-1.178c10.676-110.441-17.881-206.376-75.7-291.421C433.954,93.547,433.712,93.344,433.43,93.222z M171.094,327.065c-25.227,0-46.014-23.16-46.014-51.604s20.383-51.604,46.014-51.604c25.831,0,46.417,23.364,46.013,51.604C217.107,303.905,196.723,327.065,171.094,327.065z M341.221,327.065c-25.226,0-46.013-23.16-46.013-51.604s20.383-51.604,46.013-51.604c25.832,0,46.417,23.364,46.014,51.604C387.235,303.905,367.054,327.065,341.221,327.065z"/>
  </svg>
);

export const FacebookSVG = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 155.139 155.139" width={size} height={size} className={className} fill="currentColor">
    <path d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184 c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452 v20.341H37.29v27.585h23.814v70.761H89.584z"/>
  </svg>
);

export const PatreonSVG = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 569 546" width={size} height={size} className={className} fill="currentColor">
    <circle cx="362.59" cy="204.59" r="204.59"/>
    <rect height="545.8" width="100" x="0" y="0"/>
  </svg>
);

export const RedditSVG = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 152 152" width={size} height={size} className={className} fill="currentColor">
    <path d="m141.1 76.9c-.3-7.9-7-14-14.9-13.7-3.5.1-6.8 1.5-9.3 4-11.1-7.7-24.2-11.9-37.7-12.2l6.4-30.5 21 4.4c.6 5.4 5.4 9.2 10.8 8.7 5.4-.6 9.2-5.4 8.7-10.8-.6-5.4-5.4-9.2-10.8-8.7-3.1.3-5.8 2.1-7.4 4.8l-24-4.8c-1.6-.4-3.3.7-3.6 2.3l-7.2 34c-13.6.2-26.9 4.4-38.2 12-5.9-5.2-15-4.6-20.2 1.3-5 5.7-4.7 14.2.6 19.5 1.1 1.1 2.4 1.9 3.8 2.6-.1 1.4-.1 2.9 0 4.3 0 21.9 25.5 39.7 57 39.7s57-17.8 57-39.7c.1-1.4.1-2.9 0-4.3 5-2.4 8.1-7.4 8-12.9zm-97.8 9.8c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8c-5.5-.1-9.8-4.4-9.8-9.8zm56.8 26.9c-6.9 5.2-15.5 7.9-24.2 7.5-8.7.4-17.2-2.3-24.2-7.5-1-1.1-.8-2.8.3-3.7 1-.9 2.5-.9 3.5 0 5.9 4.3 13.1 6.5 20.4 6.2 7.3.4 14.5-1.7 20.4-6 1.1-1.1 2.8-1 3.9 0 1.1 1.1 1 2.8 0 3.9zm-1.8-16.8c-2.8-2.6-2.9-7-.2-9.8 2.6-2.8 7-2.9 9.8-.2 2.8 2.6 2.9 7 .2 9.8-2.5 2.6-6.6 2.9-9.4.6h-.5z"/>
  </svg>
);

export const AppStoreSVG = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
    <path fill="currentColor" d="m63.6 5c9 0 13.5 0 18.4 1.5 5.3 1.9 9.5 6.1 11.4 11.4 1.6 4.9 1.6 9.5 1.6 18.5v27.2c0 9 0 13.5-1.5 18.4-1.9 5.3-6.1 9.5-11.4 11.4-5 1.6-9.5 1.6-18.5 1.6h-27.2c-9 0-13.5 0-18.4-1.5-5.4-2-9.5-6.1-11.5-11.5-1.5-4.8-1.5-9.3-1.5-18.4v-27.2c0-9 0-13.5 1.5-18.4 2-5.3 6.1-9.5 11.5-11.4 4.8-1.6 9.3-1.6 18.4-1.6z"/>
    <path fill="#0a0a0a" d="m25.3 68.3c.1-.2.3-.3.5-.4.8-.2 1.6-.4 2.4-.4 2.2 0 4.2.8 5.8 2.2.2.2.2.5.1.7l-4.1 7c-.8 1.4-2.3 2.2-3.8 2.2-.9 0-1.8-.3-2.6-.9-1.8-1.3-2.2-3.9-1.1-5.8zm53.3-10.7c2.3 0 4.3 1.7 4.5 3.9.2 2.6-1.8 4.8-4.3 4.8h-5.3l3.9 6.7c1.1 1.9.7 4.5-1.1 5.8-.8.6-1.7.9-2.6.9-1.5 0-3-.8-3.8-2.2l-9.4-16.3-7.4-12.8c-.1-.1-.1-.2-.1-.4 0-.5-.1-1-.1-1.5 0-3.5.8-7 2.4-9.8.2-.3.7-.3.9 0l12.2 20.8h10.2zm-23 .2c2.2 1.3 3.6 3.8 3.6 6.6 0 .6-.1 1.1-.2 1.7 0 .1-.2.2-.3.2h-14-23.3c-2.5 0-4.6-2.2-4.3-4.8.2-2.3 2.2-3.9 4.5-3.9h9.9l13.5-23.2-3.7-6.3c-1.3-2.2-.4-5.1 2-6.1 2.1-.9 4.5 0 5.7 1.9l1.1 1.9 1.2-2c1.3-2.2 4.2-2.9 6.3-1.4 1.9 1.3 2.3 3.9 1.1 5.9l-17.2 29.3h7 6.4c.3 0 .5.1.7.2z"/>
  </svg>
);

export const GooglePlaySVG = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 512 512" width={size} height={size} className={className} fill="currentColor">
    <path opacity="0.8" d="M35.395,7.913c-5.789,6.127-9.212,15.64-9.212,27.966v440.242c0,12.336,3.424,21.839,9.212,27.966l1.473,1.435l246.615-246.613v-2.908v-2.91L36.868,6.468L35.395,7.913z"/>
    <path opacity="1" d="M365.683,341.149l-82.2-82.24v-2.908v-2.91l82.219-82.219l1.853,1.057l97.396,55.341c27.821,15.805,27.821,41.667,0,57.482l-97.396,55.341L365.683,341.149z"/>
    <path opacity="0.6" d="M367.556,340.082l-84.073-84.081L35.395,504.087c9.173,9.708,24.309,10.91,41.367,1.222L367.556,340.082"/>
    <path opacity="0.4" d="M367.556,171.918L76.762,6.691C59.704-2.997,44.568-1.795,35.395,7.913l248.088,248.088L367.556,171.918z"/>
  </svg>
);

export const WordpressSVG = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="m12 0c-6.615 0-12 5.381-12 12 0 6.615 5.385 12 12 12s12-5.385 12-12c0-6.62-5.385-12-12-12zm-10.79 11.999c0-1.563.333-3.048.934-4.389l5.148 14.1c-3.601-1.751-6.082-5.442-6.082-9.711zm10.79 10.791c-1.06 0-2.081-.155-3.048-.441l3.237-9.406 3.315 9.087c.024.054.049.101.077.15-1.118.392-2.323.61-3.581.61zm1.485-15.845v-.001c.648-.034 1.233-.101 1.233-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-1.06 0-2.841-.135-2.841-.135-.58-.034-.647.857-.067.891 0 0 .551.068 1.132.101l1.679 4.606-2.361 7.079-3.928-11.685c.649-.034 1.234-.101 1.234-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-.203 0-.441-.005-.697-.014 1.931-2.928 5.245-4.863 9.015-4.863 2.807 0 5.366 1.075 7.287 2.83-.049-.005-.092-.009-.14-.009-1.06 0-1.81.924-1.81 1.916 0 .89.513 1.64 1.06 2.531.411.716.891 1.64.891 2.976 0 .924-.353 1.993-.823 3.489l-1.075 3.595zm7.985-.122c.842 1.539 1.321 3.3 1.321 5.178 0 3.982-2.158 7.456-5.366 9.324l-.001-.001 3.295-9.528c.614-1.539.823-2.767.823-3.866 0-.396-.024-.764-.072-1.107z"/>
  </svg>
);

export const GlobalStyles = () => (
  <style>{`
    @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
    .animate-marquee { display: flex; width: 200%; animation: marquee 25s linear infinite; }
    .animate-marquee-reverse { display: flex; width: 200%; animation: marquee 30s linear infinite reverse; }
    .marquee-hover-pause:hover .animate-marquee, .marquee-hover-pause:hover .animate-marquee-reverse { animation-play-state: paused; }
    
    .glass-panel {
      background: rgba(15, 15, 15, 0.6);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    
    .split-panel { transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s ease; }
    .funnel-container:hover .split-panel { filter: grayscale(80%) brightness(0.4); }
    .funnel-container .split-panel:hover { flex: 1.6; filter: grayscale(0%) brightness(1.1); z-index: 10; }
    
    .center-divider { transition: opacity 0.3s ease, transform 0.3s ease; }
    .funnel-container:hover .center-divider { opacity: 0; transform: translate(-50%, -50%) scale(0.9); pointer-events: none; }
    
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

export const FeatureModal = ({ feature, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!feature) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>
      <div className="relative bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl animate-in zoom-in-95 duration-300">
         <button onClick={onClose} className="absolute top-5 right-5 p-2 bg-[#1a1a1a] hover:bg-gray-800 border border-gray-700 hover:border-gray-500 rounded-full text-gray-400 hover:text-white transition-colors z-10 shadow-lg">
            <X size={20} />
         </button>
         
         <div className="w-20 h-20 bg-[#a3e635]/10 text-[#a3e635] rounded-2xl flex items-center justify-center mb-6 border border-[#a3e635]/30 shadow-[0_0_30px_rgba(163,230,53,0.15)] transform -rotate-3">
            {React.cloneElement(feature.icon, { size: 36 })}
         </div>
         
         <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-none uppercase">{feature.title}</h3>
         
         <div className="w-16 h-1.5 bg-[#a3e635] rounded-full mb-6"></div>
         
         <p className="text-gray-300 text-lg leading-relaxed font-medium">
           {feature.detailedDesc}
         </p>
         
         <div className="mt-10 pt-6 border-t border-gray-800 flex justify-end">
            <button onClick={onClose} className="bg-[#1a1a1a] hover:bg-gray-800 border border-gray-700 text-white px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-colors shadow-md hover:-translate-y-0.5">
              Got it
            </button>
         </div>
      </div>
    </div>
  );
};

export const RevealOnScroll = ({ children, className = "", delay = 0, animation = "fade-up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) {
      if (animation === "fade-up") return "opacity-0 translate-y-8 scale-95";
      if (animation === "fade-left") return "opacity-0 translate-x-8";
      if (animation === "fade-right") return "opacity-0 -translate-x-8";
      if (animation === "zoom-in") return "opacity-0 scale-90";
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isFunnel = pathname === '/';

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent py-4 pointer-events-none">
      <div className={`max-w-[1200px] mx-auto px-6 flex justify-between items-center ${isFunnel ? 'opacity-0 translate-y-[-10px]' : 'opacity-100 translate-y-0'} transition-all duration-500 pointer-events-auto`}>
        
        <div className="flex items-center gap-8">
          <Link href="/" className="group relative block w-20 md:w-24 focus:outline-none shrink-0">
            <div className="absolute -inset-2 bg-[#a3e635]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src={ASSETS.logo} alt="Sellout Crowds" className="w-full h-auto relative z-10 transition-transform duration-300 group-hover:scale-105" />
          </Link>
          
          {!isFunnel && (
            <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">
              <Link href="/fans" className="relative group pb-2 pt-1">
                <span className={`relative z-10 transition-colors ${pathname === '/fans' ? 'text-[#9df01c]' : 'hover:text-white'}`}>For Fans</span>
                <UserBrushSVG className={`absolute -bottom-1 left-0 w-full h-[8px] origin-left transition-all duration-300 ${pathname === '/fans' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`} />
              </Link>
              <Link href="/creators" className="relative group pb-2 pt-1">
                <span className={`relative z-10 transition-colors ${pathname === '/creators' ? 'text-[#9df01c]' : 'hover:text-white'}`}>For Creators</span>
                <UserBrushSVG className={`absolute -bottom-1 left-0 w-full h-[8px] origin-left transition-all duration-300 ${pathname === '/creators' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`} />
              </Link>
            </nav>
          )}
        </div>

        <div className="hidden md:flex items-center gap-3 mt-1">
          <a href="#" className="bg-white/10 backdrop-blur-sm text-white border border-white/10 px-5 py-2.5 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all duration-300 rounded-md">
            Register
          </a>
          <a href="#" className="bg-[#a3e635] text-black px-5 py-2.5 font-bold uppercase tracking-widest text-[10px] hover:bg-[#84cc16] transition-all duration-300 rounded-md shadow-[0_0_10px_rgba(163,230,53,0.2)] hover:shadow-[0_0_15px_rgba(163,230,53,0.4)]">
            Login
          </a>
        </div>

        {!isFunnel && (
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white hover:text-[#a3e635] transition-colors focus:outline-none pointer-events-auto">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/5 p-4 flex flex-col gap-3 shadow-2xl transition-all duration-300 overflow-hidden pointer-events-auto ${mobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 py-0 border-transparent'}`}>
        <Link href="/fans" onClick={() => setMobileMenuOpen(false)} className={`text-left font-bold uppercase tracking-widest text-xs py-2 border-b border-white/5 ${pathname === '/fans' ? 'text-[#9df01c]' : 'text-white'}`}>For Fans</Link>
        <Link href="/creators" onClick={() => setMobileMenuOpen(false)} className={`text-left font-bold uppercase tracking-widest text-xs py-2 border-b border-white/5 ${pathname === '/creators' ? 'text-[#9df01c]' : 'text-white'}`}>For Creators</Link>
        <div className="flex gap-2 mt-1">
          <a href="#" className="flex-1 bg-white/10 text-white text-center py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-md">Register</a>
          <a href="#" className="flex-1 bg-[#a3e635] text-black text-center py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-md">Login</a>
        </div>
      </div>
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-[#050505] text-gray-500 py-10 px-6 relative overflow-hidden mt-auto">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
      
      <div className="flex flex-col gap-2 text-xs font-medium text-center md:text-left">
        <h4 className="text-white font-black uppercase tracking-widest mb-1">The Real Truth</h4>
        <a href="#" className="hover:text-[#a3e635] transition-colors">Why Discord Sucks</a>
        <a href="#" className="hover:text-[#a3e635] transition-colors">Why Facebook is Lame</a>
        <a href="#" className="hover:text-[#a3e635] transition-colors">Why Patreon is a Waste of Time</a>
        <a href="#" className="hover:text-[#a3e635] transition-colors">Why Reddit...Seriously, Why?</a>
      </div>

      <div className="flex flex-col items-center md:items-end gap-5">
        <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-[#111] border border-gray-800 rounded-xl px-4 py-2.5 flex items-center gap-2 cursor-pointer hover:border-gray-500 transition-all duration-300 group shadow-md">
              <AppStoreSVG size={24} className="text-white group-hover:text-gray-300 transition-colors" />
              <div className="flex flex-col text-left">
                  <span className="text-[8px] uppercase tracking-widest text-gray-500 leading-none">Download on the</span>
                  <span className="text-sm font-bold text-white leading-none mt-0.5">App Store</span>
              </div>
            </div>
            
            <div className="bg-[#111] border border-gray-800 rounded-xl px-4 py-2.5 flex items-center gap-2 cursor-pointer hover:border-gray-500 transition-all duration-300 group shadow-md">
              <GooglePlaySVG size={24} className="text-white group-hover:text-gray-300 transition-colors" />
              <div className="flex flex-col text-left">
                  <span className="text-[8px] uppercase tracking-widest text-gray-500 leading-none">GET IT ON</span>
                  <span className="text-sm font-bold text-white leading-none mt-0.5">Google Play</span>
              </div>
            </div>
        </div>
        
        <div className="flex items-center gap-3">
            <Link href="/">
              <img src={ASSETS.logo} alt="Sellout Crowds" className="h-6 w-auto opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
            </Link>
            <p className="text-[10px] uppercase tracking-widest opacity-60 border-l border-gray-800 pl-3">&copy; {new Date().getFullYear()} Sellout Crowds. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);