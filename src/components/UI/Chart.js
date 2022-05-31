import 

import chartBar from './chartBar';

function Chart (props){
    return <div className="chart">
    
    {
        props.dataPoints.map( dataPoint=> <chartBar value={dataPoint.value}/>)
    
    
    }   
    </div>
}