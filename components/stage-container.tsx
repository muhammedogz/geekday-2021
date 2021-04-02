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

import useSWR from 'swr';
import cn from 'classnames';
import { Stage } from '@lib/types';
import useLoginStatus from '@lib/hooks/use-login-status';
import styles from './stage-container.module.css';
import styleUtils from './utils.module.css';
import ScheduleSidebar from './schedule-sidebar';
import ConfEntry from './conf-entry';

const openInNewTab = (url: string | undefined) => {
    const newWindow = window.open(url, 'example', 'width=550,height=800');
    if (newWindow) newWindow.opener = null
}

type Props = {
  stage: Stage;
  allStages: Stage[];
};

export default function StageContainer({ stage, allStages }: Props) {
  const response = useSWR('/api/stages', {
    initialData: allStages,
    refreshInterval: 5000
  });

  const updatedStages = response.data || [];
  const updatedStage = updatedStages.find((s: Stage) => s.slug === stage.slug) || stage;
  const { loginStatus, mutate } = useLoginStatus();
// TODO
// Hemen Bilet AL -> Button
  return (
    <div className={styles.container}>
      <div className={styles.streamContainer}>
        <div className={cn(styles.stream, styleUtils.appear, styleUtils['appear-first'])}>
        <iframe
            allow="autoplay; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            src={`${updatedStage.stream}?autoplay=1&mute=1`}
            title={updatedStage.name}
            width="100%"
        />
        <div className={cn(styles.bottom, styleUtils.appear, styleUtils['appear-second'])}>
            <div className={styles.messageContainer}>
            <h2 className={styles.stageName}>{stage.name}</h2>
            </div>
            <a onClick={() => openInNewTab(updatedStage.discord)}

            target="example"
            rel="width=600,height=400"
            className={styles.button}
            >
            <span>Canlı Sohbete Katıl (Pop-up)</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/></svg>
            </a>
        </div>
        </div>
      </div>
      <ScheduleSidebar allStages={updatedStages} />
    </div>
  );
}
