// ========================================================================================================================================================= //
// Random number generator taken from: Taken from: https://gamedev.stackexchange.com/questions/123739/simple-coherent-noise-function-to-use-in-a-glsl-shader //
// ========================================================================================================================================================= //
float hash( vec2 a )
{
    return fract( sin( a.x * 3433.8 + a.y * 3843.98 ) * 45933.8 );
}
float noise( vec2 U )
{
    vec2 id = floor( U );
          U = fract( U );
    U *= U * ( 3. - 2. * U );

    vec2 A = vec2( hash(id)            , hash(id + vec2(0,1)) ),
         B = vec2( hash(id + vec2(1,0)), hash(id + vec2(1,1)) ),
         C = mix( A, B, U.x);

    return mix( C.x, C.y, U.y );
}
