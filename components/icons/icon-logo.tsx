/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default function IconLogo({
  backgroundColor = 'transparent',
  foregroundColor = 'var(--accents-1)',
  ...props
}) {
  return (
    <svg
<<<<<<< HEAD
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
=======
    width="100%" 
    height="100%" 
    viewBox="0 0 682 828"
>>>>>>> old/master
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100%" height="100%" rx="16" fill={backgroundColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
<<<<<<< HEAD
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
=======
        d="M0,0L94,94V376l86,86V610L2,432ZM154,346V199L334,379V807l-93-93V433ZM393,228V625L503,515V304L603,204V19Zm288-7L571,331V541l-99,99V826L680,618Z"
>>>>>>> old/master
        fill={foregroundColor}
      />
    </svg>
  );
}
