
// uniform vec3 color1;
// uniform vec3 color2;

varying vec3 uColor1;
varying vec3 uColor2;
  
varying float vReflectionFactor;
  
void main() {
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    gl_FragColor = vec4(mix(uColor2, uColor1, vec3(f)), f);

}
