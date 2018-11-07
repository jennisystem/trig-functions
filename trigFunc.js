function quad( a ) {
	return ( 2.5 - ( 1.5 * Math.round( ( Math.abs( a ) * ( 1 / a ) ) ) ) ) + Math.floor( ( a % 360 ) / 90 );
}

function ra( a ) {
	return Math.abs( ( quad( a ) + 1 ) % 2 * 90 - ( a % 90 ) );
}

function allVals( a ) {
	return {
		'sin' : ( quad( a ) === 1 || quad( a ) === 2 ? 1 : -1 ) * Math.sin( ra( a ) * Math.PI / 180 ),
		'csc' : ( quad( a ) === 1 || quad( a ) === 2 ? 1 : -1 ) * 1 / Math.sin( ra( a ) * Math.PI / 180 ),
		'cos' : ( quad( a ) === 1 || quad( a ) === 4 ? 1 : -1 ) * Math.cos( ra( a ) * Math.PI / 180 ),
		'sec' : ( quad( a ) === 1 || quad( a ) === 4 ? 1 : -1 ) * 1 / Math.cos( ra( a ) * Math.PI / 180 ),
		'tan' : ( quad( a ) === 1 || quad( a ) === 3 ? 1 : -1 ) * Math.tan( ra( a ) * Math.PI / 180 ),
		'cot' : ( quad( a ) === 1 || quad( a ) === 3 ? 1 : -1 ) * 1 / Math.tan( ra( a ) * Math.PI / 180 ),
	}
}

function reportAngle( a ) {
	console.log( a.toString() + " is in quadrant " + quad( a ).toString() );
	console.log( ra( a ).toString() + " was used as a reference angle" );
	console.log( "Sine: " + ( Math.round( 100 * allVals( a )[ 'sin' ] ) / 100 ).toString() );
	console.log( "Cosine: " + ( Math.round( 100 * allVals( a )[ 'cos' ] ) / 100 ).toString() );
	console.log( "Tangent: " + ( Math.round( 100 * allVals( a )[ 'tan' ] ) / 100 ).toString() );
	console.log( "Cosecant: " + ( Math.round( 100 * allVals( a )[ 'csc' ] ) / 100 ).toString() );
	console.log( "Secant: " + ( Math.round( 100 * allVals( a )[ 'sec' ] ) / 100 ).toString() );
	console.log( "Cotangent: " + ( Math.round( 100 * allVals( a )[ 'cot' ] ) / 100 ).toString() );
}