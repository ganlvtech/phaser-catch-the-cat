/**
 * Modified from "phaser/src/loader/XHRLoader.js"
 */

import FakeXMLHttpRequest from "./fake-xml-http-request";
import RawFile from "./RawFile";

export default function FakeXHRLoader(file: RawFile, config: XHRSettingsObject): XMLHttpRequest {
    /**
     * @link https://github.com/pretenderjs/FakeXMLHttpRequest/blob/master/src/fake-xml-http-request.js
     */
    var xhr = new FakeXMLHttpRequest();

    xhr.open("GET", file.src, config.async, config.user, config.password);

    xhr.responseType = file.xhrSettings.responseType;
    xhr.timeout = config.timeout;

    if (config.header && config.headerValue) {
        xhr.setRequestHeader(config.header, config.headerValue);
    }

    if (config.requestedWith) {
        xhr.setRequestHeader("X-Requested-With", config.requestedWith);
    }

    if (config.overrideMimeType) {
        xhr.overrideMimeType(config.overrideMimeType);
    }

    // After a successful request, the xhr.response property will contain the requested data as a DOMString, ArrayBuffer, Blob, or Document (depending on what was set for responseType.)

    xhr.onload = file.onLoad.bind(file, xhr);
    xhr.onerror = file.onError.bind(file);
    xhr.onprogress = file.onProgress.bind(file);

    //  This is the only standard method, the ones above are browser additions (maybe not universal?)
    // xhr.onreadystatechange

    xhr.send();

    setTimeout(() => {
        xhr.respond(200, {"Content-Type": "application/octet-stream"}, file.rawData);
    }, 1);

    return xhr;
};
