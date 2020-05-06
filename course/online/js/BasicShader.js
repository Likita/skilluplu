TextureShader = {
	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
 			"gl_Position = projectionMatrix * mvPosition;",

		"}"

	].join("\n"),

	fragmentShader: [
		"uniform sampler2D u_Sampler;",
  		"varying vec2 vUv;",

		"void main() {",

			"gl_FragColor = texture2D(u_Sampler, vUv);",
			
		"}"

	].join("\n")

};
