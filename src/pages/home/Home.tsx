import BarChartBox from "../../component/BarChartBox/BarChartBox"
import BigChartBox from "../../component/bigChartBox.tsx/BigChartBox"
import ChartBox from "../../component/chartBox/ChartBox"
import PieChartBox from "../../component/pieChartBox/PieChartBox"
import PieChartBox2 from "../../component/pieChartBox2/PIeChartBox2"
import TopBox from "../../component/topBox/TopBox"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./home.scss"
  const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><ChartBox{...chartBoxUser}/></div>
      <div className="box box3"><ChartBox{...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox{...chartBoxConversion}/></div>
      <div className="box box6"><ChartBox{...chartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8">Date : 23/8/2021
                                </div>
      <div className="box box9"><BarChartBox{...barChartBoxVisit} /></div>
    </div>
  )
}
export default Home
