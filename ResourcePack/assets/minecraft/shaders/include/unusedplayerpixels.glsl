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