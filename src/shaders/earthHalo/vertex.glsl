uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;

uniform float fresnelBias;
uniform float fresnelScale;
uniform float fresnelPower;

uniform vec3 color1;
uniform vec3 color2;
varying vec3 uColor1;
varying vec3 uColor2;
  
varying float vReflectionFactor;
  
void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
    vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
    vec3 I = worldPosition.xyz - cameraPosition;
  
    vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
    uColor1 = color1
    uColor2 = color2
  
    gl_Position = projectionMatrix * mvPosition;
} 
