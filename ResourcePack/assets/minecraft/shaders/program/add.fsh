#version 150

uniform sampler2D DiffuseSampler;
uniform sampler2D secondarySampler;

uniform vec4 ColorModulate;

in vec2 texCoord;

out vec4 fragColor;

void main(){
    vec4 color1 = texture(DiffuseSampler, texCoord) * ColorModulate;
    vec4 color2 = texture(secondarySampler, texCoord) * ColorModulate;

    fragColor = color1 + color2;
}
