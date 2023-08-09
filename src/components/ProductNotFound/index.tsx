import React from 'react';

import Svg, { G, Path } from 'react-native-svg';

interface ProductNotFound {
  size: number;
  color: string;
}

export function ProductNotFound({ size, color }: ProductNotFound) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 906.000000 682.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <G
        transform="translate(0.000000,682.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <Path
          d="M1830 6525 c-317 -56 -559 -182 -780 -404 -200 -202 -331 -448 -387
   -728 -27 -137 -24 -387 5 -522 64 -286 190 -518 386 -711 36 -35 66 -68 66
   -72 0 -12 -111 -179 -550 -828 -231 -342 -427 -635 -435 -650 -48 -94 18 -209
   129 -225 53 -8 113 19 149 67 66 89 880 1304 921 1375 l48 81 62 -28 c173 -77
   312 -110 470 -110 67 0 116 -4 123 -11 8 -8 42 -7 123 1 340 34 616 163 851
   399 210 212 330 434 389 721 18 89 22 137 21 315 -1 192 -3 217 -27 304 -88
   323 -282 605 -544 788 -146 103 -343 189 -520 228 -101 23 -398 29 -500 10z
   m437 -334 c372 -92 659 -351 780 -703 l36 -103 0 -210 c1 -197 0 -216 -25
   -306 -89 -325 -319 -591 -620 -714 -142 -59 -201 -67 -420 -62 -189 5 -195 6
   -302 41 -414 137 -691 470 -746 896 -8 59 -10 133 -6 193 35 504 393 891 910
   982 107 19 285 12 393 -14z"
        />
        <Path
          d="M2315 5510 l-270 -270 -247 247 -248 248 -45 -45 -45 -45 247 -247
   248 -248 -225 -225 -225 -225 46 -46 46 -45 222 227 222 227 247 -246 247
   -247 45 45 45 45 -245 245 -245 245 270 270 270 270 -45 45 -45 45 -270 -270z"
        />
        <Path
          d="M6575 5978 c-15 -45 -175 -581 -177 -595 -2 -13 19 -24 106 -51 59
   -18 112 -30 116 -25 9 9 193 614 188 618 -5 4 -210 65 -220 65 -5 0 -11 -6
   -13 -12z"
        />
        <Path
          d="M7711 5242 c-195 -175 -356 -323 -358 -329 -2 -6 31 -50 73 -97 l77
   -85 48 42 c26 23 191 170 366 327 l320 285 -80 88 c-44 48 -83 87 -86 87 -3
   -1 -165 -144 -360 -318z"
        />
        <Path
          d="M3556 5074 c-9 -81 -16 -147 -14 -149 2 -1 255 -168 562 -371 l559
   -369 -602 -3 -602 -2 -87 58 -87 59 -36 -46 -37 -46 84 -65 84 -64 0 -1793 c0
   -986 -3 -1793 -7 -1792 -5 0 -284 289 -620 642 l-613 641 0 938 0 938 -65 0
   -65 0 0 -959 0 -958 696 -739 c383 -406 707 -743 720 -749 17 -6 678 4 1935
   31 1866 39 1909 40 1929 59 20 20 20 36 20 1920 0 1044 -3 1902 -7 1905 -5 4
   -407 244 -896 534 l-887 526 -974 0 -973 0 -17 -146z m1354 -436 l673 -453
   -331 -3 -332 -2 -667 446 c-368 246 -672 451 -677 456 -6 4 141 8 325 8 l336
   0 673 -452z m1314 5 c416 -247 756 -451 756 -455 0 -5 -260 -8 -577 -8 l-578
   0 -677 452 c-373 248 -678 453 -678 455 0 1 225 3 499 3 l499 0 756 -447z
   m-536 -1056 l2 -457 -367 2 -368 3 -3 458 -2 457 367 -2 368 -3 3 -458z m1487
   451 c3 -11 25 -3571 21 -3574 -1 -2 -3605 -85 -3633 -84 -10 0 -13 372 -13
   1825 l0 1825 650 0 650 0 0 -500 0 -501 25 -25 25 -25 441 3 441 3 24 28 24
   28 0 505 0 504 670 0 c528 0 672 -3 675 -12z"
        />
        <Path
          d="M8183 4165 c-172 -34 -315 -64 -318 -67 -3 -3 4 -57 16 -120 l21
   -115 287 57 c157 32 302 60 322 64 l36 6 -23 117 c-13 64 -25 117 -27 118 -1
   2 -143 -25 -314 -60z"
        />
        <Path
          d="M7886 3053 c-11 -38 -46 -216 -44 -219 2 -1 210 -46 463 -99 253 -53
   467 -98 475 -101 12 -3 20 20 39 112 13 63 21 117 19 120 -3 2 -209 47 -459
   99 -250 53 -462 98 -471 101 -10 3 -18 -2 -22 -13z"
        />
      </G>
    </Svg>
  );
}
