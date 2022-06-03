#moj_import <unusedplayerpixels.glsl>
#moj_import <noise.glsl>
#moj_import <fog.glsl>

const ivec3 CUSTOM_SHADER_COLOR = ivec3(141,61,147);

ivec4 texelFetchAsInts(sampler2D sampler, ivec2 p);

struct sceneData
{
    vec4 ColorModulator;
    float FogStart;
    float FogEnd;
    vec4 FogColor;
    float GameTime;

    float vertexDistance;
    vec4 vertexColor;
    vec4 lightMapColor;
    vec4 overlayColor;
    vec2 texCoord0;
    vec3 normal;

    vec3 Light0_Direction;
    vec3 Light1_Direction;

    vec3 position;
};
struct storedData
{
    vec2 data0;
    vec3 data1;
    vec3 data2;
};

ivec4 texelFetchAsInts(sampler2D sampler, ivec2 p)
{
    return ivec4(texelFetch(sampler, p, 0)*255);
}

bool hasCustomShaderData(sampler2D sampler)
{
    return texelFetchAsInts(sampler, ivec2(0,0)).rgb == CUSTOM_SHADER_COLOR; // On valid skins with custom data the top left pixel will have the value of CUSTOM_SHADER_COLOR
}

vec4 applyAction(int actionId, vec4 data, vec4 litOgColor, ivec4 minmax, sampler2D sampler0, sceneData scene, storedData stored)
{
    float genericDataFloat = data.a;

    vec4 rawOgColor = texelFetch(sampler0, ivec2(floor(scene.texCoord0*64)), 0);
    vec4 unlitOgColor = texture(sampler0, scene.texCoord0);

    vec4 rawDataColor = vec4(data.rgb,1);
    vec4 litDataColor = vec4(data.rgb,1);
    litDataColor *= scene.vertexColor * scene.ColorModulator;
	litDataColor.rgb = mix(scene.overlayColor.rgb, litDataColor.rgb, scene.overlayColor.a);
	litDataColor *= scene.lightMapColor;
	litDataColor = linear_fog(litDataColor, scene.vertexDistance, scene.FogStart, scene.FogEnd, scene.FogColor);

    vec3 lightColors[2] = vec3[2](texelFetch(sampler0, ivec2(3,0), 0).rgb, texelFetch(sampler0, ivec2(4,0), 0).rgb);
    vec3 ambientLightColor = texelFetch(sampler0, ivec2(7,0), 0).rgb;
    vec3 lightStrengths = texelFetch(sampler0, ivec2(7,2), 0).rgb;

    if (actionId == 1) // glow
    {
        //return vec4(1,0.5,0,1);
        return mix(litOgColor, unlitOgColor, genericDataFloat);
    }
    if (actionId == 2) // pulse (lit to lit)
    {
        return mix(litOgColor, litDataColor, sin((scene.GameTime / genericDataFloat) / 10)*0.5 + 0.5);
    }
    if (actionId == 3) // pulse (lit to unlit)
    {
        return mix(litOgColor, rawDataColor, sin((scene.GameTime / genericDataFloat) / 10)*0.5 + 0.5);
    }
    if (actionId == 4) // pulse (unlit to lit)
    {
        return mix(unlitOgColor, litDataColor, sin((scene.GameTime / genericDataFloat) / 10)*0.5 + 0.5);
    }
    if (actionId == 5) // pulse (unlit to unlit)
    {
        return mix(unlitOgColor, rawDataColor, sin((scene.GameTime / genericDataFloat) / 10)*0.5 + 0.5);
    }
    if (actionId == 6) // border (lit, lit)
    {
        float yOffset = min(abs(minmax.y-(scene.texCoord0.y*64)),abs((minmax.w+1)-(scene.texCoord0.y*64)));
        float xOffset = min(abs(minmax.x-(scene.texCoord0.x*64)),abs((minmax.z+1)-(scene.texCoord0.x*64)));

        if (yOffset < genericDataFloat || xOffset < genericDataFloat) {
            return litDataColor;
        }
        else {
            return litOgColor;
        }
    }
    if (actionId == 7) // border (lit, unlit)
    {
        float yOffset = min(abs(minmax.y-(scene.texCoord0.y*64)),abs((minmax.w+1)-(scene.texCoord0.y*64)));
        float xOffset = min(abs(minmax.x-(scene.texCoord0.x*64)),abs((minmax.z+1)-(scene.texCoord0.x*64)));

        if (yOffset < genericDataFloat || xOffset < genericDataFloat) {
            return litDataColor;
        }
        else {
            return unlitOgColor;
        }
    }
    if (actionId == 8) // border (unlit, lit)
    {
        float yOffset = min(abs(minmax.y-(scene.texCoord0.y*64)),abs((minmax.w+1)-(scene.texCoord0.y*64)));
        float xOffset = min(abs(minmax.x-(scene.texCoord0.x*64)),abs((minmax.z+1)-(scene.texCoord0.x*64)));

        if (yOffset < genericDataFloat || xOffset < genericDataFloat) {
            return rawDataColor;
        }
        else {
            return litOgColor;
        }
    }
    if (actionId == 9) // border (unlit, unlit)
    {
        float yOffset = min(abs(minmax.y-(scene.texCoord0.y*64)),abs((minmax.w+1)-(scene.texCoord0.y*64)));
        float xOffset = min(abs(minmax.x-(scene.texCoord0.x*64)),abs((minmax.z+1)-(scene.texCoord0.x*64)));

        if (yOffset < genericDataFloat || xOffset < genericDataFloat) {
            return rawDataColor;
        }
        else {
            return unlitOgColor;
        }
    }
    if (actionId == 10) // transparency
    {
        return vec4(litOgColor.rgb,genericDataFloat);
    }
    if(actionId == 11) // metallic
    {
        float lightLevel = scene.lightMapColor.r;

        float ambientLightStrenght = lightLevel * lightStrengths.z;

        vec3 surfaceColor = rawOgColor.rgb;
        float gloss = 0.4;
        float metalicNess = 0;

        vec3 outputLight = (ambientLightColor * ambientLightStrenght) * surfaceColor;

        vec3 lightDirections[2] = vec3[2](scene.Light0_Direction, scene.Light1_Direction);
        for(int i = 0; i < 2; i++) {
            vec3 L = lightDirections[i];
            vec3 lightColor = lightColors[i];

            //diffuse lighting
            vec3 N = normalize(scene.normal);
            float lambert = dot(N,L);
            vec3 diffuseLight = clamp(lambert, 0.0, 1.0) * lightColor * lightLevel * 0.8;
            outputLight += diffuseLight * surfaceColor;

            // specular lighting
            vec3 V = -normalize(scene.position.xyz);
            vec3 H = normalize(L + V);
            float specularStrengh = clamp(dot(H,N), 0.0, 1.0) * float(lambert > 0); // blinn phong
            float specularExponent = exp2(gloss * 11) + 2;
        	specularStrengh = pow( specularStrengh, specularExponent) * gloss; // specular exponent
            vec3 specularLight = specularStrengh * lightColor * lightLevel;
            outputLight += specularLight * mix(vec3(1),surfaceColor,metalicNess);
        }

        //surfaceColor * ((ambientLightColor * ambientLightStrenght) + diffuseLight + specularLight)
    	return vec4(outputLight, 1);
    }

    return vec4(1,0,1,0.5);
}

vec4 applyCustomShader(sampler2D sampler0, sceneData scene, vec4 orgColor)
{
    //storedData stored0;
    //return applyAction(66, vec4(0,0,0,0), orgColor, ivec4(0,0, 0,0), sampler0, scene, stored0);

    ivec2 intTexCord0 = ivec2(floor(scene.texCoord0*64));

    ivec2 lookupTableCoordinates = ivec2(floor(scene.texCoord0*8));
    ivec4 lookupTableValue = texelFetchAsInts(sampler0, lookupTableCoordinates);

    if (lookupTableValue.rgb == ivec3(0,0,0))
    {
        return orgColor;
    }

    int startIndex = (lookupTableValue.x + (lookupTableValue.y * 256))*3;
    int maxLength = lookupTableValue.z;

    storedData stored;

    int currentIndex = startIndex;
    for(int i = 0; i < maxLength; i++)
    {
        vec3 val1 = texelFetch(sampler0, getUnusedPlayerPixelFromIndex(currentIndex + 0), 0).xyz;
        vec3 val2 = texelFetch(sampler0, getUnusedPlayerPixelFromIndex(currentIndex + 1), 0).xyz;
        vec3 val3 = texelFetch(sampler0, getUnusedPlayerPixelFromIndex(currentIndex + 2), 0).xyz;

        ivec2 min = ivec2(val1.xy*255);
        ivec2 max = ivec2(val2.xy*255);

        int selectedAction = int(val1.z*255);

        float data = val2.z;
        vec3 dataColor = val3;

        if(selectedAction == 0)
        {
            stored.data0 = val1.xy;
            stored.data1 = val2;
            stored.data2 = val3;
        }
        else
        {
            if (min.x <= int(intTexCord0.x) && min.y <= int(intTexCord0.y) && int(intTexCord0.x) <= max.x && int(intTexCord0.y) <= max.y)
            {
                return applyAction(selectedAction, vec4(dataColor, data), orgColor, ivec4(min, max), sampler0, scene, stored);
            }
        }

        currentIndex += 3;
    }

    return orgColor;
}
