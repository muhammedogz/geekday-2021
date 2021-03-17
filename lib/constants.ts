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

export const SITE_URL = 'https://geekday.live/';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'gtubt';
export const BRAND_NAME = 'Bilgisayar Topluluğu';
export const SITE_NAME_MULTILINE = ['Geekday', '2021'];
export const SITE_NAME = 'Geekday';
export const META_DESCRIPTION =
  'GTU Bilgisayar Topluluğu"nun düzenlediği 5.Geekday Etkinliği'
export const SITE_DESCRIPTION =
  'Biglisayar Geeklerinin Buluşma Noktası';
export const DATE = '3-4 Nisan, 2021';
export const SHORT_DATE = 'Nisan 3 - 13:45';
export const FULL_DATE = 'Nisan 3 - 13:45';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/Code-of-Conduct-6b5c6f167d8f45bd9f999fc28f44b984';
export const REPO = 'https://github.com/muhammedogz/geekday2021';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Sahne 1',
    route: '/stage/1'
  },
  {
    name: 'Sahne 2',
    route: '/stage/c'
  },
  {
    name: 'Sahne 3',
    route: '/stage/m'
  },
  {
    name: 'Takvim',
    route: '/schedule'
  },
  {
    name: 'Konuşmacılar',
    route: '/speakers'
  },
  {
    name: 'Sponsorlar - Fuaye',
    route: '/expo'
  },
  {
    name: 'Çekilişler',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
