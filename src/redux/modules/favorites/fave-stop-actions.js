export const FAVE_STOP = 'FAVE_STOP'
export const POPU_STOPS = 'POPU_STOPS'
export const REMOVE_LOCAL_STOP = 'REMOVE_LOCAL_STOP'
export const REMOVE_FAVE_STOP = 'REMOVE_FAVE_STOP'
export const TOGGLE_STOP = 'TOGGLE_STOP'

//@app.route('/api/v2/stops/<stopId>')

export function faveStop(routeId) {
	return {
		type: FAVE_STOP,
		routeId: routeId
	}
}

export function localStops() {
	return {
		type:POPU_STOPS
	}
}

export function removeLocalStops() {
	return {
		type: REMOVE_LOCAL_STOP
	}
}

export function removeFaveStop(routeId) {
	return {
		type: REMOVE_FAVE_STOP,
		routeId: routeId
	}
}

export function toggleFaveStop(routeId) {
	return {
		type: TOGGLE_STOP,
		routeId: routeId
	}
}