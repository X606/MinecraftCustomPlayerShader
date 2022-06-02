#version 300 es
in vec4 aVertexPosition;

uniform sampler2D uSkinSampler;

out vec2 pos;
out lowp float hasSpecialEnableColor;

void main() {
  hasSpecialEnableColor = ((texelFetch(uSkinSampler, ivec2(0,0), 0).rgb*255.0) != vec3(141,61,147)) ? 0.0 : 1.0;

  pos = vec2(1,-1) * aVertexPosition.xy*0.5 + 0.5;
  gl_Position = aVertexPosition;
}
