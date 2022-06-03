const skinUrl =
  "data:image/png;base64,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";
const steveOutline = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJmSURBVHhe7daxauNAFIVhgwMa0IIEGrBBBgk0YIMNEmhARQq/WgoXLlKkSJki1RKWLVykcLHvtrveQpw7HCbIbKcb+JrBuvCfKou/f79jzCJLYvLFKordnOJj0SYxl8UQxW4G6OOIRSMWjdjNKVg0YtGI3QzQxxGLRiwasZtTsGjEohG7GaCPIxaNWDRiN6dg0YhFI3YzQB9HLBqxaMRuTsGiEYtG7GaAPo5YNGLRiN2cgkUjFo3YzQB9HLFoxKIRuzkFi0YsGrGbAfo4YtGIRSN2cwoWjVg0Yjclk2QxxmRRuVlFrU0V9W621Hcz/BdXc4zSAVg0YtGIRSMWjVj8DYu5B4tGOgCLRiwasWjEohGLv2Ex92DRSAdg0YhFIxaNWDRi8Tcs5h4sGukA4T8GD3lSIJOnQvj7kM3LImaTN1HsJjrkbYG6vBfYN1+QDzqADjC3AeyyQg82EYxNhW82E3JbCNaWURtbCbXdRu3sXjjYVuhsL3g7CDwa6QA6gA6gA+gAOoAOoAPoADrATAcIHk510qBznQrh70OvddnEvNVNFLuJftZtgy51L7BvviAfdAAdYGYDPLlli04uEc4uFZ5dJry4Qnh1ZdSbq4R3t436cPt/frjhLjQa6QA6gA6gA+gAOoAOoAPoADrATAcIH05d0qNzlwrh70O2W/Vo3ZUC+wa5btujXbcX2Dfosxt6dO0eBfKNfNABdICZDfDkl0d08olw9qnw7DMh94Vg/UpY+1LY+EqofSM4vxV2fi8cfCtcfC98+kG4+kfhlz8KOoAOoAPoADqADqAD6AA6gA4wywGOxz/Lt7GFrdA1ygAAAABJRU5ErkJggg==";
const maxUnusedPlayerPixels = 768;
const defualtValues = {Light0Color: [247, 235, 216, 255], Light1Color: [247, 235, 216, 255], AmbientColor:[234,237,247,255],LightStrengths:[204,204,102,255],Actions:[]};
const topLeftVerifyValue = [ 141, 61, 147, 255 ];
var skinBuffer;
var cursor = [-1, -1, -1, -1];
var selectedAction = -1;
var isRenderDirty = true;

var domContentLoadedPromise = new Promise((resolve, reject) => {
  document.addEventListener("DOMContentLoaded", function () {
    resolve();
  });
});

async function main() {
  let result = await Promise.all(
    [
      httpGetAsync("shader.vs"),
      httpGetAsync("shader.fs"),
      domContentLoadedPromise
    ]);

  const vsSource = result[0];
  const fsSource = result[1];

  document.getElementById("addActionButton").addEventListener("click", OnAddActionClicked);

  document.getElementById("importImageButton").addEventListener("click", OnImportImageClicked);
  document.getElementById("importPlayerButton").addEventListener("click", OnImportPlayerClicked);
  document.getElementById("exportButton").addEventListener("click", OnExportClicked);

  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl2");

  if (gl === null) {
    alert("Your browser does not support webgl :(");
    return;
  }

  let isMouseDown = false;
  canvas.addEventListener("mousedown", (e) => {
    isRenderDirty = true;
    isMouseDown = true;

    let rect = e.target.getBoundingClientRect();
    let x = Math.floor(((e.clientX - rect.left) / canvas.clientWidth)*64);
    let y = Math.floor(((e.clientY - rect.top) / canvas.clientHeight)*64);

    cursor[0] = x;
    cursor[1] = y;
    cursor[2] = x;
    cursor[3] = y;
  });
  canvas.addEventListener("mousemove", (e) => {
    if (!isMouseDown) {
      return;
    }
    isRenderDirty = true;

    let rect = e.target.getBoundingClientRect();
    let x = Math.floor(((e.clientX - rect.left) / canvas.clientWidth)*64);
    let y = Math.floor(((e.clientY - rect.top) / canvas.clientHeight)*64);

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
    isRenderDirty = true;
    isMouseDown = false;

    let rect = e.target.getBoundingClientRect();
    let x = Math.floor(((e.clientX - rect.left) / canvas.clientWidth)*64);
    let y = Math.floor(((e.clientY - rect.top) / canvas.clientHeight)*64);

    cursor[2] = x;
    cursor[3] = y;
  });

  const myShader = new Shader(gl, vsSource, fsSource);

  skinBuffer = new ImageBuffer(skinUrl);
  skinBuffer.OnChanged.push(OnImageLoaded);
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
  }

  function tryRender(){
    if (!isRenderDirty) {
      requestAnimationFrame(tryRender);
      return;
    }
    render();
    isRenderDirty = false;
    requestAnimationFrame(tryRender);
  }
  requestAnimationFrame(tryRender);
}

function OnAddActionClicked() {
  let skinData = readDataFromImageBuffer(skinBuffer);

  let minMax = [Math.min(cursor[0],cursor[2]), Math.min(cursor[1],cursor[3]), Math.max(cursor[0],cursor[2]), Math.max(cursor[1],cursor[3])];

  let action = new Action(1, minMax, [0,0,0,0]);

  skinData.Actions.push(action);

  writeDataFromImageBuffer(skinBuffer, skinData);
}

function OnImageLoaded(dataUrl) {
  let actionsHolder = document.getElementById("actionsHolder");
  while(actionsHolder.firstChild) { // remove all children of actionsHolder
    actionsHolder.removeChild(actionsHolder.lastChild);
  }

  let skinData = readDataFromImageBuffer(skinBuffer);

  let actionsTemplate = document.getElementById("actionTemplate").content.querySelector(".actionDisplay");

  for(let i = 0; i < skinData.Actions.length; i++) {
    const action = skinData.Actions[i];
    
    let templateInstance = actionsTemplate.cloneNode(true);

    let label = templateInstance.querySelector("#label");
    label.value = action.Id;
    label.addEventListener("change",function(e) {
      let value = Number.parseInt(e.srcElement.value);
      
      skinData.Actions[i].Id = value;

      writeDataFromImageBuffer(skinBuffer, skinData);
    });

    let actionColor = action.getActionColor();
    templateInstance.setAttribute("style", "--color: " + actionColor[0] + ", " + actionColor[1] + ", " + actionColor[2] + ";");
    templateInstance.querySelector("#selectButton").addEventListener("click", function(e) {
      console.log("select clicked" + i);
    });
    templateInstance.querySelector("#deleteButton").addEventListener("click", function(e) {
      skinData.Actions.splice(i, 1);

      writeDataFromImageBuffer(skinBuffer, skinData);
    });

    templateInstance.addEventListener("mouseenter", function() {
      selectedAction = skinData.Actions[i].getSelectedId();
      isRenderDirty = true;
    });
    templateInstance.addEventListener("mouseleave", function() {
      selectedAction = -1;
      isRenderDirty = true;
    });

    actionsHolder.appendChild(templateInstance);

  }

}

function OnImportImageClicked() {
  popupWindow(function(builder) {
    builder.addTitle("Import");
    builder.addText("Here you can import your own skin!");
    builder.addText("Just select your skin below:");

    let fileDataURL = null;
    builder.addFile(function(e) {
      var file = e.target.files[0];
      if (!file) {
        return;
      }
      var reader = new FileReader();
      reader.onload = function (e) {
        var contents = e.target.result;
        fileDataURL = contents;
      };
      reader.readAsDataURL(file);
    });
    let errorText = builder.addText("");
    errorText.style.color = "red";

    builder.addButton("Import", function() {
      if (fileDataURL == null)
      {
        errorText.innerText = "No image was provied";
      }
      else {
        skinBuffer.setImageFromUrl(fileDataURL);
        builder.close();
      }
    });
  });
}
function OnImportPlayerClicked() {
  popupWindow(function(builder) {
    builder.addTitle("Import");
    builder.addText("Here you can import skins from player names!");
    builder.addText("Simply write a minecraft username below, and their skin will be imported");
    let input = builder.addTextInput();
    builder.addButton("Import", function() {
      let url = "./GetMinecraftSkin/" + input.value;
      skinBuffer.setImageFromUrl(url);
      builder.close();
    });
  });
}
function OnExportClicked() {
  downloadURI(skinBuffer.ExportToDataUrl(), "skin.png");
}

function GetCordinatesFromIndex(index) {
  if (index < (8*24)) {
      let wayInX = (index%24);
      let x = 24 + wayInX + ((wayInX >= 16) * 16);
      let y = Math.floor(index/24);

      return [x,y];
  }
  else if (index < ((8*24)+(8*24))) {
      let newIndex = index - (8*24);
      
      let wayInX = (newIndex%24);
      let x = wayInX + ((wayInX >= 4)*8) + ((wayInX >= (4*3))*(8+8)) + ((wayInX >= (4*5)) * (4*2));
      let y = 16+Math.floor(newIndex/24) + ((newIndex >= 4*24)*12);

      return [x,y];
  }
  else if (index < ((8*24)+(8*24)+(32*8))) {
      let newIndex = index - ((8*24)+(8*24));

      let x = 56 + (newIndex%8);
      let y = 16 + Math.floor(newIndex/8);

      return [x,y];
  }
  else {
      let newIndex = index - ((8*24)+(8*24)+(32*8));
      
      let xOffset = newIndex%32;
      let x = xOffset + Math.floor(((xOffset+4)/8))*8;
      let y = 48 + Math.floor(newIndex/32);

      return [x,y];
  }
}
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}
function httpGetAsync(adress)
{
	return new Promise((resolve, reject) => {
		var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            resolve(xmlHttp.responseText);
    }
    xmlHttp.open("GET", adress, true); // true for asynchronous 
    xmlHttp.send(null);
	});
}
function popupWindow(createCallback) {
  let template = document.getElementById("popupTemplate");

  let popup = template.content.querySelector("#popup").cloneNode(true);
  let body = popup.querySelector("#popupBody");

  let builder = {
    addTitle: function(title) { 
      let element = document.createElement("h1");
      element.innerText = title;
      return body.appendChild(element);
    },
    addText: function(text) { 
      let element = document.createElement("p");
      element.innerText = text;
      return body.appendChild(element);
    },
    addButton: function(title,callback) { 
      let element = document.createElement("button");
      element.className = "greenButton";
      element.innerText = title;
      element.addEventListener("click", callback);
      return body.appendChild(element);
    },
    addFile: function(onChanged) {
      let element = document.createElement("input");
      element.setAttribute("type", "file")
      element.addEventListener("change", onChanged);
      return body.appendChild(element);
    },
    addTextInput: function(onChanged) {
      let element = document.createElement("input");
      element.setAttribute("type", "text")
      element.addEventListener("change", onChanged);
      return body.appendChild(element);
    },
    close: function() {
      document.body.removeChild(popup);
    }
  };
  popup.querySelector("#xButton").addEventListener("click", function() {
    document.body.removeChild(popup);
  });

  createCallback(builder);
  document.body.appendChild(popup);
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

      isRenderDirty = true;
    };
    image.src = url;
  };
  if (imageBuffer.SetPixel) { // if the paramater is a imageBuffer object it'll have a SetPixel function on it
    imageBuffer.OnChanged.push(makeImage);
    if (imageBuffer.IsDoneLoading()) {

      imageBuffer.InvokeOnChanged(imageBuffer.ExportToDataUrl()); // run on changed right away

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

  this.setImageFromUrl = function(url) {
    image = new Image();
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      RegenerateImageData();
      isDoneLoading = true;

      if (this.OnChanged.length != 0) {
        this.ApplyChanges();
      }
    };
    image.src = url;
    isDoneLoading = false;
  };
  this.setImageFromUrl(url);

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

    this.InvokeOnChanged(canvas.toDataURL());
  };
  this.InvokeOnChanged = function(dataUrl) {
    for(let i = 0; i < this.OnChanged.length; i++) {
      if (this.OnChanged[i]) {
        this.OnChanged[i](dataUrl);
      }
    }
  }
  this.OnChanged = [];
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
    return defualtValues;

  const arr = [];
  for(let i = 0; i < maxUnusedPlayerPixels; i += 3) {
    let cord1 = GetCordinatesFromIndex(i);
    const val1 = imgBuffer.GetPixel(cord1[0],cord1[1]);
    let cord2 = GetCordinatesFromIndex(i+1);
    const val2 = imgBuffer.GetPixel(cord2[0],cord2[1]);
    let cord3 = GetCordinatesFromIndex(i+2);
    const val3 = imgBuffer.GetPixel(cord3[0],cord3[1]);

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
  for(let i = 0; i < maxUnusedPlayerPixels; i++) {
    let cords = GetCordinatesFromIndex(i);
    imgBuffer.SetPixel(cords[0],cords[1], [0,0,0,0]);
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

  if (arr.length != 0) {
    arr.sort((a,b) => a.Index - b.Index);
  
    let indexLastBlock = -1;
    let oldIndex = arr[0].Index;
    for(let i = 0; i < arr.length; i++) {
      const obj = arr[i];
  
      const id = obj.Action.Id;
      const minMax = obj.Action.MinMax;
      const data = obj.Action.Data;
  
      const val1Cords = GetCordinatesFromIndex(i * 3 + 0);
      imgBuffer.SetPixel(val1Cords[0], val1Cords[1], [minMax[0],minMax[1],id,255]);
      const val2Cords = GetCordinatesFromIndex(i * 3 + 1);
      imgBuffer.SetPixel(val2Cords[0], val2Cords[1], [minMax[2],minMax[3],data[0],255]);
      const val3Cords = GetCordinatesFromIndex(i * 3 + 2);
      imgBuffer.SetPixel(val3Cords[0], val3Cords[1], [data[1],data[2],data[3],255]);
  
      if (arr[i+1] === undefined || obj.Index !== arr[i+1].Index) {
        const length = i-indexLastBlock;
        const firstIndexThisBlock = indexLastBlock+1;
  
        let x = obj.Index%8;
        let y = Math.floor(obj.Index/8);
        imgBuffer.SetPixel(x,y, [firstIndexThisBlock%256, Math.floor(firstIndexThisBlock/256), length, 255]);
  
        indexLastBlock = i;
      }
      
      oldIndex = obj.Index;
    }
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

  this.getSelectedId = function() {
    return this.MinMax[0] + this.MinMax[1]*64 + this.MinMax[2]*4096 + this.MinMax[3]*262144;
  }
  this.getActionColor = function() {
    function HSVtoRGB(h, s, v) {
      var r, g, b, i, f, p, q, t;
      if (arguments.length === 1) {
          s = h.s, v = h.v, h = h.h;
      }
      i = Math.floor(h * 6);
      f = h * 6 - i;
      p = v * (1 - s);
      q = v * (1 - f * s);
      t = v * (1 - (1 - f) * s);
      switch (i % 6) {
          case 0: r = v, g = t, b = p; break;
          case 1: r = q, g = v, b = p; break;
          case 2: r = p, g = v, b = t; break;
          case 3: r = p, g = q, b = v; break;
          case 4: r = t, g = p, b = v; break;
          case 5: r = v, g = p, b = q; break;
      }
      return [
          Math.round(r * 255),
          Math.round(g * 255),
          Math.round(b * 255)
      ];
    }

    let colorSeed = (this.Id/13.2) + ((this.MinMax[0]*this.MinMax[3])+(this.MinMax[1]*this.MinMax[2]))/13.0;
    colorSeed = colorSeed - Math.floor(colorSeed);
    return HSVtoRGB(colorSeed,1,1);
  }
}

main();