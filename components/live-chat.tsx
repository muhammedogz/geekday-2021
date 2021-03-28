import dynamic from "next/dynamic"


const TVChartContainer = dynamic(() => import("./live-chat-temp"), { ssr: false })

export default () => {
    return <TVChartContainer />
  }