


import Page from '@components/page';
import Hakkinda from '@components/hakkinda';
import { META_DESCRIPTION } from '@lib/constants';



export default function Conf() {
    const meta = {
      title: 'Hakkinda - Geekday',
      description: META_DESCRIPTION
    };
  
    return (
      <Page meta={meta} fullViewport>
        <Hakkinda/>
      </Page>
    );
  }