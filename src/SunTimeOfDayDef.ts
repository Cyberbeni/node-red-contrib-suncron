import * as NodeRED from 'node-red'
import { SunEvent } from './SuncronLocationDef'

export interface SunTimeOfDayDataPoint {
	event: SunEvent | 'midnight'
	offset: number
}

export interface SunTimeOfDayConfig extends NodeRED.NodeDef {
	location: string
	dataPoints: Array<SunTimeOfDayDataPoint>
}
