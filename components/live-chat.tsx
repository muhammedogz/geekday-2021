import * as React from 'react'
import WidgetBot from '@widgetbot/react-embed'

const MyComp = () => {

    React.useEffect(() => {
        <WidgetBot
        server="825509154743517195"
        channel="825509230546911292"
        width={400}
        height={400}
      />
    }, []);
  
    return (<div><WidgetBot
        server="825509154743517195"
        channel="825509230546911292"
        width={400}
        height={400}
      /></div>)
  }


  export default MyComp



