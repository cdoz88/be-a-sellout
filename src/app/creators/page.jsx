"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Tag, MonitorSmartphone, ShoppingCart, Users, ArrowRight, Check, X, 
  Play, Rocket, Monitor, ListOrdered, ChevronRight, Zap, Mic, Link2, Contact, Book, Mail, Send,
  LayoutDashboard, BarChart3
} from 'lucide-react';
import { ASSETS, GlobalStyles, Header, Footer, RevealOnScroll, FeatureModal, FacebookSVG, RedditSVG, PatreonSVG, DiscordSVG, WordpressSVG, UserBrushSVG, ScratchSVG } from '../../components/SharedUI';

// Foam Finger Icon for Home-Field Advantage
const FoamFingerSVG = ({ size = 42, className = "" }) => (
  <svg viewBox="0 0 383.99 361.92" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M169.98,232.68c-9.14-8.94-14.98-21.48-17.42-34.23-2.71-12.63-3.99-25.75-3.66-38.65-1.16-30.21,23.88-54.66,54.06-53.06,22.34-1.51,46.43,14.47,52.05,39.42,1.57,7.33,1.33,14.78,1.23,22.28-1.11,21.91-4.06,46.24-19.83,62.79,3.23-5.34,5.74-11.05,7.47-17.01,4.63-17.88,4.25-36.6,2.76-54.91-.23-2.78-.55-5.83-1.29-8.51-4.26-19.24-23.49-33.41-43.08-31.71-18.12-1.21-35.99,10.94-41.4,28.36-1.43,3.93-1.93,8.62-2.32,12.81-.63,6.25-.82,12.37-.86,18.6.04,18.58,1.52,37.98,12.3,53.83h0Z" fill="currentColor"/>
      <path d="M121.4,361.92L43.53,180.09l65.11-27.16,23.43,53.83c.82,1.89,1.25,3.93,1.25,5.99l-8.6,12.94-30.17-66.91-36.65,15.7,62.82,150.59c.79,1.9,1.19,3.95,1.15,6.01l-.48,30.86Z" fill="currentColor"/>
      <path d="M283.74,361.92l98.05-228.95c2.95-6.9,2.94-14.8-.04-21.68-2.98-6.89-8.73-12.31-15.78-14.88l-14.49-5.29c-13.79-5.03-29.02,1.64-34.68,15.17l-43.74,100.47c-.82,1.89-1.25,3.93-1.25,5.99l8.6,12.94,51.07-113.26c2.37-5.67,8.76-8.47,14.54-6.36l14.49,5.29c3,1.09,5.36,3.31,6.62,6.25,1.27,2.93,1.27,6.16.02,9.1l-82.74,198.35c-.79,1.9-1.19,3.95-1.15,6.01l.48,30.86Z" fill="currentColor"/>
      <path d="M30.33,135.19c1.67.01,3.3-.31,4.79-.95,1.39-.59,2.67-1.44,3.77-2.53,2.3-2.26,3.57-5.29,3.6-8.51,0-.98-.12-1.94-.34-2.87,2.52.62,5.21.43,7.62-.6,1.36-.58,2.64-1.42,3.76-2.52,2.3-2.26,3.57-5.29,3.6-8.51.01-1.49-.26-2.93-.76-4.28,2.35.43,4.78.2,6.96-.73,1.26-.53,2.44-1.3,3.47-2.29,1.73.42,3.36.72,4.81.88.06,0,.19.02.23.2.05.2-.08.29-.13.32-13.58,9.06-18.77,18.43-14.62,26.39.44.85,1.5,1.19,2.35.74.85-.45,1.19-1.5.74-2.35-4.34-8.32,6.57-17.27,13.46-21.87,1.34-.9,1.96-2.49,1.58-4.06-.38-1.56-1.66-2.67-3.25-2.84-6.24-.67-16.07-4.2-21.73-8.95-7.19-6.04-1.34-16.6.77-19.89l37.51,11.44c4.25,1.3,7.64,4.58,9.07,8.79,3.23,9.49,9.91,33.07,2.18,47.07-1.21,2.19-1.37,4.74-.44,7.01l2.76,6.75-56.23,23.79-5.85-13.82c-.98-2.31-2.21-4.04-3.77-5.3-5.96-4.78-14.61-14.43-23.96-33.77l9.51,9.64c2.26,2.3,5.29,3.57,8.51,3.6Z" fill="currentColor"/>
      <path d="M52.05,66.64l-19.28-44.63c-2.19-5.17.24-11.16,5.42-13.35,5.18-2.19,11.17.24,13.36,5.42l25.47,60.18-24.97-7.62Z" fill="currentColor"/>
      <path d="M48.02,92.53c3.92,3.29,9.38,5.93,14.56,7.65-3.33,1.76-7.72,1.09-10.68-1.91l-19.06-19.33c-3.57-3.62-3.73-9.27-.36-12.59,3.37-3.32,9.02-3.08,12.59.54l2.3,2.33c-3.75,6.27-7.1,16.8.66,23.32Z" fill="currentColor"/>
      <path d="M53.65,108.68c-.02,2.29-.92,4.44-2.56,6.05-3.24,3.19-8.38,3.27-11.73.29-.12-.13-.22-.26-.34-.39l-15.05-15.26c-.25-.25-.51-.48-.77-.71l-1.35-1.37c-1.61-1.63-2.49-3.79-2.47-6.09.02-2.29.92-4.44,2.56-6.05.79-.78,1.7-1.38,2.67-1.79,3.15-1.33,6.93-.7,9.47,1.87l17.11,17.34c1.61,1.63,2.49,3.79,2.47,6.09Z" fill="currentColor"/>
      <path d="M9.34,101.74c.79-.78,1.7-1.38,2.67-1.79,2.94-1.25,6.43-.75,8.95,1.42l15.5,15.72c.15.15.3.29.46.43,1.35,1.57,2.09,3.55,2.08,5.65-.02,2.29-.92,4.44-2.56,6.05-1.63,1.61-3.79,2.49-6.09,2.47-2.29-.02-4.44-.92-6.05-2.56l-15.05-15.26c-1.61-1.63-2.49-3.79-2.47-6.09.02-2.29.92-4.44,2.56-6.05Z" fill="currentColor"/>
      <path d="M5.16,123.1c3.54,6.79,9.87,20.48,16.51,28.63,2.56,3.15,6.18,6.08,9.25,9.01,1.2,1.14,2.12,2.53,2.74,4.07l8.63,20.08,70.04-29.64-4.61-11.26c-.66-1.62-.64-3.44.11-5.03,7.54-16.05.9-40.48-2.78-51.29-2.24-6.59-7.56-11.74-14.22-13.77l-6.23-1.9L58.79,11.01C54.82,1.64,43.8-2.65,34.49,1.71c-8.85,4.15-12.59,14.78-8.78,23.78l12.9,30.48c-2.01.06-4.04.49-5.98,1.31h0c-1.92.81-4.12,1.97-5.61,3.44-3.13,3.08-4.75,6.69-4.78,11.08,0,1.13.47,2.75.69,3.84-.46.15-.93.31-1.38.51h0c-1.91.81-3.64,1.97-5.13,3.44-3.63,3.58-4.38,7.87-3.97,12.59-1.55.1-6.1,2.62-8.54,4.84-9.11,8.3.46,24.58,1.25,26.1ZM4.38,112.85s0,0,0,0c-.72-1.57-1.1-3.29-1.09-5.07.02-3.23,1.3-6.25,3.6-8.51,2.71-2.68,6.38-3.79,9.9-3.38-.6-1.47-.92-3.05-.91-4.69.02-3.23,1.3-6.25,3.6-8.51,2.52-2.49,5.87-3.62,9.16-3.44-3.15-4.89-2.71-11.33,1.39-15.37,4.61-4.55,12.17-4.41,17.11.19L29.56,23.38c-2.94-6.95.32-15,7.27-17.94,6.95-2.94,15,.32,17.94,7.27l26.6,62.87,8.18,2.5c5.32,1.62,9.57,5.74,11.36,11,3.38,9.93,10.33,34.67,1.94,49.88-.7,1.26-.79,2.72-.26,4l4.07,9.94-62.62,26.5-7.21-17.03c-.76-1.79-1.63-3.04-2.74-3.93-7.26-5.82-18.31-18.46-29.71-45.59Z" fill="currentColor"/>
    </g>
  </svg>
);

// Custom SVG Icon for Gear / Settings
const GearSVG = ({ size = 32, className = "" }) => (
  <svg viewBox="0 0 908.77 908.77" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M852.92,398.53c-27.04,0-49.58,19.21-54.74,44.73h-105.96c-2.64-57.36-25.57-109.43-61.79-149.18l74.92-74.92c21.69,14.39,51.22,12.04,70.33-7.08,21.81-21.81,21.81-57.18,0-78.99s-57.18-21.81-78.99,0c-19.12,19.12-21.48,48.64-7.08,70.33l-74.92,74.92c-39.75-36.22-91.82-59.15-149.18-61.79v-105.96c25.52-5.16,44.73-27.7,44.73-54.74,0-30.85-25.01-55.85-55.85-55.85s-55.85,25.01-55.85,55.85c0,27.04,19.21,49.58,44.73,54.74v105.96c-57.36,2.64-109.43,25.57-149.18,61.79l-74.92-74.92c14.39-21.69,12.04-51.22-7.08-70.33-21.81-21.81-57.18-21.81-78.99,0-21.81,21.81-21.81,57.18,0,78.99,19.12,19.12,48.64,21.48,70.33,7.08l74.92,74.92c-36.22,39.75-59.15,91.82-61.79,149.18h-105.96c-5.16-25.52-27.7-44.73-54.74-44.73-30.85,0-55.85,25.01-55.85,55.85s25.01,55.85,55.85,55.85c27.04,0,49.58-19.21,54.74-44.73h105.96c2.64,57.36,25.57,109.43,61.79,149.18l-74.92,74.92c-21.69-14.39-51.22-12.04-70.33,7.08-21.81,21.81-21.81,57.18,0,78.99,21.81,21.81,57.18,21.81,78.99,0,19.12-19.12,21.48-48.64,7.08-70.33l74.92-74.92c39.75,36.22,91.82,59.15,149.18,61.79v105.96c-25.52,5.16-44.73,27.7-44.73,54.74,0,30.85,25.01,55.85,55.85,55.85s55.85-25.01,55.85-55.85c0-27.04-19.21-49.58-44.73-54.74v-105.96c57.36-2.64,109.43-25.57,149.18-61.79l74.92,74.92c-14.4,21.69-12.04,51.22,7.08,70.33,21.81,21.81,57.18,21.81,78.99,0,21.81-21.81,21.81-57.18,0-78.99-19.12-19.12-48.64-21.48-70.33-7.08l-74.92-74.92c36.22-39.75,59.15-91.82,61.79-149.18h105.96c5.16,25.52,27.7,44.73,54.74,44.73,30.85,0,55.85-25.01,55.85-55.85s-25.01-55.85-55.85-55.85Z"/>
  </svg>
);

// Custom SVG Icon for Keep Your Money
const KeepYourMoneySVG = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 512 512" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="m455.3461 180.7954c-6.4312-14.0732-14.8675-27.3652-25.1858-39.6744-1.1122-19.0046 6.4995-38.9162 20.0605-51.783l13.1992-12.5226-14.1088-11.4881c-19.5382-15.9088-44.8597-22.9185-71.3002-19.7442-22.8897 2.7496-44.1606 12.713-58.9494 27.2719-20.2549-5.3034-41.287-7.9871-62.6662-7.9871-56.5299 0-109.7941 18.6306-149.9797 52.4597-17.1752 14.4583-31.1022 30.9614-41.503 48.8727-14.9119-2.5488-22.89-11.1653-27.0749-18.5846-7.5126-13.3203-7.7704-31.5828-.6127-43.4239l-27.3816-16.5513c-13.1709 21.7888-13.1202 52.2073.1264 75.6931 9.1166 16.164 23.6512 27.3998 41.4146 32.5037-5.6032 16.4445-8.5156 33.6749-8.5156 51.3098 0 54.8285 28.1014 105.6917 77.3403 140.422l21.4598 79.5949h55.7819l26.4424-39.8672c21.5535 2.7926 43.4688 2.7916 64.9774.002l26.442 39.8653h55.7805l21.4612-79.569c28.1434-19.8692 49.6261-45.2405 62.7965-74.0957h32.7618l23.8873-132.704zm6.0167 100.7085h-27.7328l-3.9052 10.3506c-10.7841 28.5847-31.5081 53.6729-59.9317 72.5529l-5.0232 3.3369-18.1858 67.4243h-14.0995l-28.3553-42.7502-10.2856 1.7771c-24.6268 4.2562-50.2256 4.2592-74.93-.001l-10.2822-1.7727-28.3528 42.7467h-14.0985l-18.1863-67.455-5.0281-3.3374c-43.2794-28.7292-68.1014-71.4579-68.1014-117.2291 0-82.8669 81.4345-150.2838 181.5313-150.2838 21.7195 0 42.9937 3.168 63.232 9.4151l10.705 3.3047 6.7656-8.9308c9.0763-11.9817 26.6338-21.1283 44.7293-23.3023 11.7976-1.4183 23.1758.1162 33.2232 4.3534-13.2696 19.6871-19.3478 44.3583-16.1754 68.1371l.6464 4.846 3.2446 3.6567c11.9026 13.4131 20.9735 28.2513 26.9609 44.103l3.9076 10.3447h40.0962zm-224.1617-65.4646c0 8.9557 1.8015 11.0897 22.486 15.4387 9.6422 2.0271 20.5707 4.3251 29.7071 10.3466 8.2986 5.4699 18.1912 16.2257 18.1912 36.4024 0 20.8336-14.7791 38.5398-35.1921 44.7369v21.5035h-31.9954v-21.5035c-20.413-6.1971-35.1922-23.9033-35.1922-44.7369h31.9954c0 8.1907 8.7902 15.1101 19.1945 15.1101 10.4042 0 19.1945-6.9194 19.1945-15.1101 0-8.9557-1.8015-11.0897-22.486-15.4387-9.6422-2.0271-20.5707-4.3251-29.7071-10.3466-8.2986-5.4699-18.1912-16.2257-18.1912-36.4024 0-20.8336 14.7791-38.5398 35.1922-44.7369v-21.503h31.9954v21.503c20.4131 6.1971 35.1921 23.9033 35.1921 44.7369h-31.9955c0-8.1907-8.7903-15.1101-19.1945-15.1101s-19.1944 6.9194-19.1944 15.1101z"/>
  </svg>
);

// Custom SVG Icon for Exclusive Content
const ExclusiveContentSVG = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M14,7.5H12.5V2A1.5017,1.5017,0,0,0,11,.5H2A1.5017,1.5017,0,0,0,.5,2V14A1.5017,1.5017,0,0,0,2,15.5H13.5a2.0027,2.0027,0,0,0,2-2V9A1.5017,1.5017,0,0,0,14,7.5Zm-12,7a.501.501,0,0,1-.5-.5V2A.5006.5006,0,0,1,2,1.5h9a.5006.5006,0,0,1,.5.5V13.5a1.9729,1.9729,0,0,0,.0634.4753c.0114.0467.0274.09.0421.1354a1.9749,1.9749,0,0,0,.13.3109c.0131.025.0187.054.0329.0784Zm12.5-1a1,1,0,0,1-2,0v-5H14a.5006.5006,0,0,1,.5.5Z"/>
    <path d="M8.5,7.0921V6a2,2,0,0,0-4,0V7.0921A1.4977,1.4977,0,0,0,3.5,8.5v2A1.5017,1.5017,0,0,0,5,12H8a1.5017,1.5017,0,0,0,1.5-1.5v-2A1.4977,1.4977,0,0,0,8.5,7.0921ZM5.5,6a1,1,0,0,1,2,0V7h-2Zm3,4.5A.501.501,0,0,1,8,11H5a.501.501,0,0,1-.5-.5v-2A.5006.5006,0,0,1,5,8H8a.5006.5006,0,0,1,.5.5Z"/>
  </svg>
);

// Custom SVG Icon for Sell Ad Space
const SellAdSpaceSVG = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 1024 1024" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <g>
      <path d="m163.1 817-79.8-138.3 472.2-525.3 298.6 517.3-532.5 112.7zm-6-130.5 36.2 62.8 115.9-24.6 203.8-43.2 247.9-52.4-216-374.1z"/>
      <path d="m37.3 703.3h222v60h-222z" transform="matrix(.507 .862 -.862 .507 704.982 233.411)"/>
      <path d="m368.5 393.7h618.4v60h-618.4z" transform="matrix(.5 .866 -.866 .5 705.465 -375.067)"/>
      <path d="m806.2 277.8h60v116.9h-60z" transform="matrix(.5 .866 -.866 .5 708.828 -555.978)"/>
      <path d="m710.4 151.9h60v116.9h-60z" transform="matrix(.828 .56 -.56 .828 245.053 -378.83)"/>
      <path d="m867.4 423.7h60v116.9h-60z" transform="matrix(.072 .997 -.997 .072 1313.882 -447.524)"/>
      <path d="m422 882.1h-9.5c-70.1 0-127.2-57.1-127.2-127.2v-25.2l263.9-55.8v81c0 70.1-57.1 127.2-127.2 127.2zm-72.8-104.6c9.3 26 34.2 44.6 63.3 44.6h9.5c37.1 0 67.2-30.1 67.2-67.2v-7z"/>
    </g>
  </svg>
);

// Our SVG Paths Collection
const chalkArrowPath = "m20.3547 24.1532c1.9932 3.4623 4.9029 7.1202 6.2527 10.5277.6068 1.5318-.4089 3.11-1.8376 3.4008-1.9171.3902-3.1918-1.4908-4.1923-2.8791-1.7336-2.4057-3.5559-4.7475-5.4618-7.0191-.8522-1.0157-1.8188-2.0859-2.5592-3.1734-.9053-1.3297-1.6584-2.6312-1.5427-3.9623.2609-2.8172 6.514-4.9255 8.5834-6.1083 4.0635-2.3226 7.4042-5.6254 10.8337-8.7838 1.1135-1.0255 2.3852-1.6273 3.963-1.4811 1.5711.1457 2.6279 2.0935 1.8616 3.4817-2.5931 4.0981-6.8605 6.5947-10.2581 9.9603 2.6688.0215 6.3441.2827 9.5691 1.1022 10.1425 2.5772 14.7686 10.674 16.2329 16.0098 1.0592 3.8595 2.14 10.0946-.1805 16.6378-.6299 1.7761-1.2446 3.524-2.6069 4.8646-.7157.7039-3.2245 2.9779-4.3302 2.5668-2.1144-.7912 1.3622-6.9904 1.8153-8.2754 1.5587-4.4202 1.7915-9.7959.152-14.2287-1.8227-4.9285-6.9323-9.7772-11.9069-11.3818-4.7249-1.524-9.6509-1.205-14.3875-1.2587z";
const chalkStraightArrowPath = "M81.3,16.5c-1.2-1.2-3.1-1.2-4.2,0L25.3,68.3l0.8-17.7c0.1-1.7-1.2-3.1-2.9-3.2c-1.7-0.1-3.1,1.2-3.2,2.9l-1.2,25.4c0,0.8,0.3,1.6,0.8,2.2c0.6,0.6,1.4,0.9,2.2,0.9l25.4-1.2c1.7-0.1,3-1.5,2.9-3.2c-0.1-1.7-1.5-3-3.2-2.9l-17.7,0.8L81.3,20.7C82.5,19.6,82.5,17.7,81.3,16.5z";
const chalkCurvedArrow3Path = "m87.82 42.7c-.45-7.06-1.84-14.49-7-19.76-4.71-4.85-11.51-6.89-18.09-7.42-9.14-.74-18.17 1.7-27.3 1.64-2.76 0-2.76 4.26 0 4.27 8 .06 15.79-1.73 23.74-1.77 5.85 0 12.24 1.08 17 4.79 5.23 4.1 6.8 10.77 7.3 17.09a203.67 203.67 0 0 1 .21 23.57 255.53 255.53 0 0 1 -2.53 27.2 2.19 2.19 0 0 0 1.49 2.62 2.15 2.15 0 0 0 2.63-1.49 242 242 0 0 0 2.55-50.74zm-49.33-6c-4-2.8-8-5.68-11.85-8.7-1.88-1.47-3.75-3-5.59-4.48l-2.93-2.52c-.45-.38-1.09-.8-1.61-1.27l1-.67 1.91-1.31q2.19-1.5 4.41-3 4.34-2.89 8.72-5.71c2.3-1.48.16-5.18-2.16-3.69q-6 3.87-12 7.91l-3.06 2.1a13.7 13.7 0 0 0 -2.71 2.07 3.18 3.18 0 0 0 -.54 3.57 7 7 0 0 0 2 2.2 273.83 273.83 0 0 0 22.25 17.15 2.14 2.14 0 1 0 2.16-3.69z";

// Game Plan Features
const gamePlanFeatures = [
  { 
    icon: <FoamFingerSVG size={42} className="text-currentColor" />, 
    title: "Home-Field Advantage", 
    desc: "This is a platform for sports fans, which means they are all your target audience! You don't have to try to get noticed through all those dance challenges.", 
    mark: 'X',
    arrow: {
      classes: "left-[60%] md:left-[65%] top-[70%] md:top-[80%] w-40 h-48 md:w-64 md:h-64", 
      render: () => (
        <svg viewBox="0 0 156 156" width="100%" height="100%" preserveAspectRatio="none">
          <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,155.86315155029297,-0.1010284423828125)">
            <path d="m116.49 80.92c-1.67-11.36-14.27-21.45-24-26-10.29-4.8-22-5.57-33-3.23-24.26 5.15-37.36 29.28-29 52.48a2 2 0 0 0 3.81-1.05c-4.05-21.45 5.27-39.12 27.15-44.43a44.15 44.15 0 0 1 28.71 3.21 41.19 41.19 0 0 1 11.59 8.44c4 4.07 5.91 9.34 9.43 13.67 2.26 2.78 5.71-.35 5.31-3.09z" fill="#ffffff" opacity="0.9" />
            <path d="m127.57 73.53c-.45-1.4-2.57-2.35-3.64-1-2.06 2.66-1.82 6.44-2.15 9.67a57.55 57.55 0 0 1 -2.12 12.19 138.67 138.67 0 0 1 -18.52-10.81c-1.68-1.21-3.11 1.26-2 2.62 5.09 6.42 13.41 10.72 20.6 14.31 1.22.61 3.09.44 3.73-1a45.48 45.48 0 0 0 3.28-13.11c.47-3.68 1.98-9.24.82-12.87z" fill="#ffffff" opacity="0.9" />
          </g>
        </svg>
      )
    }
  },
  { 
    icon: <KeepYourMoneySVG size={32} className="text-currentColor" />, 
    title: "Keep Your Money", 
    desc: "No cash out requests or minimum payouts. Connect your Stripe account and take direct payments from your fans!", 
    mark: 'O',
    arrow: {
      classes: "left-[5%] md:left-[-20%] top-[75%] md:top-[85%] w-24 h-32 md:w-56 md:h-64 rotate-12",
      render: () => (
        <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
          <g transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,99.94363784790039,100.0075159072876)">
            <path d={chalkCurvedArrow3Path} fill="#ffffff" opacity="0.9" />
          </g>
        </svg>
      )
    }
  },
  { 
    icon: <LayoutDashboard size={32} color="currentColor" />, 
    title: "Customize Your Space", 
    desc: "Design your Crowd to match your brand. Choose your layout and content organization to give fans a premium experience.", 
    mark: 'X',
    arrow: {
      classes: "left-1/2 -translate-x-1/2 top-[65%] md:top-[70%] w-48 h-56 md:w-72 md:h-72", 
      render: () => (
        <svg viewBox="0 0 156 156" width="100%" height="100%" preserveAspectRatio="none">
          <g transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,155.99546432495117,155.9603729248047)">
            <path d="m106.86 49.94c-7.94 4.32-14.69 10.63-22.35 15.42-7.51 4.69-14.51 10.35-21.32 15.93-13.81 11.29-26.42 24.55-34.93 40.29-1.13 2.09 1.63 4.36 3.35 2.58 12.16-12.67 24.65-25 37.35-37.1q9.27-8.86 18.8-17.49c6.72-6.07 14.43-11 21.06-17.09 1.38-1.28-.39-3.4-1.96-2.54z" fill="#ffffff" opacity="0.9" />
            <path d="m127.86 33.82a2.72 2.72 0 0 0 -3.38-2.58c-8.3 1.32-16.78 1.93-24.81 4.52a1.88 1.88 0 0 0 1 3.63c7.23-1.53 14.54-1.72 21.83-2.55 0 2.74 0 5.49-.14 8.24-.13 3.75-.9 7.53-.47 11.26.21 1.76 2.89 3.12 3.81 1 3.12-6.98 2.16-16 2.16-23.52z" fill="#ffffff" opacity="0.9" />
          </g>
        </svg>
      )
    }
  },
  { 
    icon: <ListOrdered size={32} color="currentColor" />, 
    title: "Challenge Your Fans", 
    desc: "Sports fans love a good rivalry. Every Crowd features built-in leaderboards to tap into that competitive spirit, encouraging your audience to interact, engage, and battle it out for the top spot.", 
    mark: 'O',
    arrow: {
      classes: "left-[-5%] md:left-[-15%] top-[70%] md:top-[80%] w-40 h-48 md:w-64 md:h-64 transform -scale-x-100",
      render: () => (
        <svg viewBox="0 0 156 156" width="100%" height="100%" preserveAspectRatio="none">
          <g transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,155.98687744140625,155.99053192138672)">
            <path d="m99 32.11c-25.22-10.36-50.8 2-62.67 25.2-12.08 23.62-10.59 54.9 2.06 77.91 2.64 4.79 9.33.59 7.19-4.2-9.34-20.93-11.15-45.7-2-67a47.94 47.94 0 0 1 19.26-22.3c11.25-6.91 23-5.86 35.47-4.79 3 .26 2.99-3.86.69-4.82z" fill="#ffffff" opacity="0.9" />
            <path d="m126.56 36.18c-10.17-6.91-21-15.32-33.42-17.48a1.75 1.75 0 0 0 -.93 3.37c10.44 4.1 19.32 10.16 28.2 16.77-5.64 4.49-12.15 8.18-17 13.46a2.71 2.71 0 0 0 3.27 4.23 92.87 92.87 0 0 0 20.44-15.75 3 3 0 0 0 -.56-4.6z" fill="#ffffff" opacity="0.9" />
          </g>
        </svg>
      )
    }
  },
  { 
    icon: <GearSVG size={32} className="text-currentColor" />, 
    title: "Creator Hub", 
    desc: "Command your empire from one toolkit. Get granular control over who accesses your community, seamlessly sync your existing website subscribers, and tap into powerful business tools built to help you win.", 
    mark: 'X',
    arrow: null
  }
];

// Data for the Clock 'Up Your Game' Section
const clockFeatures = [
  {
    index: 0,
    position: 12,
    icon: <KeepYourMoneySVG />,
    title: "Monetize",
    desc: "Turn your passion into profit. Set your own subscription prices and keep the lion's share of your revenue. It's your franchise, build it your way!",
  },
  {
    index: 1,
    position: 3,
    icon: <ExclusiveContentSVG />, // Using the new custom SVG
    title: "Exclusive Content",
    desc: "Post articles, videos, and podcasts directly to your Crowds and Spaces. You have total control over who gets access to your premium content.",
  },
  {
    index: 2,
    position: 6,
    icon: <ShoppingCart />,
    soon: true,
    title: "Sell Stuff",
    desc: "Launch your own digital storefront directly inside your Crowd. Selling custom apparel or premium guides has never been easier.",
  },
  {
    index: 3,
    position: 9,
    icon: <SellAdSpaceSVG />, // Using the new custom SVG
    title: "Sell Ad Space",
    desc: "You own your audience, which means you own the ad space. Place custom ads directly in front of your fans and keep 100% of the revenue.",
  }
];

// Calculate absolute positions for a 12-hour clock face
const clockPositions = [
  { pos: 12, top: '0%', left: '50%' },
  { pos: 1, top: '6.7%', left: '75%' },
  { pos: 2, top: '25%', left: '93.3%' },
  { pos: 3, top: '50%', left: '100%' },
  { pos: 4, top: '75%', left: '93.3%' },
  { pos: 5, top: '93.3%', left: '75%' },
  { pos: 6, top: '100%', left: '50%' },
  { pos: 7, top: '93.3%', left: '25%' },
  { pos: 8, top: '75%', left: '6.7%' },
  { pos: 9, top: '50%', left: '0%' },
  { pos: 10, top: '25%', left: '6.7%' },
  { pos: 11, top: '6.7%', left: '25%' },
];

export default function CreatorsPage() {
  const [pricingInterval, setPricingInterval] = useState('yearly');
  const [activeModalFeature, setActiveModalFeature] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeGameStep, setActiveGameStep] = useState(0);
  
  // Game Plan Sticky Scroll State
  const gamePlanRef = useRef(null);
  const [gamePlanProgress, setGamePlanProgress] = useState(0);

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined') {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!gamePlanRef.current) return;
      const { top, height } = gamePlanRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (top > 0) {
        setGamePlanProgress(0);
        return;
      }
      
      if (-top > height - windowHeight) {
        setGamePlanProgress(1);
        return;
      }
      
      const p = -top / (height - windowHeight);
      setGamePlanProgress(Math.max(0, Math.min(1, p)));
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeGamePlanIndex = Math.min(Math.floor(gamePlanProgress * 5), 4);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#0a0a0a] min-h-screen flex flex-col font-sans selection:bg-[#a3e635] selection:text-black overflow-x-clip">
      <GlobalStyles />
      
      {/* Custom Keyframes for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes soft-fade-in {
          0% { opacity: 0; transform: translateY(15px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-text-fade {
          animation: soft-fade-in 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes clock-pulse {
          0%, 8.33%, 100% { 
            transform: translate(-50%, -50%) scale(1); 
            filter: brightness(1) drop-shadow(0 0 0px rgba(163,230,53,0)); 
          }
          4.16% { 
            transform: translate(-50%, -50%) scale(1.1); 
            filter: brightness(1.3) drop-shadow(0 0 20px rgba(163,230,53,0.8)); 
          }
        }
        .animate-clock-pulse {
          animation: clock-pulse 12s infinite linear;
        }
      `}} />

      <Header />
      
      <main className="flex-1 w-full relative">
        <section className="relative w-full pt-24 pb-48 flex items-center justify-center overflow-hidden min-h-[70vh] md:min-h-[80vh]" onMouseMove={handleMouseMove}>
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 transition-transform duration-200 ease-out" style={{ transform: `scale(1.1) translate(${mousePos.x}px, ${mousePos.y}px)` }}>
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          
          {/* Base darkening */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Smooth gradient fade to #050505 at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>
          
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto w-full pb-20">
            <RevealOnScroll animation="zoom-in">
              <div className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full border border-gray-700 bg-black/60 backdrop-blur-md shadow-lg mb-6">
                <Zap size={14} className="text-[#a3e635] fill-[#a3e635]" /> 
                <span className="text-white text-xs font-bold uppercase tracking-widest">Your Dynasty Begins</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none text-white drop-shadow-lg">
                MAKE COMMUNITY.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-green-400">MAKE MONEY.</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                Give your fans exclusive access, simplify how they connect with you, and enjoy tools designed specifically for your success.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="relative z-20 -mt-40 pt-10 pb-24 px-6 bg-gradient-to-b from-transparent via-[#050505] to-[#050505]">
          <div className="max-w-6xl mx-auto relative z-10">
            <RevealOnScroll className="mb-16 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                EVERYTHING YOU NEED<br/>
                <span className="text-[#a3e635]">IN A SINGLE APP.</span>
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <RevealOnScroll delay={0} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#1877F2]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 w-fit flex items-center gap-4 mb-6">
                  <div className="text-[#1877F2] relative z-10"><FacebookSVG size={40} /></div>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Facebook</h3>
                  <UserBrushSVG className="absolute top-[50%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                  <ScratchSVG className="absolute top-[60%] left-0 w-[115%] -ml-[7.5%] -translate-y-1/2 h-[20px] md:h-[24px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-30" />
                </div>

                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium max-w-xl leading-relaxed mb-6">
                  Avoid all the politics, Crossfit workouts, advertisements, and other bullsh*t that annoys you on other social media platforms.
                </p>
                <div className="relative z-10 mt-auto pt-4">
                  <Link href="/compare/facebook" className="text-[#a3e635] font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all before:absolute before:inset-0">
                    Why Facebook is Lame <ArrowRight size={14} />
                  </Link>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#FF4500]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D93A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 w-fit flex items-center gap-4 mb-6">
                  <div className="text-[#FF4500] relative z-10"><RedditSVG size={48} /></div>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Reddit</h3>
                  <UserBrushSVG className="absolute top-[50%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                  <ScratchSVG className="absolute top-[60%] left-0 w-[115%] -ml-[7.5%] -translate-y-1/2 h-[20px] md:h-[24px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-30" />
                </div>

                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-6">
                  Tired of the trolls and no way to be rewarded for all your hard work? Get the same sense of community but with added benefits suited specifically to your needs.
                </p>
                <div className="relative z-10 mt-auto pt-4">
                  <Link href="/compare/reddit" className="text-[#a3e635] font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all before:absolute before:inset-0">
                    See why to punt Reddit <ArrowRight size={14} />
                  </Link>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={200} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#FF424D]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF424D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 w-fit flex items-center gap-4 mb-6">
                  <div className="text-[#FF424D] relative z-10"><PatreonSVG size={40} /></div>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Patreon</h3>
                  <UserBrushSVG className="absolute top-[50%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                  <ScratchSVG className="absolute top-[60%] left-0 w-[115%] -ml-[7.5%] -translate-y-1/2 h-[20px] md:h-[24px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-30" />
                </div>

                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-6">
                  "Thanks for joining us on this platform. Now go download another app to interact with your community and monetize it on the same platform!" Uh, no thanks! Create your community and monetize it on the same platform!
                </p>
                <div className="relative z-10 mt-auto pt-4">
                  <Link href="/compare/patreon" className="text-[#a3e635] font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all before:absolute before:inset-0">
                    See what Patreon is missing <ArrowRight size={14} />
                  </Link>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={300} className="relative group rounded-3xl overflow-hidden bg-[#111] border border-[#5865F2]/50 hover:border-[#a3e635] transition-all duration-300 p-8 md:p-10 flex flex-col justify-start shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 w-fit flex items-center gap-4 mb-6">
                  <div className="text-[#5865F2] relative z-10"><DiscordSVG size={40} /></div>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">Discord</h3>
                  <UserBrushSVG className="absolute top-[50%] left-0 w-[110%] -ml-[5%] -translate-y-1/2 h-[16px] md:h-[20px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-20" />
                  <ScratchSVG className="absolute top-[60%] left-0 w-[115%] -ml-[7.5%] -translate-y-1/2 h-[20px] md:h-[24px] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 pointer-events-none z-30" />
                </div>

                <p className="relative z-10 text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-6">
                  What the F*$% is Discord?! Stop confusing your fans by setting up Spaces or 1-on-1 message without ever leaving the site or having to download and learn a separate (confusing) app.
                </p>
                <div className="relative z-10 mt-auto pt-4">
                  <Link href="/compare/discord" className="text-[#a3e635] font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all before:absolute before:inset-0">
                    See why Discord sucks <ArrowRight size={14} />
                  </Link>
                </div>
              </RevealOnScroll>

            </div>
          </div>
        </section>

        {/* CLOCK / UP YOUR GAME SECTION */}
        <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#a3e635]/5 -skew-y-6 transform-gpu pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Side: Header & Subheader */}
            <div className="text-center lg:text-left lg:pr-10">
              <RevealOnScroll>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 text-white leading-[0.9]">
                  TIME TO <br className="hidden lg:block"/>UP YOUR GAME
                </h2>
                <p className="text-gray-400 font-medium text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Execute a winning game plan. Select a play on the clock to see how we help you dominate every second of the game.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right Side: The Floating Clock */}
            <RevealOnScroll delay={100} className="w-full flex justify-center mt-8 lg:mt-0">
               <div className="relative w-full max-w-[340px] md:max-w-[480px] aspect-square mx-auto z-10">

                  {/* Inner Content Area (Text in the middle) */}
                  <div className="absolute inset-[15%] md:inset-[20%] rounded-full flex flex-col items-center justify-center p-2 text-center z-20">
                     <div key={activeGameStep} className="animate-text-fade flex flex-col items-center w-full">
                       {clockFeatures[activeGameStep].soon && (
                          <span className="inline-block bg-[#a3e635] text-black text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm mb-2 shadow-[0_0_15px_rgba(163,230,53,0.6)]">
                            Coming Soon
                          </span>
                       )}
                       <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight mb-2 md:mb-3 leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                         {clockFeatures[activeGameStep].title}
                       </h3>
                       <p className="text-gray-300 text-xs md:text-sm font-medium leading-relaxed max-w-[220px] md:max-w-[280px] mx-auto">
                         {clockFeatures[activeGameStep].desc}
                       </p>
                     </div>
                  </div>

                  {/* Floating Clock Markers & Icons */}
                  <div className="absolute inset-2 md:inset-4">
                    {clockPositions.map(({pos, top, left}) => {
                      const feature = clockFeatures.find(f => f.position === pos);
                      const isIcon = !!feature;
                      const isActive = feature && activeGameStep === feature.index;
                      
                      // Maps positions 12, 1, 2... to 0, 1, 2 for sequential delays on a 12s loop (1s pulse each)
                      const delayIndex = pos === 12 ? 0 : pos;

                      return (
                        <div 
                          key={pos}
                          className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center animate-clock-pulse"
                          style={{ top, left, animationDelay: `${delayIndex * 1}s` }}
                        >
                          {isIcon ? (
                             <button 
                               onClick={() => setActiveGameStep(feature.index)}
                               className={`w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 border border-[#a3e635]/30 ${
                                 isActive 
                                   ? 'bg-[#a3e635] text-black scale-110 shadow-[0_0_30px_rgba(163,230,53,0.9),inset_0_0_15px_rgba(255,255,255,0.4)] border-[#a3e635]' 
                                   : 'bg-[#050505]/80 backdrop-blur-md text-[#a3e635] hover:bg-[#a3e635]/10 hover:border-[#a3e635] hover:scale-105 shadow-[0_0_15px_rgba(163,230,53,0.1)] hover:shadow-[0_0_25px_rgba(163,230,53,0.4)]'
                               }`}
                             >
                               {React.cloneElement(feature.icon, { size: isActive ? 28 : 24 })}
                             </button>
                          ) : (
                             <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#a3e635] shadow-[0_0_12px_rgba(163,230,53,1),0_0_4px_rgba(255,255,255,0.6)]"></div>
                          )}
                        </div>
                      )
                    })}
                  </div>

               </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* COMBINED GAME PLAN & PLAYBOOK SECTION - STICKY TELESTRATOR LAYOUT */}
        <section ref={gamePlanRef} className="relative w-full h-[500vh] bg-[#111]">
          <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
            
            {/* Chalkboard Background - Pans slightly up as you scroll to enhance movement */}
            <div 
              className="absolute inset-0 bg-center bg-cover opacity-50 filter grayscale mix-blend-luminosity scale-[1.15]"
              style={{ 
                backgroundImage: `url('https://admin.beasellout.com/wp-content/uploads/2026/01/Super-Bowl-American-Football-Concept-scaled.jpg')`,
                transform: `translateY(-${gamePlanProgress * 10}%)`
              }}
            />
            {/* Gradient blends the top into #0a0a0a, then drops down to #111 at the bottom so it flows perfectly into Tools */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111]/60 to-[#111] z-0 pointer-events-none"></div>
            
            {/* Section Header */}
            <div className="relative z-20 text-center mt-24 md:mt-32 shrink-0 px-4 pointer-events-none">
              <h2 className="text-[#a3e635] text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2 drop-shadow-md">
                THE GAME PLAN
              </h2>
              <p className="text-gray-300 font-medium text-lg md:text-xl max-w-2xl mx-auto">
                Features designed strategically to give you the upper hand.
              </p>
            </div>

            {/* Playbook Canvas Area */}
            <div className="relative z-10 w-full flex-1 max-w-6xl mx-auto flex items-start justify-center pt-[5vh] md:pt-[10vh] px-4">
               {gamePlanFeatures.map((feat, i) => {
                 const isActive = activeGamePlanIndex === i;
                 const isPast = activeGamePlanIndex > i;
                 const isNext = activeGamePlanIndex === i - 1;
                 const isEven = i % 2 === 0;

                 // Alternate sides and tilt for the zig-zag effect
                 const alignClass = isEven ? 'mr-auto md:ml-12 lg:ml-24' : 'ml-auto md:mr-12 lg:mr-24';
                 const tiltClass = isEven ? '-rotate-1 md:-rotate-2' : 'rotate-1 md:rotate-2';

                 // Calculate specific progress for the drawing arrow between this card and the next
                 let itemProgress = (gamePlanProgress * 5) - i;
                 if (itemProgress < 0) itemProgress = 0;
                 if (itemProgress > 1) itemProgress = 1;
                 
                 // Clip path draws from top to bottom based on progress
                 const clipPercentage = itemProgress * 100;

                 // State logic handles bringing it up from the bottom, freezing it in the center, then pushing it off the top
                 let stateClass = '';
                 if (isActive) {
                   stateClass = 'opacity-100 translate-y-0 scale-100 z-30';
                 } else if (isNext) {
                   stateClass = 'opacity-40 translate-y-[40vh] md:translate-y-[45vh] scale-95 z-10 pointer-events-none blur-[1px]';
                 } else if (isPast) {
                   stateClass = 'opacity-0 -translate-y-[30vh] scale-95 z-0 pointer-events-none';
                 } else {
                   stateClass = 'opacity-0 translate-y-[60vh] scale-90 z-0 pointer-events-none';
                 }

                 return (
                   <div 
                     key={i}
                     className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full max-w-[90%] md:max-w-xl ${stateClass}`}
                   >
                      <div className={`w-full ${alignClass} ${tiltClass} relative`}>
                         
                         {/* Hand-Drawn Chalk Arrow - Driven by the config object for each card */}
                         {feat.arrow && (
                           <div 
                             className={`absolute pointer-events-none z-40 ${feat.arrow.classes}`}
                             style={{ 
                               clipPath: `polygon(0 0, 100% 0, 100% ${clipPercentage}%, 0 ${clipPercentage}%)`,
                               filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' 
                             }}
                           >
                             {feat.arrow.render()}
                           </div>
                         )}

                         {/* Content Card */}
                         <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border-2 border-gray-800 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left flex flex-col relative overflow-hidden group">
                           {/* Big background Mark (X or O) */}
                           <div className="absolute -right-6 -bottom-6 text-[180px] md:text-[220px] font-black text-white/5 select-none pointer-events-none leading-none">
                             {feat.mark}
                           </div>
                           
                           {/* Card Header (Icon + Title) */}
                           <div className="flex items-center gap-4 md:gap-5 mb-5 relative z-10">
                             <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] flex items-center justify-center shrink-0 border border-gray-800 text-[#a3e635] shadow-inner">
                               {feat.icon}
                             </div>
                             <h4 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">{feat.title}</h4>
                           </div>
                           
                           <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium relative z-10">{feat.desc}</p>
                         </div>
                      </div>
                   </div>
                 )
               })}
            </div>

            {/* Playbook CTA - Fades in gracefully with the final card */}
            <div 
              className={`absolute bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out w-[90%] md:w-auto flex flex-col items-center text-center z-40 ${
                activeGamePlanIndex === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
              }`}
            >
              <p className="text-base md:text-xl font-medium mb-4 text-white drop-shadow-lg">Want to see what we are drawing up and even suggest more features?</p>
              <a href="https://playbook.selloutcrowds.com" target="_blank" rel="noopener noreferrer" className="bg-[#a3e635] text-black px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:shadow-[0_0_40px_rgba(163,230,53,0.6)] flex items-center gap-2 hover:-translate-y-1">
                View Playbook <ArrowRight size={18}/>
              </a>
            </div>

            {/* Progress Indicator Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
              {gamePlanFeatures.map((_, index) => (
                <div 
                  key={`dot-${index}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeGamePlanIndex === index ? 'w-8 bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.8)]' : 'w-2 bg-gray-700'
                  }`}
                ></div>
              ))}
            </div>

          </div>
        </section>

        {/* TEAMMATE / TOOLS SECTION */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden flex flex-col items-center bg-[#111]">
          {/* Background Image with Parallax (bg-fixed) */}
          <div 
            className="absolute inset-0 bg-center bg-cover bg-fixed opacity-30 grayscale mix-blend-luminosity"
            style={{ backgroundImage: `url('https://admin.beasellout.com/wp-content/uploads/2025/04/wepik-202159-213820.webp')` }}
          />
          
          {/* Green Overlay */}
          <div className="absolute inset-0 bg-[#a3e635]/15 pointer-events-none mix-blend-color"></div>

          {/* Gradient to blend with top and bottom sections */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-[#111] pointer-events-none"></div>

          {/* Subtle abstract background graphic */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a3e635]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mb-16">
            <RevealOnScroll>
              <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black uppercase tracking-tighter leading-[0.9] text-[#a3e635] mb-4 drop-shadow-2xl">
                WE'RE <br className="md:hidden" />ROOTING <br className="md:hidden" />FOR YOU!
              </h2>
              <p className="text-white font-black uppercase tracking-widest text-sm md:text-xl drop-shadow-md">
                LIKE ANY GOOD TEAMMATE, WE WILL HELP YOU SUCCEED
              </p>
            </RevealOnScroll>
          </div>

          {/* Tools Grid inside the Team section */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Play size={22} color="currentColor" fill="currentColor" />, title: "YouTube Sync", desc: "Automatically sync your YouTube videos to your Crowd. No need to post twice." },
              { icon: <WordpressSVG size={24} className="text-currentColor" />, title: "WordPress Plugin", desc: "Post articles directly from your WordPress site, saving you precious time." },
              { icon: <Users size={22} color="currentColor" />, title: "Add Existing Users", desc: "Easily give access to your existing subscribers from other platforms." },
              { icon: <Contact size={22} color="currentColor" />, title: "Digital Business Card", desc: "A sleek digital card to share your Crowd and social links seamlessly." },
              { icon: <Link2 size={22} color="currentColor" />, title: "Link in Bio Page", desc: "A customizable landing page to funnel all your social traffic directly to your Crowd." },
              { icon: <Book size={22} color="currentColor" />, title: "Address Book", desc: "Keep track of your top fans and brand partners in one organized place." },
              { icon: <Mail size={22} color="currentColor" />, title: "Email Signatures", desc: "Generate a professional email signature promoting your Crowd.", soon: true },
              { icon: <Send size={22} color="currentColor" />, title: "Newsletter Engine", desc: "Send beautifully crafted newsletters directly to your Crowd members.", soon: true }
            ].map((tool, i) => (
              <RevealOnScroll key={i} delay={i * 50}>
                <div className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 hover:border-[#a3e635]/30 rounded-2xl p-5 transition-all duration-300 flex flex-col items-center text-center group shadow-lg h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#111] flex items-center justify-center border border-gray-800 group-hover:border-[#a3e635] group-hover:text-[#a3e635] text-gray-400 transition-colors mb-4 shadow-inner">
                    {tool.icon}
                  </div>
                  <h4 className="text-base font-black tracking-tight mb-2 text-white group-hover:text-white transition-colors">{tool.title}</h4>
                  {tool.soon && <span className="inline-block text-[9px] font-black uppercase tracking-widest text-black bg-[#a3e635] px-2 py-1 rounded-sm mb-3 shadow-sm">Coming Soon</span>}
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">{tool.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="w-full bg-[#111] py-24 px-4 relative shadow-2xl">
          <div className="max-w-7xl mx-auto text-center">
            
            <div className="transition-all duration-500 opacity-100 h-auto mb-12">
              <RevealOnScroll>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
                  YOUR FANS ARE WAITING
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-medium text-sm md:text-base">
                  Build your Crowd. Build your income. Choose the plan that gives you the tools to grow, engage, and monetize your fans.
                </p>
                <div className="inline-block bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/50 px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-sm">
                  Commit for a year and save 14-33%
                </div>
              </RevealOnScroll>
            </div>

            {/* Interval Toggle */}
            <RevealOnScroll delay={100}>
              <div className="flex justify-center items-center gap-2 mb-12 bg-gray-900 p-1.5 rounded-full inline-flex border border-gray-800">
                {['yearly', 'monthly'].map((type) => (
                  <button 
                    key={type}
                    onClick={() => setPricingInterval(type)}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${pricingInterval === type ? 'bg-[#a3e635] text-black shadow-md' : 'text-gray-500 hover:text-white'}`}
                  >
                    {type === 'yearly' ? 'Yearly' : 'Monthly'}
                  </button>
                ))}
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left relative z-10">
              
              <RevealOnScroll delay={0} className="relative z-20 transform md:-translate-y-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#a3e635] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md whitespace-nowrap z-30">
                  Most Valuable
                </div>
                <div className="bg-[#1a1a1a] border-2 border-[#a3e635] rounded-2xl p-6 flex flex-col h-full shadow-[0_10px_30px_rgba(163,230,53,0.1)] relative overflow-hidden">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-white">H.O.F.</h3>
                  <div className="text-4xl font-black text-[#a3e635] mb-6 flex items-baseline">
                    ${pricingInterval === 'yearly' ? '85' : '100'}
                    <span className="text-xs text-gray-500 font-medium ml-1">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-2 flex-1">
                    {[
                      {text: "Brand Badge", available: true},
                      {text: "Unlimited Crowds", available: true},
                      {text: "6% commissions", available: true},
                      {text: "6 Teammates Included", available: true},
                      {text: "Place Ads in Crowd", available: true},
                      {text: "WordPress Plugin", available: true},
                      {text: "YouTube Auto-Import", available: true},
                      {text: "Sell on marketplace", available: true},
                      {text: "Link in Bio Page", available: true},
                      {text: "Digital Business Card", available: true},
                      {text: "Address Book", available: true},
                      {text: "Onboarding setup", available: true}
                    ].map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 text-xs font-medium ${!feature.available ? 'text-gray-600 opacity-60' : 'text-gray-300'}`}>
                        <div className="shrink-0 mt-0.5">
                          {feature.available ? <Check size={14} className="text-[#a3e635] font-bold"/> : <X size={14} className="text-gray-600"/>}
                        </div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100}>
                <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col h-full border border-gray-800 hover:border-gray-600 transition-all">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-white">All-Star</h3>
                  <div className="text-3xl font-black text-white mb-6 flex items-baseline">
                    ${pricingInterval === 'yearly' ? '42' : '50'}
                    <span className="text-xs text-gray-500 font-medium ml-1">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-2 flex-1">
                    {[
                      {text: "Brand Badge", available: true},
                      {text: "3 Crowds", available: true},
                      {text: "8% commissions", available: true},
                      {text: "3 Teammates Included", available: true},
                      {text: "Place Ads in Crowd", available: true},
                      {text: "WordPress Plugin", available: true},
                      {text: "YouTube Auto-Import", available: true},
                      {text: "Sell on marketplace", available: true},
                      {text: "Link in Bio Page", available: true},
                      {text: "Digital Business Card", available: true},
                      {text: "Address Book", available: true},
                      {text: "Onboarding setup", available: false}
                    ].map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 text-xs font-medium ${!feature.available ? 'text-gray-600 opacity-60' : 'text-gray-400'}`}>
                        <div className="shrink-0 mt-0.5">
                          {feature.available ? <Check size={14} className="text-white"/> : <X size={14} className="text-gray-600"/>}
                        </div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col h-full border border-gray-800 hover:border-gray-600 transition-all">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-white">Rookie</h3>
                  <div className="text-3xl font-black text-white mb-6 flex items-baseline">
                    ${pricingInterval === 'yearly' ? '16' : '19'}
                    <span className="text-xs text-gray-500 font-medium ml-1">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-2 flex-1">
                    {[
                      {text: "Brand Badge", available: true},
                      {text: "1 Crowd", available: true},
                      {text: "10% commissions", available: true},
                      {text: "No Teammates Included", available: false},
                      {text: "Place Ads in Crowd", available: false},
                      {text: "WordPress Plugin", available: false},
                      {text: "YouTube Auto-Import", available: false},
                      {text: "Link in Bio Page", available: true},
                      {text: "Digital Business Card", available: true},
                      {text: "Address Book", available: true},
                      {text: "Onboarding setup", available: false}
                    ].map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 text-xs font-medium ${!feature.available ? 'text-gray-600 opacity-60' : 'text-gray-400'}`}>
                        <div className="shrink-0 mt-0.5">
                          {feature.available ? <Check size={14} className="text-white"/> : <X size={14} className="text-gray-600"/>}
                        </div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col h-full border border-gray-800 hover:border-gray-600 transition-all">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-white">Expansions</h3>
                  <div className="text-[10px] uppercase tracking-widest text-[#a3e635] font-bold mb-6 mt-2">
                    Available for all tiers
                  </div>
                  <ul className="space-y-3 mb-2 flex-1">
                    {[
                      {text: "Sync Existing Subscribers ($0.50 per fan)", available: true},
                      {text: "Add teammates ($2/month per Teammate)", available: true}
                    ].map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 text-xs font-medium ${!feature.available ? 'text-gray-600 opacity-60' : 'text-gray-400'}`}>
                        <div className="shrink-0 mt-0.5">
                          {feature.available ? <Check size={14} className="text-white"/> : <X size={14} className="text-gray-600"/>}
                        </div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

            </div>

            {/* Generic Build Crowd CTA */}
            <RevealOnScroll delay={400} className="mt-12 flex justify-center relative z-10">
              <a 
                href="https://www.selloutcrowds.com/create-crowd-profile" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#a3e635] text-black px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:shadow-[0_0_30px_rgba(163,230,53,0.6)] flex items-center gap-2 hover:-translate-y-1"
              >
                Build Your Crowd <ArrowRight size={18}/>
              </a>
            </RevealOnScroll>
            
          </div>
        </section>
      </main>

      <Footer />
      <FeatureModal feature={activeModalFeature} onClose={() => setActiveModalFeature(null)} />
      
    </div>
  );
}