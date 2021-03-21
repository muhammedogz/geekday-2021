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

import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import GithubIcon from '@components/icons/icon-github';
import { Speaker } from '@lib/types';
import styles from './speaker-section.module.css';

const TwitterIcon = () => (
  <svg width={24} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.643 4.93695C22.808 5.30695 21.911 5.55695 20.968 5.66995C21.93 5.09395 22.668 4.17995 23.016 3.09195C22.116 3.62595 21.119 4.01395 20.058 4.22195C19.208 3.31795 17.998 2.75195 16.658 2.75195C14.086 2.75195 12 4.83795 12 7.41195C12 7.77595 12.042 8.12995 12.12 8.47195C8.24701 8.27695 4.81601 6.42195 2.51801 3.60395C2.11801 4.29395 1.88801 5.09395 1.88801 5.94595C1.88801 7.56195 2.71101 8.98895 3.96001 9.82395C3.19601 9.79895 2.47801 9.58995 1.85001 9.24095V9.30095C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95195C21.332 7.75195 21.327 7.54995 21.318 7.34995C22.228 6.69195 23.018 5.87295 23.641 4.93995L23.643 4.93695Z"
      fill="#D8D8D8"
    />
  </svg>
);

const LinkedinIcon = () => (
    <svg width={24} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
        fill="#D8D8D8"
      />
    </svg>
  );

  const WebSite = () => (
    <svg width={24} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"
        fill="#D8D8D8"
      />
    </svg>
  );
  


type Props = {
  speaker: Speaker;
};

export default function SpeakerSection({ speaker }: Props) {
  return (
    <>
      <Link href="/speakers">
        <a className={styles.backlink}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Geri Dön
        </a>
      </Link>
      <div key={speaker.name} className={styles.container}>
        <div style={{ minWidth: '300px' }}>
          <Image
            alt={speaker.name}
            title={speaker.name}
            src={speaker.image.url}
            className={styles.image}
            loading="lazy"
            height={400}
            width={300}
          />
        </div>
        <div className={styles['speaker-details']}>
          <div>
            <h1 className={styles.name}>{speaker.name}</h1>
            <p className={styles.title}>
              {`${speaker.title} @ `}
              <span className={styles.company}>{speaker.company}</span>
            </p>
            <h2 className={styles['bio-header']}>Bio</h2>
            <p className={styles.bio}>{speaker.bio}</p>
            <h3 className={styles['socials-header']}>Sosyal Medya</h3>
            {speaker.web ? (
              <a
                aria-label="Twitter"
                href={speaker.web}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WebSite />
              </a>
            ) : (
              <span className={styles.disabled}>
                <WebSite />
              </span>
            )} <text></text>
            {speaker.twitter ? (
              <a
                aria-label="Twitter"
                href={speaker.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            ) : (
              <span className={styles.disabled}>
                <TwitterIcon />
              </span>
            )} <text></text>
            {speaker.linkedin ? (
              <a
                aria-label="Twitter"
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            ) : (
              <span className={styles.disabled}>
                <LinkedinIcon />
              </span>
            )}
            {speaker.github ? (
              <a
                aria-label="GitHub"
                className={styles.githubIcon}
                href={speaker.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon color="#D8D8D8" size={24} />
              </a>
            ) : (
              <span className={cn(styles.githubIcon, styles.disabled)}>
                <GithubIcon color="#D8D8D8" size={24} />
              </span>
            )}
          </div>
        </div>
      </div>
      {speaker.talk && (
        <div className={styles['talk-details']}>
          <h3 className={styles['socials-header']}>{speaker.talk.title}</h3>
          <p>{speaker.talk.description}</p>
        </div>
      )}
    </>
  );
}
