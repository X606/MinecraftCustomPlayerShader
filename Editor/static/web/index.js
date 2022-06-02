const skinUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAIOklEQVR4Xu1aW3NTVRSul3EcFV7lDf+I/8Q3x8sDDyrwIIM6jqPoSFuEYSiUAgV0QNGq5VILLaGlbUJCaaCXtPSSNm2SXtKk9yqln3vtk326s8456UkIJHT4Zr7JPnuvnLW+tS/nsk9Z+btHUFZWJrkyHZJUx1OJFfy7NJiVY75qTAROY/D2YUTu1CB08yDC7VWY6bmEvhvf441tr+ON7e9gdt9b2LbtNWzbvgOEt3e+iR07ZTGjXFYECKcv42Xxa0cumHPAU2HwZjnGOk6gt/E7jHmrEQ3UyjJ3li+4X96eN7hgnYHAh1ie65Ykp0up+/J3dXEgXfcQ4w8uofHwXvxTuRvXKj5DQ+UeNFTshv/Stwg1lxckUCf/3C4vbAh+Ca8IvirKOsmZ5EK/JQAqD7Ydg+fUV7hc/gnO7f4Q1R+/h2vHv8ZDbx1G7pwpSJBO/rldXuCCOaVD4Xwh0YmV+T4spx5IUv3KfAjhwDkEG6pQu/d9/Lz3I5wXSfDUVsJfd7JgU8DOP7fJG1wwp5pzi7OdmJ/2mSNCJaD/ZiV8F79B3Xe7cW7PB6j99AO0X6xCqL0Oo50/FyxQ5Z/XPzG4YE5jBISwKHpAJUOtC8upHjECzoihfgGdf5/CvfrTCPxZg57G8+hr+gH9tyoKH3ChwQVzKtE6zVGw+BADrYdEEmoxE7yC6a4rSNy/itXh5ucnAVwc9eySmGNqmG9MgXtyLeD2bqlPHZ08Hg47O378RKCTzU12mAE5JWBlrhfL8z2yfUVMCf3yaEeeLCd7Ho8dlH8qK//cZjM4XjXo5NS7tKBR0IvJLizNPRCr7l0szAYEu4TwXiRiLZiJekymplrlwmgE1Cf/SwlS4umcXKwdVRzKvx6bDjv/3Eb55/VOPiWWxbU1OdmCZOwmZqPNSEzcEL8eJONGXTJOZQ/Wx1uwNHoDSyPXsTjeJOsMW/EfwWT8FlKTbSKB98QICoqE9srFk3qLB6BI7RQD958RoAPIf+Zxpn9Vn81/+o9tSIzfwEykUfb+9Ng/sjw92oAZUaaAZoIXMdRyBJi4LTnuq0Gy+3fR1mT8V5DK9H/j+Lr8lYmJeSQXZukq8lAmJhVvFZc0P2ZjGyKc/Kt2Ozj5122c/G8YRFvSTq8jPlQvVvRT8gYmEWlFtO8vhP1n8Xh1FSe9/5oJOHYZWF9KYrijWnKi+1cZNAmfHmuU56PeSIm1JSUSTJTBEuVoacGcuKYnxEhScXD/ZoAuwP3zdu4/o5Hu14e9NRjxn8ZAyyFxa1slGe2pw/RIk7yfx9pjKTojAY/WDLvev9AvHobmJv0yWYr0jDAz6pFiIsHfMD91F+M9FxEfrJdTLBK8kLPQpwIj2N8zE9B+HCPiyW5YPNVRkP95fzXFK1KdfPK7ZwihRNG56Jc4JgSG7xpPhHRMCaAyUSW5JBLA4d31Pcb2HZWkMhfO7Tk+72hENvLz82N+Po593Q3muTDR5jou16BAUvsrJaksHUQ7BNtdOaIAs1E/v0qA7o+fj2N/+DKIMgFRH9biAVdxuQZPwDqJj/mMXxeOuGDOQibgcfyOOQq4Xd7gQ3I9Rk5KawoQjSlgjEo3cTmCB5DrMRdYaJJY1eu6+GwkG67TEfqQVMJyOeZDvFTIdTpCicmX3HGhqXpfJ7fhJBuu0xHGIpI/vxDOiF+F6yX1QOzqlD0nF5HNVtnzOp1cpyPk6p6+xBHpeD3qNY+Ny2B7Zl36ikBUDpVYN+TB5sOCJQBR6smNBFCvqkuebR3Zl0ACNiPX6QhTlJ1Yvcf1uidIAA90M/JpoXo+2wigNq7TEYag9g1RcrjbJUCNEhoBGyNGOVUCyTkXrbfZBWtXr7c5MZs91+kIi8gojQB9SvBe3zwB2Zgt6FyZ7VxcpyMsQmkKxPxMvCZaJsmaADOI9I2ILUVbrvbZaHuuNLlOR1gTsAnlVcK6BtgFYcdc7S3+N6HbZxYT/AS5Ut0e2/LELniv2tTnQO7PLbnOZwb5kiR4QZJegqiyejnC7bccVALU2x9FVcfttxx6Gw+kRR8wxRp1BnXbLQknoU71Ww4kcsh/3CLUKQE0Wkbaj8l9BzVd+psPmp/bcPuShboRGuk8iUif9buAkS56329NQKj5R4S9xzHqO4GB2z/JHeXB1kOI+GqerwSom5fk1G1J3j4+cAFEXh/p/gWhph9AiSDxlISQpxy91w9g0HfMYl+yUK+jjC0o6wZlbKgOU6PXLPXLc72Y6PsDgx1H5dQZulOFcPAsFma6EB/M4amuVGC7AytAO7qzsRZL/drsfSyleuTUGb5bjeFANSZCf2RuYD5PcArcro6wPunH/HQAicgtmYRo/5+YHL4mvz7hts8N7MTa1SlQ23KqGytTfqwmglL8IzEquN2Wx6OU8RXHf/O5fwHyAi/wAi9QEqCXGPreYa4vKvT9PbJfmwy6+l/JgO8dypeoMV9OCVBbYOsxb+H3/582CpqAaIdIgPGCltuVLAo7Bejts7Fpw+1KBlxwrsd8b19PAJHvCKt2HkfRwIe83XFyf4WkXbtlL8AleRxFA/9eIFdyYYpfhuttWXIJMHeK8qTd/iGvU+L1Oh5H0SAXNxKjL3bymLbT0rvOdBXgNuk9Ri7WLgF25HEUDaZgXaAUrn1HIC+D+ha8SkCbRZhb8jiKhsxe18r0RYmqk1+X2CRgwjkBfE1QLOEEbHxfIDdQaYfZnArUxhKQTopb4Zw8jqJB73Xzo0re43QsbmvXtTtC9c3RFkoA+8JE9X5aLP/iVNGSALoJckEeR9FgSYBJPucLSx5H0WAGpQ3vZ0EeR774HyeoVbA/bIjCAAAAAElFTkSuQmCC";
const steveOutline = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJmSURBVHhe7daxauNAFIVhgwMa0IIEGrBBBgk0YIMNEmhARQq/WgoXLlKkSJki1RKWLVykcLHvtrveQpw7HCbIbKcb+JrBuvCfKou/f79jzCJLYvLFKordnOJj0SYxl8UQxW4G6OOIRSMWjdjNKVg0YtGI3QzQxxGLRiwasZtTsGjEohG7GaCPIxaNWDRiN6dg0YhFI3YzQB9HLBqxaMRuTsGiEYtG7GaAPo5YNGLRiN2cgkUjFo3YzQB9HLFoxKIRuzkFi0YsGrGbAfo4YtGIRSN2cwoWjVg0Yjclk2QxxmRRuVlFrU0V9W621Hcz/BdXc4zSAVg0YtGIRSMWjVj8DYu5B4tGOgCLRiwasWjEohGLv2Ex92DRSAdg0YhFIxaNWDRi8Tcs5h4sGukA4T8GD3lSIJOnQvj7kM3LImaTN1HsJjrkbYG6vBfYN1+QDzqADjC3AeyyQg82EYxNhW82E3JbCNaWURtbCbXdRu3sXjjYVuhsL3g7CDwa6QA6gA6gA+gAOoAOoAPoADrATAcIHk510qBznQrh70OvddnEvNVNFLuJftZtgy51L7BvviAfdAAdYGYDPLlli04uEc4uFZ5dJry4Qnh1ZdSbq4R3t436cPt/frjhLjQa6QA6gA6gA+gAOoAOoAPoADrATAcIH05d0qNzlwrh70O2W/Vo3ZUC+wa5btujXbcX2Dfosxt6dO0eBfKNfNABdICZDfDkl0d08olw9qnw7DMh94Vg/UpY+1LY+EqofSM4vxV2fi8cfCtcfC98+kG4+kfhlz8KOoAOoAPoADqADqAD6AA6gA4wywGOxz/Lt7GFrdA1ygAAAABJRU5ErkJggg==";
const unusedplayerpixels = [[24,0],[25,0],[26,0],[27,0],[28,0],[29,0],[30,0],[31,0],[32,0],[33,0],[34,0],[35,0],[36,0],[37,0],[38,0],[39,0],[56,0],[57,0],[58,0],[59,0],[60,0],[61,0],[62,0],[63,0],[24,1],[25,1],[26,1],[27,1],[28,1],[29,1],[30,1],[31,1],[32,1],[33,1],[34,1],[35,1],[36,1],[37,1],[38,1],[39,1],[56,1],[57,1],[58,1],[59,1],[60,1],[61,1],[62,1],[63,1],[24,2],[25,2],[26,2],[27,2],[28,2],[29,2],[30,2],[31,2],[32,2],[33,2],[34,2],[35,2],[36,2],[37,2],[38,2],[39,2],[56,2],[57,2],[58,2],[59,2],[60,2],[61,2],[62,2],[63,2],[24,3],[25,3],[26,3],[27,3],[28,3],[29,3],[30,3],[31,3],[32,3],[33,3],[34,3],[35,3],[36,3],[37,3],[38,3],[39,3],[56,3],[57,3],[58,3],[59,3],[60,3],[61,3],[62,3],[63,3],[24,4],[25,4],[26,4],[27,4],[28,4],[29,4],[30,4],[31,4],[32,4],[33,4],[34,4],[35,4],[36,4],[37,4],[38,4],[39,4],[56,4],[57,4],[58,4],[59,4],[60,4],[61,4],[62,4],[63,4],[24,5],[25,5],[26,5],[27,5],[28,5],[29,5],[30,5],[31,5],[32,5],[33,5],[34,5],[35,5],[36,5],[37,5],[38,5],[39,5],[56,5],[57,5],[58,5],[59,5],[60,5],[61,5],[62,5],[63,5],[24,6],[25,6],[26,6],[27,6],[28,6],[29,6],[30,6],[31,6],[32,6],[33,6],[34,6],[35,6],[36,6],[37,6],[38,6],[39,6],[56,6],[57,6],[58,6],[59,6],[60,6],[61,6],[62,6],[63,6],[24,7],[25,7],[26,7],[27,7],[28,7],[29,7],[30,7],[31,7],[32,7],[33,7],[34,7],[35,7],[36,7],[37,7],[38,7],[39,7],[56,7],[57,7],[58,7],[59,7],[60,7],[61,7],[62,7],[63,7],[0,16],[1,16],[2,16],[3,16],[12,16],[13,16],[14,16],[15,16],[16,16],[17,16],[18,16],[19,16],[36,16],[37,16],[38,16],[39,16],[40,16],[41,16],[42,16],[43,16],[52,16],[53,16],[54,16],[55,16],[56,16],[57,16],[58,16],[59,16],[60,16],[61,16],[62,16],[63,16],[0,17],[1,17],[2,17],[3,17],[12,17],[13,17],[14,17],[15,17],[16,17],[17,17],[18,17],[19,17],[36,17],[37,17],[38,17],[39,17],[40,17],[41,17],[42,17],[43,17],[52,17],[53,17],[54,17],[55,17],[56,17],[57,17],[58,17],[59,17],[60,17],[61,17],[62,17],[63,17],[0,18],[1,18],[2,18],[3,18],[12,18],[13,18],[14,18],[15,18],[16,18],[17,18],[18,18],[19,18],[36,18],[37,18],[38,18],[39,18],[40,18],[41,18],[42,18],[43,18],[52,18],[53,18],[54,18],[55,18],[56,18],[57,18],[58,18],[59,18],[60,18],[61,18],[62,18],[63,18],[0,19],[1,19],[2,19],[3,19],[12,19],[13,19],[14,19],[15,19],[16,19],[17,19],[18,19],[19,19],[36,19],[37,19],[38,19],[39,19],[40,19],[41,19],[42,19],[43,19],[52,19],[53,19],[54,19],[55,19],[56,19],[57,19],[58,19],[59,19],[60,19],[61,19],[62,19],[63,19],[56,20],[57,20],[58,20],[59,20],[60,20],[61,20],[62,20],[63,20],[56,21],[57,21],[58,21],[59,21],[60,21],[61,21],[62,21],[63,21],[56,22],[57,22],[58,22],[59,22],[60,22],[61,22],[62,22],[63,22],[56,23],[57,23],[58,23],[59,23],[60,23],[61,23],[62,23],[63,23],[56,24],[57,24],[58,24],[59,24],[60,24],[61,24],[62,24],[63,24],[56,25],[57,25],[58,25],[59,25],[60,25],[61,25],[62,25],[63,25],[56,26],[57,26],[58,26],[59,26],[60,26],[61,26],[62,26],[63,26],[56,27],[57,27],[58,27],[59,27],[60,27],[61,27],[62,27],[63,27],[56,28],[57,28],[58,28],[59,28],[60,28],[61,28],[62,28],[63,28],[56,29],[57,29],[58,29],[59,29],[60,29],[61,29],[62,29],[63,29],[56,30],[57,30],[58,30],[59,30],[60,30],[61,30],[62,30],[63,30],[56,31],[57,31],[58,31],[59,31],[60,31],[61,31],[62,31],[63,31],[0,32],[1,32],[2,32],[3,32],[12,32],[13,32],[14,32],[15,32],[16,32],[17,32],[18,32],[19,32],[36,32],[37,32],[38,32],[39,32],[40,32],[41,32],[42,32],[43,32],[52,32],[53,32],[54,32],[55,32],[56,32],[57,32],[58,32],[59,32],[60,32],[61,32],[62,32],[63,32],[0,33],[1,33],[2,33],[3,33],[12,33],[13,33],[14,33],[15,33],[16,33],[17,33],[18,33],[19,33],[36,33],[37,33],[38,33],[39,33],[40,33],[41,33],[42,33],[43,33],[52,33],[53,33],[54,33],[55,33],[56,33],[57,33],[58,33],[59,33],[60,33],[61,33],[62,33],[63,33],[0,34],[1,34],[2,34],[3,34],[12,34],[13,34],[14,34],[15,34],[16,34],[17,34],[18,34],[19,34],[36,34],[37,34],[38,34],[39,34],[40,34],[41,34],[42,34],[43,34],[52,34],[53,34],[54,34],[55,34],[56,34],[57,34],[58,34],[59,34],[60,34],[61,34],[62,34],[63,34],[0,35],[1,35],[2,35],[3,35],[12,35],[13,35],[14,35],[15,35],[16,35],[17,35],[18,35],[19,35],[36,35],[37,35],[38,35],[39,35],[40,35],[41,35],[42,35],[43,35],[52,35],[53,35],[54,35],[55,35],[56,35],[57,35],[58,35],[59,35],[60,35],[61,35],[62,35],[63,35],[56,36],[57,36],[58,36],[59,36],[60,36],[61,36],[62,36],[63,36],[56,37],[57,37],[58,37],[59,37],[60,37],[61,37],[62,37],[63,37],[56,38],[57,38],[58,38],[59,38],[60,38],[61,38],[62,38],[63,38],[56,39],[57,39],[58,39],[59,39],[60,39],[61,39],[62,39],[63,39],[56,40],[57,40],[58,40],[59,40],[60,40],[61,40],[62,40],[63,40],[56,41],[57,41],[58,41],[59,41],[60,41],[61,41],[62,41],[63,41],[56,42],[57,42],[58,42],[59,42],[60,42],[61,42],[62,42],[63,42],[56,43],[57,43],[58,43],[59,43],[60,43],[61,43],[62,43],[63,43],[56,44],[57,44],[58,44],[59,44],[60,44],[61,44],[62,44],[63,44],[56,45],[57,45],[58,45],[59,45],[60,45],[61,45],[62,45],[63,45],[56,46],[57,46],[58,46],[59,46],[60,46],[61,46],[62,46],[63,46],[56,47],[57,47],[58,47],[59,47],[60,47],[61,47],[62,47],[63,47],[0,48],[1,48],[2,48],[3,48],[12,48],[13,48],[14,48],[15,48],[16,48],[17,48],[18,48],[19,48],[28,48],[29,48],[30,48],[31,48],[32,48],[33,48],[34,48],[35,48],[44,48],[45,48],[46,48],[47,48],[48,48],[49,48],[50,48],[51,48],[60,48],[61,48],[62,48],[63,48],[0,49],[1,49],[2,49],[3,49],[12,49],[13,49],[14,49],[15,49],[16,49],[17,49],[18,49],[19,49],[28,49],[29,49],[30,49],[31,49],[32,49],[33,49],[34,49],[35,49],[44,49],[45,49],[46,49],[47,49],[48,49],[49,49],[50,49],[51,49],[60,49],[61,49],[62,49],[63,49],[0,50],[1,50],[2,50],[3,50],[12,50],[13,50],[14,50],[15,50],[16,50],[17,50],[18,50],[19,50],[28,50],[29,50],[30,50],[31,50],[32,50],[33,50],[34,50],[35,50],[44,50],[45,50],[46,50],[47,50],[48,50],[49,50],[50,50],[51,50],[60,50],[61,50],[62,50],[63,50],[0,51],[1,51],[2,51],[3,51],[12,51],[13,51],[14,51],[15,51],[16,51],[17,51],[18,51],[19,51],[28,51],[29,51],[30,51],[31,51],[32,51],[33,51],[34,51],[35,51],[44,51],[45,51],[46,51],[47,51],[48,51],[49,51],[50,51],[51,51],[60,51],[61,51],[62,51],[63,51]];
const topLeftVerifyValue = [ 141, 61, 147, 255 ];
var skinBuffer;
var cursor = [-1, -1, -1, -1];
var selectedAction = -1;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("fileInput").addEventListener("change", readSingleFile, false);

  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl2");

  if (gl === null) {
    alert("Your browser does not support webgl :(");
    return;
  }

  let isMouseDown = false;
  canvas.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    let x = Math.floor((e.layerX / canvas.clientWidth) * 64.0);
    let y = Math.floor((e.layerY / canvas.clientHeight) * 64.0);

    cursor[0] = x;
    cursor[1] = y;
    cursor[2] = x;
    cursor[3] = y;
  });
  canvas.addEventListener("mousemove", (e) => {
    if (!isMouseDown) {
      return;
    }

    let x = Math.floor((e.layerX / canvas.clientWidth) * 64.0);
    let y = Math.floor((e.layerY / canvas.clientHeight) * 64.0);

    cursor[2] = x;
    cursor[3] = y;
  });
  canvas.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  canvas.addEventListener("mouseup", (e) => {
    if (!isMouseDown) {
      return;
    }
    isMouseDown = false;
    let x = Math.floor((e.layerX / canvas.clientWidth) * 64.0);
    let y = Math.floor((e.layerY / canvas.clientHeight) * 64.0);

    cursor[2] = x;
    cursor[3] = y;
  });

  // Vertex shader program

  const vsSource = ``;

  const fsSource = ``;

  const myShader = new Shader(gl, vsSource, fsSource);

  skinBuffer = new ImageBuffer(skinUrl);
  const skinTexture = loadTexture(gl, skinBuffer);
  const outlineTexture = loadTexture(gl, steveOutline);

  

  

  // Draw the scene repeatedly
  function render(time) {
    gl.uniform1f(myShader.GetUnifromLocation("uTime"), time);
    gl.uniform4f(
      myShader.GetUnifromLocation("uCursor"),
      Math.min(cursor[0], cursor[2]),
      Math.min(cursor[1], cursor[3]),
      Math.max(cursor[0], cursor[2]),
      Math.max(cursor[1], cursor[3])
    );
    gl.uniform1i(
      myShader.GetUnifromLocation("uSelectedAction"),
      selectedAction
    );

    // Tell WebGL we want to affect texture unit 0
    gl.activeTexture(gl.TEXTURE0);
    // Bind the texture to texture unit 0
    gl.bindTexture(gl.TEXTURE_2D, skinTexture);
    // Tell the shader we bound the texture to texture unit 0
    gl.uniform1i(myShader.GetUnifromLocation("uSkinSampler"), 0);
    
    // Tell WebGL we want to affect texture unit 1
    gl.activeTexture(gl.TEXTURE1);
    // Bind the texture to texture unit 1
    gl.bindTexture(gl.TEXTURE_2D, outlineTexture);
    // Tell the shader we bound the texture to texture unit 0
    gl.uniform1i(myShader.GetUnifromLocation("uOutlineSampler"), 1);

    drawScene(gl, myShader);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
});

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function (e) {
    var contents = e.target.result;
    console.log(contents);
  };
  reader.readAsDataURL(file);
}

var positionBuffer = null;
function drawShadedFullscreen(gl, shader) {
  if (positionBuffer == null) {
    // Create a buffer for the square's positions.
    positionBuffer = gl.createBuffer();

    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Now create an array of positions for the square.
    const positions = [-1, 1, 1, 1, -1, -1, 1, -1];

    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute.
  {
    const numComponents = 2; // pull out 2 values per iteration
    const type = gl.FLOAT; // the data in the buffer is 32bit floats
    const normalize = false; // don't normalize
    const stride = 0; // how many bytes to get from one set of values to the next
    // 0 = use type and numComponents above
    const offset = 0; // how many bytes inside the buffer to start from
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(
      shader.GetAttributeLocation("aVertexPosition"),
      numComponents,
      type,
      normalize,
      stride,
      offset
    );
    gl.enableVertexAttribArray(shader.GetAttributeLocation("aVertexPosition"));
  }

  // Tell WebGL to use our program when drawing
  gl.useProgram(shader.GetRawProgram());

  {
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}

function drawScene(gl, shader) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque

  // Clear the canvas before we start drawing on it.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  drawShadedFullscreen(gl, shader);
}

//
// Initialize a texture and load an image.
// When the image finished loading copy it into the texture.
//
function loadTexture(gl, imageBuffer) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Because images have to be downloaded over the internet
  // they might take a moment until they are ready.
  // Until then put a single pixel in the texture so we can
  // use it immediately. When the image has finished downloading
  // we'll update the texture with the contents of the image.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    pixel
  );
  const makeImage = (url) => {
    const image = new Image();
    image.onload = function () {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        level,
        internalFormat,
        srcFormat,
        srcType,
        image
      );

      // WebGL1 has different requirements for power of 2 images
      // vs non power of 2 images so check if the image is a
      // power of 2 in both dimensions.
      if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
        // Yes, it's a power of 2. Generate mips.
        gl.generateMipmap(gl.TEXTURE_2D);
      } else {
        // No, it's not a power of 2. Turn off mips and set
        // wrapping to clamp to edge
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      }
    };
    image.src = url;
  };
  if (imageBuffer.SetPixel) { // if the paramater is a imageBuffer object it'll have a SetPixel function on it
    imageBuffer.OnChanged = makeImage;
    if (imageBuffer.IsDoneLoading()) {
      imageBuffer.OnChanged(imageBuffer.ExportToDataUrl()); // run on changed right away
    }
  }
  else {
    const url = imageBuffer;
    makeImage(url);
  }

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) == 0;
}

function Shader(gl, vsSource, fsSource) {
  //
  // creates a shader of the given type, uploads the source and
  // compiles it.
  //
  function loadShader(gl, type, source) {
    const shader = gl.createShader(type);

    // Send the source to the shader object

    gl.shaderSource(shader, source);

    // Compile the shader program

    gl.compileShader(shader);

    // See if it compiled successfully

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert(
        "An error occurred compiling the shaders: " +
          gl.getShaderInfoLog(shader)
      );
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  // If creating the shader program failed, alert
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    alert(
      "Unable to initialize the shader program: " +
        gl.getProgramInfoLog(program)
    );
    return null;
  }

  let attributeLocationsCache = {};
  this.GetAttributeLocation = function (attributeName) {
    const cached = attributeLocationsCache[attributeName];
    if (cached !== undefined) {
      return cached;
    }
    const location = gl.getAttribLocation(program, attributeName);
    attributeLocationsCache[attributeName] = location;
    return location;
  };
  let uniformLocationsCache = {};
  this.GetUnifromLocation = function (attributeName) {
    const cached = uniformLocationsCache[attributeName];
    if (cached !== undefined) {
      return cached;
    }
    const location = gl.getUniformLocation(program, attributeName);
    uniformLocationsCache[attributeName] = location;
    return location;
  };
  this.GetRawProgram = function () {
    return program;
  };
}

function ImageBuffer(url) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  let imageData = null;
  let isDoneLoading = false;

  function RegenerateImageData() {
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }

  image = new Image();
  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    RegenerateImageData();
    isDoneLoading = true;

    if (this.OnChanged) {
      this.ApplyChanges();
    }
  };
  image.src = url;

  this.SetPixel = function (x, y, color) {
    const imageWidth = canvas.width;
    const data = imageData.data;

    data[(imageWidth * y + x) * 4] = color[0];
    data[(imageWidth * y + x) * 4 + 1] = color[1];
    data[(imageWidth * y + x) * 4 + 2] = color[2];
    data[(imageWidth * y + x) * 4 + 3] = color[3];
  };
  this.GetPixel = function (x, y) {
    const imageWidth = canvas.width;
    const data = imageData.data;

    const red = data[(imageWidth * y + x) * 4];
    const green = data[(imageWidth * y + x) * 4 + 1];
    const blue = data[(imageWidth * y + x) * 4 + 2];
    const alpha = data[(imageWidth * y + x) * 4 + 3];
    return [red, green, blue, alpha];
  };
  this.ExportToDataUrl = function () {
    this.ApplyChanges();
    return canvas.toDataURL();
  };
  this.OpenInNewWindow = function () {
    const url = this.ExportToDataUrl();
    window.open(
      url,
      "Test Window",
      "menubar=false,location=no,status=no,resizable=no,scrollbars=no,width=" +
        canvas.width +
        ",height=" +
        canvas.height
    );
  };
  this.IsDoneLoading = function () {
    return isDoneLoading;
  };
  this.ApplyChanges = function () {
    ctx.putImageData(imageData, 0, 0);
    if (this.OnChanged) {
      this.OnChanged(canvas.toDataURL());
    }
  };
  this.OnChanged = null;
}

function compareArrays(a,b) {
  if (a.length !== b.length)
    return false;

  for(let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
}

function readDataFromImageBuffer(imgBuffer) {
  if(!compareArrays(imgBuffer.GetPixel(0,0), topLeftVerifyValue)) // if the verify value isnt set, 
    return [];

  const arr = [];
  for(let i = 0; i < unusedplayerpixels.length; i += 3) {
    const val1 = imgBuffer.GetPixel(unusedplayerpixels[i+0][0],unusedplayerpixels[i][1]);
    const val2 = imgBuffer.GetPixel(unusedplayerpixels[i+1][0],unusedplayerpixels[i+1][1]);
    const val3 = imgBuffer.GetPixel(unusedplayerpixels[i+2][0],unusedplayerpixels[i+2][1]);

    const actionId = val1[2];
    const minMax = [val1[0],val1[1],val2[0],val2[1]];
    const data = [val2[2],val3[0],val3[1],val3[2]];

    if (actionId == 0 && compareArrays(minMax, [0,0,0,0])) {
      break;
    }

    let action = new Action(actionId, minMax, data);

    let foundAction = false;
    for(let i = 0; i < arr.length; i++) {
      const oldAction = arr[i];

      if (oldAction.Id === action.Id && compareArrays(oldAction.MinMax,action.MinMax) && compareArrays(oldAction.Data,action.Data)) {
        foundAction = true;
        break;
      }
    }

    if (!foundAction) {
      arr.push(action);
    }
  }

  const light0Color = imgBuffer.GetPixel(3,0);
  const light1Color = imgBuffer.GetPixel(4,0);
  const ambientColor  = imgBuffer.GetPixel(7,0);
  const lightStrengths = imgBuffer.GetPixel(7,2);

  return {Light0Color: light0Color,Light1Color:light1Color,AmbientColor:ambientColor,LightStrengths:lightStrengths,Actions:arr};
}

function writeDataFromImageBuffer(imgBuffer, data) {
  for(let y = 0; y < 8; y++) {
    for(let x = 0; x < 8; x++) {
      imgBuffer.SetPixel(x,y,[0,0,0,255]);
    }
  }

  const actions = data.Actions;

  const arr = [];
  for(let i = 0; i < actions.length; i++) {
    const action = actions[i];

    const minX = Math.floor(action.MinMax[0]/8);
    const minY = Math.floor(action.MinMax[1]/8);
    const maxX = Math.floor(action.MinMax[2]/8);
    const maxY = Math.floor(action.MinMax[3]/8);

    for(let y = minY; y < (maxY+1); y++) {
      for(let x = minX; x < (maxX+1); x++) {
        arr.push({Action:action, Index:(y * 8 + x)});
      }
    }

  }

  arr.sort((a,b) => a.Index - b.Index);

  console.log(arr);

  let indexLastBlock = -1;
  let oldIndex = arr[0].Index;
  for(let i = 0; i < arr.length; i++) {
    const obj = arr[i];

    const id = obj.Action.Id;
    const minMax = obj.Action.MinMax;
    const data = obj.Action.Data;

    const val1Cords = unusedplayerpixels[i * 3 + 0];
    imgBuffer.SetPixel(val1Cords[0], val1Cords[1], [minMax[0],minMax[1],id,255]);
    const val2Cords = unusedplayerpixels[i * 3 + 1];
    imgBuffer.SetPixel(val2Cords[0], val2Cords[1], [minMax[2],minMax[3],data[0],255]);
    const val3Cords = unusedplayerpixels[i * 3 + 2];
    imgBuffer.SetPixel(val3Cords[0], val3Cords[1], [data[1],data[2],data[3],255]);

    if (obj.Index !== oldIndex) {
      const length = i-indexLastBlock;
      const firstIndexThisBlock = indexLastBlock+1;

      const x = obj.Index%8;
      const y = Math.floor(obj.Index/8);
      imgBuffer.SetPixel(x,y, [firstIndexThisBlock%256, Math.floor(firstIndexThisBlock/256), length, 255]);
      
      console.log(x,y, "length:", length, "firstIndexThisBlock:", firstIndexThisBlock, "obj.Index:", obj.Index);

      indexLastBlock = i;
    }
    
    oldIndex = obj.Index;
  }

  imgBuffer.SetPixel(0,0, topLeftVerifyValue);
  imgBuffer.SetPixel(3,0, data.Light0Color);
  imgBuffer.SetPixel(4,0, data.Light1Color);
  imgBuffer.SetPixel(7,0, data.AmbientColor);
  imgBuffer.SetPixel(7,2, data.LightStrengths);
  imgBuffer.ApplyChanges();
}

function Action(id, minMax, data) {
  this.Id = id;
  this.MinMax = minMax;
  this.Data = data;
}