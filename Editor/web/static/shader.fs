#version 300 es
const highp float gridWidth = 0.08;

//ivec2 getUnusedPlayerPixelFromIndex(int index){
//  highp float wayInX = float(index) - 24.0 * floor(float(index)/24.0);
//
//  highp float x = 24.0 + wayInX + (float(wayInX >= 16.0) * 16.0);
//  highp float y = floor(float(index)/24.0);
//
//  return ivec2(x,y);
//}

// TODO: Optimize this function A LOT
ivec2 getUnusedPlayerPixelFromIndex(int index) {
  ivec2 result = ivec2(0,0);

  {
    lowp int applies = int(index < (8*24));

    highp float wayInX = mod(float(index),24.0);
    highp float x = 24.0 + wayInX + (float(wayInX >= 16.0) * 16.0);
    highp float y = floor(float(index)/24.0);

    result += ivec2(x,y) * applies;
  }

  {
    lowp int applies = int((index < ((8*24)+(8*24))) && (index >= (8*24)));

    highp float newIndex = float(index - (8*24));
    
    highp float wayInX = mod(newIndex,24.0);
    highp float x = wayInX + (float(wayInX >= 4.0)*8.0) + (float(wayInX >= (4.0*3.0))*(8.0+8.0)) + (float(wayInX >= (4.0*5.0)) * (4.0*2.0));
    highp float y = 16.0 + floor(float(newIndex/24.0)) + (float(newIndex >= (4.0*24.0))*12.0);

    result += ivec2(x,y) * applies;
  }
  {
    lowp int applies = int((index < ((8*24)+(8*24)+(32*8))) && (index >= ((8*24)+(8*24))));

    highp float newIndex = float(index - ((8*24)+(8*24)));

    highp float x = 56.0 + mod(newIndex,8.0);
    highp float y = 16.0 + floor(newIndex/8.0);

    result += ivec2(x,y) * applies;
  }
  {
    lowp int applies = int(index >= ((8*24)+(8*24)+(32*8)));

    highp float newIndex = float(index - ((8*24)+(8*24)+(32*8)));
    
    highp float xOffset = mod(newIndex,32.0);
    highp float x = xOffset + floor(((xOffset+4.0)/8.0))*8.0;
    highp float y = 48.0 + floor(newIndex/32.0);

    result += ivec2(x,y) * applies;
  }

  return result;
}

in highp vec2 pos;
in lowp float hasSpecialEnableColor;

uniform sampler2D uSkinSampler;
uniform sampler2D uOutlineSampler;
uniform highp float uTime;
uniform highp vec4 uCursor;
uniform lowp int uSelectedAction;

out highp vec4 fragColor;

bool outline(highp vec2 position, highp vec4 minmax, highp float width) {
      highp vec2 offset = min(abs(minmax.xy-position),abs((minmax.zw+vec2(1.0))-position));

      return (offset.y < width || offset.x < width);
}
bool isWithin(highp vec2 position, highp vec4 minmax) {
  return (position.x > minmax.x && position.x <= (minmax.z+1.0)) && (position.y > minmax.y && position.y <= (minmax.w+1.0));
}

void applyGrid(highp vec2 pos, inout highp vec4 color) {
  if (outline(fract(pos*64.0), vec4(0,0,1,1), gridWidth)) {
    highp float a = 0.05;
    color = color * (1.0-a) + vec4(0,0,0,1) * a;
  }
  if (outline(fract(pos*8.0), vec4(0,0,1,1), gridWidth/8.0)) {
    highp float a = 0.4;
    color = color * (1.0-a) + vec4(0,0,0,1) * a;
  }

}
void applySelectedOutline(highp vec2 pos, inout highp vec4 color) {
  if(uCursor == vec4(-1,-1,-1,-1)){
    return; 
  }
  if (isWithin(pos*64.0, uCursor)) {
    if (outline(pos*64.0,uCursor, 0.08)) {
      color = (color * (1.0-0.6)) + vec4(1,0,0,1) * 0.6;  
    }
    color = (color * (1.0-0.4)) + vec4(1,0,0,1) * 0.4;
  }
}
void applySkinOutline(highp vec2 pos, inout highp vec4 color) {
  highp vec4 outlineData = texture(uOutlineSampler, pos)*255.0;

  /*if ((texture(uOutlineSampler, pos + vec2(1.0/1024.0,0)) != texture(uOutlineSampler, pos + vec2(-1.0/1024.0,0))) || (texture(uOutlineSampler, pos + vec2(0,1.0/1024.0)) != texture(uOutlineSampler, pos + vec2(0,-1.0/1024.0)))) {
    highp float a = 0.75;

    color = color * (1.0-a) + vec4(0,0,0,1) * a;
  }*/

  
  highp float layer = -0.25;
  if (outlineData.r > 128.0) {
    layer = 0.25;
    outlineData -= vec4(128,0,0,0);
  }

  if (outlineData != vec4(0,0,0,255) && outline(pos*64.0,outlineData, 0.035))
  {
    highp float a = 0.75;

    color = color * (1.0-a) + vec4(0.5 + layer,0.5 - layer,0,1) * a;
  }
  
}
highp vec3 hsv2rgb(highp vec3 c)
{
    highp vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    highp vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
void applyEffectOutlines(highp vec2 pos, inout highp vec4 color) {
  if (hasSpecialEnableColor < 0.5) // if this skin doesn't have the special enable color, dont do anything
    return;

  lowp ivec2 intPos = ivec2(floor(pos*64.0));

  highp ivec2 lookupTableCoordinates = ivec2(floor(pos*8.0));
  highp ivec3 lookupTableValue = ivec3(texelFetch(uSkinSampler,lookupTableCoordinates,0).xyz*255.0);
  int startIndex = (lookupTableValue.x + (lookupTableValue.y * 256))*3;
  int maxLength = lookupTableValue.z;

  int currentIndex = startIndex;
  for(int i = 0; i < maxLength; i++) {
    highp vec3 val1 = texelFetch(uSkinSampler, getUnusedPlayerPixelFromIndex(currentIndex + 0), 0).xyz;
    highp vec3 val2 = texelFetch(uSkinSampler, getUnusedPlayerPixelFromIndex(currentIndex + 1), 0).xyz;
    highp vec3 val3 = texelFetch(uSkinSampler, getUnusedPlayerPixelFromIndex(currentIndex + 2), 0).xyz;

    highp ivec2 min = ivec2(val1.xy*255.0);
    highp ivec2 max = ivec2(val2.xy*255.0);

    int selectedAction = int(val1.z*255.0);

    if (selectedAction != 0) {
      if (min.x <= int(intPos.x) && min.y <= int(intPos.y) && int(intPos.x) <= max.x && int(intPos.y) <= max.y)
      {
        highp float colorSeed = fract((float(selectedAction)/13.2) + (float(min.x*max.y)+float(min.y*max.x))/13.0);
        highp vec3 col = hsv2rgb(vec3(colorSeed,1,1));
        if (outline(pos*64.0, vec4(min,max),0.04)){
          color = color * (1.0-0.8) + vec4(col.rgb,1) * 0.8;
        }
        if (isWithin(pos*64.0,vec4(min,max))) {
          highp float a = 0.4;

          highp int selectedId = min.x + min.y*64 + max.x*4096 + max.y*262144;
          if (selectedId == uSelectedAction) {
            a = 0.9;
            col = mix(col,vec3(1,1,1),0.8);
          }
          color = color * (1.0-a) + vec4(col.rgb,1) * a;
        }
        
      }
    }
    currentIndex += 3;
  }

}

void main() {
  highp vec4 baseTexture = texture(uSkinSampler, pos);

  applyEffectOutlines(pos, baseTexture);
  applyGrid(pos,baseTexture);
  //applySkinOutline(pos, baseTexture);
  applySelectedOutline(pos, baseTexture);
  fragColor = baseTexture;
}
