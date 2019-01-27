import FakeXHRLoader from "./FakeXHRLoader";

export default class RawSVGFile extends Phaser.Loader.FileTypes.SVGFile {
    rawData: string;

    constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Loader.FileTypes.SVGFileConfig, data: string, svgConfig?: Phaser.Loader.FileTypes.SVGSizeConfig) {
        super(loader, key, undefined, svgConfig);
        this.rawData = data;
    }

    load(): void {
        if (this.state === Phaser.Loader.FILE_POPULATED) {
            this.loader.nextFile(this, true);
        } else {
            this.xhrLoader = FakeXHRLoader(this, this.loader.xhr);
        }
    }
}
