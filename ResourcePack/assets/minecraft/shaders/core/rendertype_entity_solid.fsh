#version 150

#moj_import <fog.glsl>
#moj_import <customplayerrendering.glsl>

uniform sampler2D Sampler0;

uniform vec4 ColorModulator;
uniform float FogStart;
uniform float FogEnd;
uniform vec4 FogColor;
uniform float GameTime;
uniform vec3 Light0_Direction;
uniform vec3 Light1_Direction;

in float vertexDistance;
in vec4 vertexColor;
in vec4 lightMapColor;
in vec4 overlayColor;
in vec2 texCoord0;
in vec4 normal;
in vec3 unmodifiedNormal;

out vec4 fragColor;

void main()
{
    vec4 color = texture(Sampler0, texCoord0) * vertexColor * ColorModulator;
    color.rgb = mix(overlayColor.rgb, color.rgb, overlayColor.a);
    color *= lightMapColor;
    color = linear_fog(color, vertexDistance, FogStart, FogEnd, FogColor);

    if (hasCustomShaderData(Sampler0))
	{
		sceneData data;
	    data.ColorModulator = ColorModulator;
	    data.FogStart = FogStart;
	    data.FogEnd = FogEnd;
	    data.FogColor = FogColor;
	    data.GameTime = GameTime*8000;
	    data.vertexDistance = vertexDistance;
	    data.vertexColor = vertexColor;
	    data.lightMapColor = lightMapColor;
	    data.overlayColor = overlayColor;
	    data.texCoord0 = texCoord0;
	    data.normal = unmodifiedNormal;
		data.Light0_Direction = Light0_Direction;
		data.Light1_Direction = Light1_Direction;

		color = applyCustomShader(Sampler0, data, color);
	}

    fragColor = color;

}
