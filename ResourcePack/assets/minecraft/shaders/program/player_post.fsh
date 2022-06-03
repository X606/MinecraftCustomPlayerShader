#version 150

uniform sampler2D DiffuseSampler;
uniform sampler2D DiffuseDepthSampler;

uniform vec4 ColorModulate;

in vec2 texCoord;

out vec4 fragColor;

void main(){
    vec4 color = texture(DiffuseSampler, texCoord) * ColorModulate;

    if (color.r == 1) {
        fragColor = vec4(1,1,1,1);
        return;
    }

    fragColor = vec4(0,0,0,1);
}
